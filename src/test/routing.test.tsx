import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "../App";

vi.mock("../pages/Index", async () => {
  const { Link } = await import("react-router-dom");
  return { default: () => <main><h1>Home</h1><Link to="/produtos">Products</Link></main> };
});
vi.mock("../pages/Produtos", () => ({ default: () => <h1>Products page</h1> }));
vi.mock("../pages/AboutUs", () => ({ default: () => <h1>About page</h1> }));
vi.mock("../pages/Assistencia", () => ({ default: () => <h1>Service page</h1> }));
vi.mock("../pages/Contact", () => ({ default: () => <h1>Contact page</h1> }));

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  window.history.replaceState({}, "", "/");
});

describe("public base routing", () => {
  it("renders the homepage under /eletro-cadori/", () => {
    vi.stubEnv("BASE_URL", "/eletro-cadori/");
    window.history.replaceState({}, "", "/eletro-cadori/");
    render(<App />);
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });

  it("prefixes internal navigation exactly once", () => {
    vi.stubEnv("BASE_URL", "/eletro-cadori/");
    window.history.replaceState({}, "", "/eletro-cadori/");
    render(<App />);
    const link = screen.getByRole("link", { name: "Products" });
    expect(link).toHaveAttribute("href", "/eletro-cadori/produtos");
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/eletro-cadori/produtos");
    expect(screen.getByRole("heading", { name: "Products page" })).toBeInTheDocument();
  });

  it.each([
    ["quem-somos", "About page"],
    ["produtos", "Products page"],
    ["assistencia", "Service page"],
    ["contato", "Contact page"],
  ])("resolves direct access to /eletro-cadori/%s", (path, heading) => {
    vi.stubEnv("BASE_URL", "/eletro-cadori/");
    window.history.replaceState({}, "", `/eletro-cadori/${path}`);
    render(<App />);
    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
  });

  it("preserves root routing for the development preview", () => {
    vi.stubEnv("BASE_URL", "/");
    window.history.replaceState({}, "", "/");
    render(<App />);
    expect(screen.getByRole("link", { name: "Products" })).toHaveAttribute("href", "/produtos");
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });

  it("returns from an unknown route to the subpath homepage", () => {
    vi.stubEnv("BASE_URL", "/eletro-cadori/");
    window.history.replaceState({}, "", "/eletro-cadori/missing");
    render(<App />);
    const link = screen.getByRole("link", { name: "Return to Home" });
    expect(link).toHaveAttribute("href", "/eletro-cadori/");
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/eletro-cadori/");
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });
});
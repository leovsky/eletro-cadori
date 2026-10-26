// @vitest-environment node
import { afterEach, describe, expect, it, vi } from "vitest";
import { portableAssets } from "../../build/portable-assets";

afterEach(() => vi.unstubAllGlobals());

describe("portable product assets", () => {
  it("emits the product image instead of a host-root managed URL", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(new Uint8Array([255, 216, 255]), {
      status: 200,
      headers: { "content-type": "image/jpeg" },
    }));
    vi.stubGlobal("fetch", fetchMock);
    const plugin = portableAssets();
    const emitFile = vi.fn().mockReturnValue("product_image");
    const error = vi.fn((message: string) => { throw new Error(message); });
    const handler = typeof plugin.load === "function" ? plugin.load : plugin.load?.handler;
    if (!handler) throw new Error("Asset loader missing");
    const output = await handler.call({ emitFile, error } as never, `${process.cwd()}/src/assets/produtos/produto-1.jpg.asset.json`);
    expect(emitFile).toHaveBeenCalledWith({
      type: "asset", name: "produto-1.jpg", source: new Uint8Array([255, 216, 255]),
    });
    expect(output).toContain("url: import.meta.ROLLUP_FILE_URL_product_image");
    expect(fetchMock.mock.calls[0][0].pathname).toBe("/__l5e/assets-v1/5e21694c-9c1f-4c3b-ad61-690b86ce533b/produto-1.jpg");
  });

  it("fails rather than publishing an HTML error page as an image", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("Not found", {
      status: 404, headers: { "content-type": "text/html" },
    })));
    const plugin = portableAssets();
    const handler = typeof plugin.load === "function" ? plugin.load : plugin.load?.handler;
    if (!handler) throw new Error("Asset loader missing");
    await expect(handler.call({
      emitFile: vi.fn(), error: (message: string) => { throw new Error(message); },
    } as never, `${process.cwd()}/src/assets/produtos/produto-1.jpg.asset.json`)).rejects.toThrow("Unable to bundle managed asset produto-1.jpg");
  });
});
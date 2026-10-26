import { readFile } from "node:fs/promises";
import type { Plugin } from "vite";

// Keep the managed asset pointers as the source of truth, but publish the
// actual bytes alongside the site when hosting outside Lovable.
export function portableAssets(): Plugin {
  return {
    name: "portable-managed-assets",
    apply: "build",
    enforce: "post",
    async transform(_code, id) {
      if (!id.endsWith(".asset.json")) return null;
      const asset = JSON.parse(await readFile(id, "utf8"));
      if (asset.version !== 1 || !asset.url?.startsWith("/__l5e/assets-v1/")) return null;

      const origin = `https://id-preview--${asset.project_id}.lovable.app`;
      const response = await fetch(new URL(asset.url, origin), {
        signal: AbortSignal.timeout(30_000),
      });
      const contentType = response.headers.get("content-type")?.split(";")[0];
      if (!response.ok || contentType !== asset.content_type) {
        this.error(`Unable to bundle managed asset ${asset.original_filename}: HTTP ${response.status}, ${contentType}`);
      }
      const source = new Uint8Array(await response.arrayBuffer());
      if (source.byteLength === 0) this.error(`Managed asset ${asset.original_filename} is empty`);
      const reference = this.emitFile({ type: "asset", name: asset.original_filename, source });
      return `export default { ...${JSON.stringify(asset)}, url: import.meta.ROLLUP_FILE_URL_${reference} };`;
    },
  };
}
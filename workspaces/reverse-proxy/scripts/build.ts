// @ts-expect-error
await Bun.build({
  entrypoints: ["./src/cli.ts"],
  outdir: "./dist",
  minify: true,
});

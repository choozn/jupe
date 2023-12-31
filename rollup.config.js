import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: pkg.type === "module" ? "es" : "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript(), terser()],
  external: [],
};

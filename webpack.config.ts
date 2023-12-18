import path from "path";
import type { EnvironmentalVariables } from "./config/types/types";
import { buildWebpackConfig } from "./config/buildWebpackConfig";

export default (env: EnvironmentalVariables) => {
    const config = buildWebpackConfig({
        mode: env.mode,
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            output: path.resolve(__dirname, "build"),
            htmlWebpackPlugin: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src"),
        },
    });
    return config;
};

import type webpack from "webpack";
import type { buildLoadersOptions } from "./types/types";

export const buildLoaders = ({
    mode,
}: buildLoadersOptions): webpack.RuleSetRule[] => {
    return [
        {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) =>
                                Boolean(resPath.includes(".module.")),
                            localIdentName:
                                mode === "development"
                                    ? "[path][name]__[local]--[hash:base64:5]"
                                    : "[hash:base64:8]",
                        },
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
        {
            test: /\.(png|jpe?g|gif|ttf)$/i,
            use: [
                {
                    loader: "file-loader",
                },
            ],
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        },
    ];
};

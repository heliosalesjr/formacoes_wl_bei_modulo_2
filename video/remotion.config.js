import { Config } from "@remotion/cli/config";

Config.setPublicDir("../public");
Config.overrideWebpackConfig((config) => config);

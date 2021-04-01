// config-overrides.js
// see: https://github.com/timarney/react-app-rewired

const fs = require("fs");
const path = require("path");
const rewireBabelLoader = require("react-app-rewire-babel-loader");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {
    const commonFolder = "../../../common";

    const getDirectories = (source) =>
        fs
            .readdirSync(source, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => `${commonFolder}/${dirent.name}`);

    const commonDirectories = getDirectories(commonFolder);

    commonDirectories.forEach((dir) => {
        config = rewireBabelLoader.include(config, resolveApp(dir));
    });

    return config;
};

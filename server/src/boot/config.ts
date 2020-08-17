import path from "path";
import dotenv from "dotenv";

dotenv.config({
    "path": path.resolve(__dirname, "../.env")
});

process.env.NODE_CONFIG_DIR = path.join(__dirname, "../config");

require("config");

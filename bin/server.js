// @ts-check

/**
 * @namespace __MainServe__
 * @description
 * <strong>ID:</strong> </br>
 * Saat node pertama kali dijalankan, file ini dieksekusi pertama kali.
 * File ini menjadi pintu masuk sebelum menuju routing, controller, dan lain-lain.
 * di dalam file ini semua dependency yang berkaitan dengan
 * server (seperti express dan dotenv) di import,
 * dan akan di jalankan pertama kali saat inisiasi server.</br></br>
 *
 * <strong>EN:</strong> </br>
 * When node starting, this file will execute first. This file is the starting point
 * before routing, contoller, etc. All dependencies that should run first must be install
 * in this file (express, dotenv, etc).
 */

// importing express
import express from "express";

// set up enverionment variables
import { resolve } from "path";
import { config as _config } from "dotenv";

// impert middlewares
import _app from "./app/config/index";
import loaderApp from "./app";

const envName = !process.env.ENV_NAME ? "PROD" : `${process.env.ENV_NAME}`;

_config({ path: resolve(__dirname, `../env/${envName}.env`) });

const app = express();

// load the app
loaderApp(app);

// start the server
app.listen(+_app.PORT, () => {
  // Run server
  if (process.env.APP_HOST !== "TEST") {
    console.log(
      `[INFO] [${new Date().toLocaleString()}] [${_app.HOST} on port ${
        _app.PORT
      } is Running]`
    );
  }
});

export default app;

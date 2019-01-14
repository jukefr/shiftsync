#!/usr/bin/env node

import { homedir } from "os";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import { Database } from "sqlite3";
import Sequelize from "sequelize";
import * as simpleGit from "simple-git";

// appDir is used to store configuration for the app
const appDir = join(homedir(), ".ssync");

// Create appDir if it does not exist
if (!existsSync(appDir)) mkdirSync(appDir);

// Initialize sqlite3 database
const database = new Database(join(appDir, "database"));
// Instantly close as we are opening with sequelize
database.close();

// Create sequelize instance
const sequelize = new Sequelize("database", "", "", {
  dialect: "sqlite",
  storage: join(appDir, "database")
});

// Create configuration object model
const Configuration = sequelize.define("configuration", {
  backupPath: {
    type: Sequelize.STRING
  },
  restorePath: {
    type: Sequelize.STRING
  }
});

// Wrap for await helper
const main = async () => {
  // Initialize our model
  await Configuration.sync();

  // TODO :
  //
  // 1. Create {self} config
  //  a. set git repo
  //
  // 2. Create new config input
  //  a. backup/restore
  //  b. premade templates ?
  //
  // 3. Auto sync (push/pull)
  //
  // 4. Auto merge
};

// Go style
main();

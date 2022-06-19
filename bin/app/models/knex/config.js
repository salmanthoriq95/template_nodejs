// @ts-check

import { knex } from "knex";
import mySqlDb from "../../config";

export default knex({
  client: "mysql2",
  connection: {
    host: mySqlDb.HOST,
    database: mySqlDb.DATABASE,
    port: +mySqlDb.PORT,
    user: mySqlDb.USER,
    password: mySqlDb.PASSWORD,
    multipleStatements: true,
  },
});

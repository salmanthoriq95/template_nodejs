// @ts-check

const connection = require("../config");
const table = require("../table.properties/news");

module.exports.getData = async (id) => await connection(table.PROPERTIES.TABLE_NAME).modify((currentQuery) => {
    if (id) currentQuery.where(table.PROPERTIES.COLOUMNS.ID, id);
  });
module.exports.postData = async (payload) => await connection(table.PROPERTIES.TABLE_NAME).insert(payload);
module.exports.putData = async (payload) => {
  const { id } = payload;
  delete payload.id;
  return await connection(table.PROPERTIES.TABLE_NAME)
    .update(payload)
    .where(table.PROPERTIES.COLOUMNS.ID, id);
};
module.exports.deleteData = async (id) => await connection(table.PROPERTIES.TABLE_NAME)
    .where(table.PROPERTIES.COLOUMNS.ID, id)
    .del();

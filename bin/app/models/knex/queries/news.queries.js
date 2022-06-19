// @ts-check

import connection from "../config";
import { properties } from "../table.properties/news";

export async function getData(id) {
  const data = await connection(properties.TABLE_NAME).modify(
    (currentQuery) => {
      if (id) currentQuery.where(properties.COLOUMNS.ID, id);
    }
  );
  return data;
}
export async function postData(payload) {
  const data = await connection(properties.TABLE_NAME).insert(payload);
  return data;
}
export async function putData(payload) {
  const { id } = payload;
  const payloadToUpdate = payload;
  delete payloadToUpdate.id;
  const data = await connection(properties.TABLE_NAME)
    .update(payloadToUpdate)
    .where(properties.COLOUMNS.ID, id);
  return data;
}
export async function deleteData(id) {
  const data = await connection(properties.TABLE_NAME)
    .where(properties.COLOUMNS.ID, id)
    .del();
  return data;
}

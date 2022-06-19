// @ts-check

import execQuery from "../config";
import tableProp from "../table.properties/news";

export async function getData(id) {
  let sql = `select * from ${tableProp.PROPERTIES.TABLE_NAME}`;
  if (id) sql += ` where ${tableProp.PROPERTIES.COLOUMNS.ID} = ${id}`;
  const data = await execQuery(sql);
  return data;
}

export async function postData(payload) {
  const sql = `insert into ${tableProp.PROPERTIES.TABLE_NAME} (
				${tableProp.PROPERTIES.COLOUMNS.TITLE},
				${tableProp.PROPERTIES.COLOUMNS.CONTENT},
				${tableProp.PROPERTIES.COLOUMNS.AUTHOR}
				) values (
					"${payload.title}",
					"${payload.content}",
					${payload.author === "" ? null : `"${payload.author}"`}
				)`;
  const data = await execQuery(sql);
  return data;
}

export async function putData(payload) {
  const sql = `update ${tableProp.PROPERTIES.TABLE_NAME} set
				${tableProp.PROPERTIES.COLOUMNS.TITLE} = "${payload.title}",
				${tableProp.PROPERTIES.COLOUMNS.CONTENT} = "${payload.content}",
				${tableProp.PROPERTIES.COLOUMNS.AUTHOR} = ${
    payload.author === "" ? null : `"${payload.author}"`
  }
				where ${tableProp.PROPERTIES.COLOUMNS.ID} = ${payload.id}
				`;
  const data = await execQuery(sql);
  return data;
}
export async function deleteData(payload) {
  const sql = `delete from ${tableProp.PROPERTIES.TABLE_NAME} where ${tableProp.PROPERTIES.COLOUMNS.ID} = ${payload.id}`;
  const data = await execQuery(sql);
  return data;
}

// @ts-check

import {
  getData,
  postData,
  putData,
  deleteData,
} from "../../../models/mysql/queries/news.queries";
import formatReturn from "../../../utilities/return.formatter";

export async function getService(payload) {
  const data = await getData(payload.id);
  return formatReturn({ success: true, data, message: "success get data" });
}

export async function postService(payload) {
  await postData(payload);
  return formatReturn({ success: true, message: "success add data" });
}
export async function putService(payload) {
  putData(payload);
  return formatReturn({ success: true, message: "success edit data" });
}
export async function deleteService(payload) {
  deleteData(payload);
  return formatReturn({ success: true, message: "success delete data" });
}

// @ts-check

/**
 * @class
 * @classdesc
 * ID:</br>
 * </br></br>
 * EN:
 */
class NewsTable {
  /**
   * ID:</br>
   * </br></br>
   * EN:
   * @constructor
   */
  constructor() {
    this.PROPERTIES = {
      TABLE_NAME: "news",
      COLOUMNS: {
        ID: "id",
        TITLE: "title",
        CONTENT: "content",
        AUTHOR: "author",
      },
    };
  }
}

const newsTable = new NewsTable();
export default newsTable;
export const properties = newsTable.PROPERTIES;

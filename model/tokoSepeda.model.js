const db = require("../connect");

module.exports = {
  getTokoData: data => {
    return new Promise((resolve, reject) => {
      //Get Query
      const isType = data.type !== null;
      const isBranch = data.branch !== null;
      const type = data.type;
      const branch = data.branch;
      let queryTemp = "SELECT * FROM tbToko";

      //For Pagination
      const page = data.page || 1;
      const limit = data.limit || 10;

      if (type || branch) {
        queryTemp += `WHERE `;
        queryTemp += isType ? `type LIKE '${type}' ` : ``;
        queryTemp += type && branch ? `AND ` : ``;
        queryTemp += isBranch ? `branch LIKE '%${branch}%'` : ``;
      }

      const skipPage = (Number(page) - 1) * limit;
      let queryResult = queryTemp + ` LIMIT ${skipPage}, ${limit}`;

      console.log(queryResult);

      db.query(queryResult, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  },

  insertTokoData: inputData => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO tbToko SET ?`, [inputData], (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  },

  updateTokoData: newData => {
    return new Promise((resolve, reject) => {
      const params = newData.params;
      const data = newData.dataBody;

      db.query(
        `UPDATE tbToko SET ? WHERE id=?`,
        [data, params],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  deleteTokoData: paramsData => {
    return new Promise((resolve, reject) => {
      const params = paramsData;

      db.query(`DELETE FROM tbToko WHERE id=?`, [params], (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  }
};

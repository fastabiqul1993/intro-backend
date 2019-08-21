const db = require("../Configs/connect");
const Helpers = require("../Helpers/models.helper");

module.exports = {
  getAll: params => {
    return new Promise((resolve, reject) => {
      const skipPage = Helpers.getSkipPage(params.page, params.limit);
      const limit = params.limit;

      db.query(
        `SELECT * FROM tbBike LIMIT ${skipPage}, ${limit}`,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  getBy: data => {
    return new Promise((resolve, reject) => {
      //Get Query
      const isType = data.type !== undefined;
      const isBranch = data.branch !== undefined;
      const isName = data.name !== undefined;
      const isID = data.id !== undefined;

      const type = data.type;
      const branch = data.branch;
      const name = data.name;
      const id = data.id;

      let queryTemp = "SELECT * FROM tbBike ";

      //For Pagination
      const page = data.page || 1;
      const limit = data.limit || 10;

      if (isType || isBranch || isName || isID) {
        queryTemp += `WHERE `;
        queryTemp += isType ? `type LIKE '${type}' ` : ``;
        queryTemp += (isType && isBranch) || (isType && isName) ? `AND ` : ``;
        queryTemp += isBranch ? `branch LIKE '%${branch}%' ` : ``;
        queryTemp += isBranch && isName ? `AND ` : ``;
        queryTemp += isName ? `name LIKE '%${name}%'` : ``;
      }

      const skipPage = Helpers.getSkipPage(page, limit);
      let queryResult = queryTemp + ` LIMIT ${skipPage}, ${limit}`;

      console.log(queryResult);
      console.log("ini isName", isName);
      console.log("ini isBranch", isBranch);

      db.query(queryResult, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  },

  getByID: param => {
    return new Promise((resolve, reject) => {
      const id = param;

      db.query(`SELECT * FROM tbBike WHERE id=?`, [id], (error, result) => {
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
      db.query(`INSERT INTO tbBike SET ?`, [inputData], (error, response) => {
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
        `UPDATE tbBike SET ? WHERE id=?`,
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

      db.query(`DELETE FROM tbBike WHERE id=?`, [params], (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  }
};

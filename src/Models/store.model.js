const db = require("../Configs/connect");
const Helpers = require("../Helpers/models.helper");

module.exports = {
  getAllTokoData: params => {
    return new Promise((resolve, reject) => {
      const skipPage = Helpers.getSkipPage(params.page, params.limit);
      const limit = params.limit;

      db.query(
        `SELECT * FROM tbToko LIMIT ${skipPage}, ${limit}`,
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

  getByType: params => {
    return new Promise((resolve, reject) => {
      const skipPage = Helpers.getSkipPage(params.page, params.limit);
      const limit = params.limit;
      const type = params.type;

      db.query(
        `SELECT * FROM tbToko WHERE type LIKE '%${type}%' LIMIT ${skipPage}, ${limit}`,
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

  getByBranch: params => {
    return new Promise((resolve, reject) => {
      const skipPage = Helpers.getSkipPage(params.page, params.limit);
      const limit = params.limit;
      const branch = params.branch;

      db.query(
        `SELECT * FROM tbToko WHERE branch LIKE '%${branch}%' LIMIT ${skipPage}, ${limit}`,
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

  getByID: params => {
    return new Promise((resolve, reject) => {
      const id = params.id;

      db.query(`SELECT * FROM tbToko WHERE id=?`, [id], (error, result) => {
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

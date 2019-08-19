const db = require('../connect')

module.exports = {
  getTokoData : (data) => {
    return new Promise((resolve, reject) => {
      const params = data
      const key = Object.keys(params)
      const paramLength = Object.getOwnPropertyNames(params).length
      
      const queryFindAll = 'SELECT * FROM tbToko'
      let queryResult = ''

      if(paramLength > 2) {
        resolve('Sorry, parameter cannot be more than 2')
      } else if(paramLength === 0) {
        queryResult = queryFindAll
      } else if(paramLength === 1) {
        queryResult = queryFindAll.concat(` WHERE ${key} LIKE '%${params[key]}%'`)
      } else if(paramLength === 2) {
        queryResult = queryFindAll.concat(` WHERE (${key[0]} LIKE '%${params[key[0]]}%') AND (${key[1]} LIKE '%${params[key[1]]}%')`)
      }
      
      db.query(queryResult, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },

  insertTokoData: (inputData) => {
    return new Promise((resolve, reject) => {
      // const { name, brand, type, branch, price } = inputData

      db.query(`INSERT INTO tbToko SET ?`, 
              [inputData], (error, response) => {
              if (!error) {
                resolve(response)
              }
              else {
                reject(error)
              }
            })
    })
  },

  updateTokoData: (newData) => {
    return new Promise((resolve, reject) => {
      const params = newData.params
      const data = newData.dataBody 
      
      db.query(`UPDATE tbToko SET ? WHERE id=?`,
              [data, params], (error, response) => {
              if(!error) {
                resolve(response)
              } else {
                reject(error)
              }
      })
    })
  },

  deleteTokoData: (paramsData) => {
    return new Promise((resolve, reject) => {
      const params = paramsData

      db.query(`DELETE FROM tbToko WHERE id=?`, [params], (error, response) => {
        if (!error) {
          resolve(response)
        }
        else {
          reject(error)
        }
      })
    })
  }
}
module.exports = {
  response: (res, result, status, error) => {
    let resPrint = {};

    resPrint.error = error || null;
    resPrint.httpStatus = status || 200;
    resPrint.result = result;

    return res.status(resPrint.httpStatus).json(resPrint.result);
  }
};

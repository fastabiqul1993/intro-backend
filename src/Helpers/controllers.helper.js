module.exports = {
  response: (res, result, status, error) => {
    let resPrint = {};

    if (result < 1) {
      status = 404;
      result = "Not Found";
    }

    resPrint.status = status || 200;
    resPrint.result = result;
    resPrint.error = error;

    return res.status(resPrint.status).json(resPrint);
  }
};

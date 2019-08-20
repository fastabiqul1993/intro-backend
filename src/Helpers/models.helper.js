module.exports = {
  getSkipPage: (page, limit) => {
    return (Number(page) - 1) * limit;
  }
};

const responseStandard = (statusCode, data, res, message) => {
  const isSuccess = statusCode >= 200 && statusCode < 300 ? "Success" : "False";

  const responseBody = {
    status_code: statusCode,
    status: isSuccess,
    data: data,
    message: message,
  };

  res.status(statusCode).json(responseBody);
};

const responsePagination = (
  statusCode = 0,
  data,
  res,
  message,
  limit = 10,
  totalData = 0,
  currentPage = 0
) => {
  const isSuccess = statusCode >= 200 && statusCode < 300 ? "Success" : "False";

  const responseBody = {
    code: statusCode,
    status: isSuccess,
    data: {
      meta: {
        item_per_page: limit,
        total: totalData,
        currentPage: currentPage,
      },
      list: data,
    },
    message: message,
  };

  res.status(statusCode).json(responseBody);
};

module.exports = { responseStandard, responsePagination };

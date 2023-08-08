import { ApiResponse } from "./quote";

export async function wrapFetch(
  promise: Promise<unknown> | (() => Promise<unknown>),
  mock: unknown,
  time = 1000
) {
  const mockedPromise: Promise<unknown> = new Promise((resolve) => {
    setTimeout(resolve, time, mock);
  });
  const promises =
    typeof promise === "function"
      ? [mockedPromise, promise()]
      : [mockedPromise, promise];
  const value = await Promise.any(promises);
  return value;
}

export const debounce = (fn: () => unknown, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: []) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const quoteMock: ApiResponse = {
  statusCode: 200,
  message: "Random quotes",
  pagination: {
    currentPage: 1,
    nextPage: null,
    totalPages: 1,
  },
  totalQuotes: 1,
  data: [
    {
      _id: "5eb17aaeb69dc744b4e72a4a",
      quoteText:
        "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
      quoteAuthor: "Bill Gates",
      quoteGenre: "business",
      __v: 0,
    },
  ],
};

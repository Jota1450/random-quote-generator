export interface ApiResponse {
  statusCode: number;
  message: string;
  pagination: Pagination;
  totalQuotes: number;
  data: Quote[];
}

export interface Quote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
}

export interface Pagination {
  currentPage: number;
  nextPage: null;
  totalPages: number;
}

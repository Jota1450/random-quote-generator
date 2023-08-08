import { ApiResponse } from "./quote";

export async function getRandomQuote() {
  const url = "https://quote-garden.onrender.com/api/v3/quotes/random";
  const response = await fetch(url);
  const quote: ApiResponse = await response.json();
  return quote.data[0];
}

export async function getQuotesByAuthor(author: string) {
  const url = `https://quote-garden.onrender.com/api/v3/quotes?author=${author}`;
  const response = await fetch(url);
  const quote: ApiResponse = await response.json();
  return quote.data;
}

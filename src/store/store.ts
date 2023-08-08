import { create } from "zustand";
import { combine } from "zustand/middleware";
import { Quote } from "../services/quote";
import { quoteMock, wrapFetch } from "../services/utils";
import { getRandomQuote } from "../services/quoteServices";

export const useQuoteStore = create(
  combine(
    {
      quoteText: "",
      quoteAuthor: "",
      quoteGenre: "",
      loading: false,
    },
    (set) => ({
      setQuote: (quote: Quote) =>
        set(() => ({
          quoteText: quote.quoteText,
          quoteAuthor: quote.quoteAuthor,
          quoteGenre: quote.quoteGenre,
        })),
      setQuoteText: (text: string) => set(() => ({ quoteText: text })),
      setLoading: () => set((state) => ({ loading: !state.loading })),
      fetchRandomQuote: async () => {
        set(() => ({ loading: false }));
        const quote = (await wrapFetch(
          getRandomQuote,
          quoteMock.data[0]
        )) as Quote;
        set(() => ({
          quoteText: quote.quoteText,
          quoteAuthor: quote.quoteAuthor,
          quoteGenre: quote.quoteGenre,
          loading: true,
        }));
      },
    })
  )
);

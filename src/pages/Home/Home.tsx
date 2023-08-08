import { useEffect } from "react";
import InfoCard from "../../components/author-card/InfoCard";
import Quote from "../../components/quote/Quote";
import { useQuoteStore } from "../../store/store";
import "./home.css";
import { Animated } from "react-animated-css";

function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchRandomQuote();
    return () => {
      setQuoteText("");
    };
  }, []);

  const { text, author, quoteGenre, loading, fetchRandomQuote, setQuoteText } =
    useQuoteStore((state) => ({
      text: state.quoteText,
      author: state.quoteAuthor,
      quoteGenre: state.quoteGenre,
      loading: state.loading,
      fetchRandomQuote: state.fetchRandomQuote,
      setQuoteText: state.setQuoteText,
    }));

  return (
    <div className="page centered">
      {text && (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={loading && text !== ""}
        >
          <div className="content">
            <Quote text={text} />
            <InfoCard author={author} quoteGenre={quoteGenre} />
          </div>
        </Animated>
      )}
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { getQuotesByAuthor } from "../../services/quoteServices";
import { Quote as QuoteType } from "../../services/quote";
import Quote from "../../components/quote/Quote";
import { Animated } from "react-animated-css";
import { useParams } from "react-router";
import "./author.css";

const Author = () => {
  const { author } = useParams();
  const [quotes, setQuotes] = useState<QuoteType[]>([]);

  const fetch = async () => {
    const resp = await getQuotesByAuthor(author ?? "");
    setQuotes(resp);
  };

  useEffect(() => {
    fetch();
    return () => {
      setQuotes([]);
    };
  }, []);

  return (
    quotes.length > 1 && (
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={quotes.length > 1}
        className="content"
      >
        <h3>{author}</h3>
        <div className="author-list">
          {quotes.map(({ _id, quoteText }) => (
            <Quote text={quoteText} key={_id}></Quote>
          ))}
        </div>
      </Animated>
    )
  );
};

export default Author;

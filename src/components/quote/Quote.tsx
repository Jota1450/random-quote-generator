import "./quote.css";
interface QuoteProps {
  text?: string;
}

const defaultText =
  "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.";

const Quote = ({ text = defaultText }: QuoteProps) => {
  return (
    <div>
      <div className="quote">
        <p>“{text}”</p>
      </div>
    </div>
  );
};

export default Quote;

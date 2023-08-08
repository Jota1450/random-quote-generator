import { Link } from "react-router-dom";
import ArrowRight from "../../assets/ArrowRight";
import "./author-card.css";

interface AuthorCard {
  author: string;
  quoteGenre: string;
}

const InfoCard = ({ author, quoteGenre }: AuthorCard) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Link to={`/author/${author}`} style={{textDecoration: 'none'}}>
        <div className="card">
          <div className="info">
            <h3>{author}</h3>
            <h4>{quoteGenre}</h4>
          </div>
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default InfoCard;

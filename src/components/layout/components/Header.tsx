import { useLocation, useNavigate } from "react-router";
import AutoRenew from "../../../assets/autorenew";
import { useQuoteStore } from "../../../store/store";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fetchRandomQuote } = useQuoteStore((state) => ({
    fetchRandomQuote: state.fetchRandomQuote,
  }));

  const handleClick = () => {
    if (location.pathname === "/") {
      fetchRandomQuote();
    } else {
      navigate("/");
    }
  };

  return (
    <header>
      <button type="button" onClick={handleClick}>
        random
        <div className="rotate-center centered">
          <AutoRenew size={16} />
        </div>
      </button>
    </header>
  );
};

export default Header;

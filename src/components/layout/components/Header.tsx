import { useLocation, useNavigate } from "react-router";
import AutoRenew from "../../../assets/autorenew";
import { useQuoteStore } from "../../../store/store";
import { debounce } from "../../../services/utils";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fetchRandomQuote } = useQuoteStore((state) => ({
    fetchRandomQuote: state.fetchRandomQuote,
  }));
  const fetch = debounce(fetchRandomQuote, 400);
  const handleClick = () => {
    if (location.pathname === "/") {
      fetch();
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

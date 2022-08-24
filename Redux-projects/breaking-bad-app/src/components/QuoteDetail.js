import React from "react";
import Styles from "./QuoteDetail.module.css";

import { useParams, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const QuoteDetail = () => {
  const { quote_id } = useParams();
  const navigate = useNavigate();
  const quotes = useSelector((state) =>
    state.quotes.quotes.find((quote) => quote.quote_id === Number(quote_id))
  );

  return (
    <div>
      <h1 className={Styles.title1}>Quote Detail</h1>
      {quotes ? (
        <div>
          <p className={Styles.parag}>{quotes.quote}</p>
          <h4 className={Styles.title4}>{quotes.author}</h4>
          <button onClick={() => navigate(-1)} className={Styles.buttonback}>
            Go Back
          </button>
        </div>
      ) : (
        <div>
          <p className={Styles.parag}>Quote not found</p>
          <button onClick={() => navigate(-1)} className={Styles.buttonback}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteDetail;

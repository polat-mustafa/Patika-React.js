import React, { useEffect } from "react";

import { fetchQuote } from "../redux/quoteSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Styles from "./QuoteDetail.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);
  const status = useSelector((state) => state.quotes.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuote());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1 className={Styles.title1}>Breaking Bad Quotes</h1>
      {quotes.map((quote) => (
        <Link
          to={`/quote/${quote.quote_id}`}
          style={{
            display: "flex",
            width: "70%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            textDecoration: "none",
            padding: "10px",
            color: "#000",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            marginBottom: "10px",
            transition: "all 0.3s ease-in-out",
            margin: "20px auto",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "white",
              marginBottom: "10px",
              textDecoration: "none",
              marginRight: "50px",
              borderBottom: "1px solid #000",
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {quote.quote}
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "black",
              marginBottom: "10px",
              textDecoration: "none",
              marginRight: "50px",
              width: "100%",
              height: "100%",
              padding: "10px",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {quote.author}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Quote;

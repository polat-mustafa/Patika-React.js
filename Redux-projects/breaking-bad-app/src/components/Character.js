import React, { useEffect } from "react";

import { fetchCharacters } from "../redux/characterSlice";
import { useDispatch, useSelector } from "react-redux";

import Masonry from "react-responsive-masonry";

import { Link } from "react-router-dom";

const Character = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const status = useSelector((state) => state.characters.status);
  const page = useSelector((state) => state.characters.page);
  const nextPage = useSelector((state) => state.characters.nextPage);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  return (
    <>
      <Masonry columnsCount={4} gutter="20">
        {characters.map((character) => (
          <div
            key={character.char_id}
            style={{
              width: "80%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              margin: "20px",
              border: "1px solid black",
              borderRadius: "10px",
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Link
              to={`/character/${character.char_id}`}
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
                height: "100%",
              }}
            >
              <h4>{character.name}</h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "#999",
                  marginBottom: "10px",
                }}
              >
                {character.occupation}
              </p>
              <img
                src={character.img}
                alt={character.name}
                style={{
                  width: "60%",
                  height: "auto",
                  borderRadius: "10px",
                  margin: "10px",
                }}
              />
            </Link>
          </div>
        ))}
      </Masonry>
      {nextPage && status !== "loading" && (
        <button
          onClick={() => dispatch(fetchCharacters(page))}
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "10px",
            border: "1px solid black",
            backgroundColor: "#f5f5f5",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Load more
        </button>
      )}

      {!nextPage && (
        <div>
          <p
            style={{
              fontSize: "15px",
              color: "#999",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            There is no more content
          </p>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "10px",
              border: "1px solid black",
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Back to top
          </button>
        </div>
      )}
    </>
  );
};

export default Character;

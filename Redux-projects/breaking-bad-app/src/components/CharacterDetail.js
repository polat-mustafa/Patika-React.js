import React from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const CharacterDetail = () => {
  const { char_id } = useParams();

  const character = useSelector((state) =>
    state.characters.characters.find(
      (character) => character.char_id === Number(char_id)
    )
  );

  return (
    <div
      style={{
        width: "30%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "0 auto",
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2>{character.name}</h2>
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
      <p>{character.description}</p>
      <p>{character.occupation}</p>
      <p>{character.appearance}</p>
      <p>{character.status}</p>
      <p>{character.nickname}</p>
      <p>{character.portrayed}</p>
    </div>
  );
};

export default CharacterDetail;

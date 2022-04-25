import React, { useEffect, useState } from "react";

const Emoji = () => {
  const [emoji, setEmoji] = useState("")

  const [search, setSearch] = useState("");

  const [list, setList] = useState([])

  useEffect(() => {
    const fetchEmoji = async () => {
      const response = await fetch(`https://api.github.com/emojis`)
      const data = await response.json()
      setEmoji(data[`${search}`])
    };
    fetchEmoji()
  }, [search])

  const addList = (e) => {
    e.preventDefault()
    setList([...list, emoji])
  };


  const copyToClipboard = (item) => {
    navigator.clipboard.writeText(item)
  };


  return (
    <div className="mainDiv">
        <div className="first">
        <h1>Emoji Search &#128269; </h1>
        <form onSubmit={addList} >
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter an emoji"
            />
            <button type="submit">Add</button>
            { emoji && <img src={emoji} alt="emoji" width={'40px'} style={{marginLeft: '1rem'}}/>}
        </form>
        </div>
        <div className="second">
        {list.map((item, index) => (
            <img key={index} onClick={copyToClipboard} src={item} alt="emoji" />
        ))}
        </div>
    </div>
  );
};

export default Emoji


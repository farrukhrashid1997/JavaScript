import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);

  const handleIdChange = () => {
    setIdFromButton(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button type="button" onClick={handleIdChange}>
        Fetch Post
      </button>
      <div>{posts.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}> wasup yo {post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;

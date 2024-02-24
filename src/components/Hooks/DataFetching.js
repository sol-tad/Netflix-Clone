import React, { useEffect, useState } from "react";
import axios from "axios";
//axios is js-library used to send Http request
function DataFetching() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;

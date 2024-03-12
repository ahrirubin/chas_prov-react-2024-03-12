// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setPosts(data);
    }

    getPosts();
  }, []);

  const checkFive = ({ post }) => {
    if (post.id < 6) {
      return <div></div>;
    } else {
    }
  };

  return (
    <div>
      {
        <table>
          {posts &&
            posts.map((post) => {
              if (post.id < 5) {
                return (
                  <ul>
                    <p>Title: </p>
                    <li>
                      <button
                        className=" border-none"
                        onClick={() => {
                          console.log(post.id);
                        }}
                      >
                        {post.title}
                      </button>
                    </li>
                    <p>Body: </p>
                    <li>{post.body}</li>
                  </ul>
                );
              }
            })}
        </table>
      }
    </div>
  );
}

export default App;

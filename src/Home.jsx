import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

function Home() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);

  return (
    <main className="Home">
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p
          style={{
            marginTop: "2rem",
          }}
        >
          No Posts to display
        </p>
      )} */}

      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p
          className="statusMsg"
          style={{
            color: "red",
          }}
        >
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No Posts to display</p>
        ))}
    </main>
  );
}

export default Home;

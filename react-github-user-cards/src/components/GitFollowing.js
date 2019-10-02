import React from "react";

function GitFollowing(props) {
  console.log(props);
  return (
    <>
      {props.user.map(user => {
        return (
          <div className="card">
            <img
              width="200"
              key={user.id}
              src={user.avatar_url}
              alt={user.login}
            />

            <a href={user.html_url}>
              <h3>{user.login}</h3>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default GitFollowing;

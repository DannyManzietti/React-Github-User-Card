import React from "react";

function MyGit(props) {
  console.log(props);
  return (
    <>
      <img
        width="200"
        key={props.user.id}
        src={props.user.avatar_url}
        alt={props.user.login}
      />

      <a href={props.user.html_url}>
        <h3>{props.user.login}</h3>
      </a>
    </>
  );
}

export default MyGit;

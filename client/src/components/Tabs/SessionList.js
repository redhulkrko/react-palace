import React from "react";

export default (props) =>
  (props.sessions &&
    props.sessions.map((item, index) => (
      <div class="card" key={index}>
        <div class="title">
          <span class="title">{item.Title}</span>{" "}
          <span>
            {new Date(item.PreShowStartTime).toLocaleDateString("en", {
              day: "2-digit",
              month: "short",
            })}
          </span>
        </div>
      </div>
    ))) || <div>no sessions</div>;

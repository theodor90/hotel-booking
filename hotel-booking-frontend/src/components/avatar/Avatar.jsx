import React, { useEffect, useState } from "react";
import "./Avatar.css";
import "../Buttons/Buttons";

function Avatar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile-about">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <h1>{`${user.name.first} ${user.name.last}`}</h1>
          <button className="btn btn-blue">Edit profile</button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Avatar;

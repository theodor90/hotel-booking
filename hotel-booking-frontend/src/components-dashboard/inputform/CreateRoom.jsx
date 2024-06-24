import React, { useState } from "react";
import createRoom from "../../services/api";

const CreateRoom = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRoom({ name });
    setName("");
  };

  return (
    <div>
      <h1>Create Room</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Room Name"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRoom;

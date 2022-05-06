import React, { useState } from "react";

interface IOwnProps {
  createList?: (title: string) => void;
  createCard?: (title: string, description: string) => void;
  mode: "ticket" | "category";
}

const AddNewCategory: React.FC<IOwnProps> = (props) => {
  const [list, setListTitle] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");
  const [description, setDescription] = useState("");
  if (props.mode === "category")
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.createList && props.createList(list);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            value={list}
            placeholder="Enter list title..."
            onChange={(e) => setListTitle(e.target.value)}
            style={{ margin: "5px 0" }}
          />
          <button type="submit">Add List</button>
        </form>
      </div>
    );
  else
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.createCard && props.createCard(ticketTitle, description);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            value={ticketTitle}
            placeholder="Enter title..."
            onChange={(e) => setTicketTitle(e.target.value)}
            style={{ margin: "5px 0" }}
          />
          <input
            type="text"
            value={description}
            placeholder="Enter the text for this card..."
            onChange={(e) => setDescription(e.target.value)}
            style={{ margin: "5px 0" }}
          />
          <button type="submit">Add card</button>
        </form>
      </div>
    );
};

export default AddNewCategory;

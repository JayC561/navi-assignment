import React, { useRef, useState } from "react";
import CommonAddNew from "../CommonAddNew";
import "./Cards.css";
import { handleListDelete } from "../../utils/common";

interface IOwnProps {
  categoryTitle: string;
}

const Tickets: React.FC<{ title: string; description: string }> = (props) => {
  const ticketRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  return (
    <div
      style={{
        backgroundColor: "#FFF",
        padding: "10px 5px",
        margin: "5px 0",
      }}
      ref={ticketRef}
    >
      <header className="ticket-header">
        <h4 className="ticket-title">{props.title}</h4>
        <button
          type="button"
          onClick={() => handleListDelete(ticketRef.current)}
        >
          X
        </button>
      </header>
      <section className="ticket-description">
        <p>{props.description}</p>
      </section>
    </div>
  );
};

const Cards: React.FC<IOwnProps> = (props) => {
  const cardRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [tickets, setTickets] = useState<JSX.Element[]>([]);
  const createCard = (title: string, description: string) => {
    setTickets(
      tickets.concat(<Tickets title={title} description={description} />)
    );
  };
  return (
    <div
      style={{
        padding: "20px 30px",
        backgroundColor: "#e6e6e6",
        minWidth: "300px",
        margin: "10px 0",
      }}
      ref={cardRef}
    >
      <header className="category-header">
        <h3 className="category-title">{props.categoryTitle}</h3>
        <button type="button" onClick={() => handleListDelete(cardRef.current)}>
          X
        </button>
      </header>
      {tickets.map((ticket) => ticket)}
      <CommonAddNew mode={"ticket"} createCard={createCard} />
    </div>
  );
};

export default Cards;

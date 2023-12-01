import { FC } from "react";
import Card, { CardType } from "./Card";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

export type ColumnType = {
  id: string;
  title: string;
  cards: CardType[];
};

const Column: FC<ColumnType> = ({ id, title, cards }) => {
  const { setNodeRef } = useDroppable({ id: id });

  return (
    <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
      <div ref={setNodeRef}>
        <p>{title}</p>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} id={card.id}></Card>
        ))}
      </div>
    </SortableContext>
  );
};

export default Column;

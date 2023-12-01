import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC } from "react";

export type CardType = {
  id: string;
  title: string;
};

const Card: FC<CardType> = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: id,
  });

  const style = { transform: CSS.Transform.toString(transform) };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div id={id}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;

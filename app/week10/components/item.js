import { useState } from "react";

export default function Item({
  id,
  name,
  quantity,
  category,
  onDelete,
  onSelect,
}) {
  const handleClick = () => {
    onSelect(name);
  };

  return (
    <li onClick={handleClick}>
      <div
        className={`card bg-base-200 shadow-xl max-w-lg mx-2 mb-2 cursor-pointer hover:btn-active`}
      >
        <div className="card-body flex-row justify-between">
          <div>
            <h2 className="card-title text-2xl">{name}</h2>
            <p>
              Pick up <span className="font-bold text-primary">{quantity}</span>{" "}
              in{" "}
              <span className="font-bold text-primary capitalize">
                {category}
              </span>
            </p>
          </div>
          <div className="card-actions">
            <button
              aria-label="Remove"
              onClick={(e) => onDelete(id, e)}
              className="btn btn-primary"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

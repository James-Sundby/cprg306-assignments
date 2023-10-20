import { useState } from "react";

export default function Item({ name, quantity, category, onDelete, onSelect }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onSelect(name);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <li onClick={handleClick}>
      <div
        className={`card bg-base-200 shadow-xl max-w-lg mx-2 mb-2 hover:btn-active cursor-pointer ${
          clicked ? "shake" : ""
        }`}
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
            <button onClick={() => onDelete(name)} className="btn btn-primary">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

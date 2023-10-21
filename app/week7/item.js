import { useState } from "react";

export default function Item({
  name,
  quantity,
  category,
  onDelete,
  onSelect,
  numberOfMeals,
}) {
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
        className={`card bg-base-200 shadow-xl max-w-lg mx-2 mb-2 cursor-pointer ${
          clicked
            ? numberOfMeals > 0
              ? "bounce" // Apply bounce animation if clicked and numberOfMeals > 0
              : "shake" // Apply shift animation if only clicked
            : "" // No animation if not clicked
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

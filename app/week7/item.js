import { useState, useEffect } from "react";

export default function Item({
  name,
  quantity,
  category,
  onDelete,
  onSelect,
  numberOfMeals,
}) {
  const [clicked, setClicked] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (clicked) {
      if (numberOfMeals > 0) {
        setAnimationClass("bounce");
        const timeout = setTimeout(() => {
          setClicked(false);
          setAnimationClass("");
        }, 1000);
        return () => clearTimeout(timeout); // Clear timeout if the component unmounts
      } else {
        setAnimationClass("shake");
        const timeout = setTimeout(() => {
          setClicked(false);
          setAnimationClass("");
        }, 600);
        return () => clearTimeout(timeout); // Clear timeout if the component unmounts
      }
    }
  }, [clicked, numberOfMeals]);

  const handleClick = () => {
    setClicked(true);
    onSelect(name);
  };

  return (
    <li onClick={handleClick}>
      <div
        className={`card bg-base-200 shadow-xl max-w-lg mx-2 mb-2 cursor-pointer ${animationClass}`}
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

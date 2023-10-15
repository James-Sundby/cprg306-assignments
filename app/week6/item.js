export default function Item({ name, quantity, category }) {
  return (
    <li>
      <div className="card bg-base-200 shadow-xl max-w-lg ml-2 mb-2">
        <div className="card-body flex-row justify-between">
          <div>
            <h2 className="card-title text-2xl">{name}</h2>
            <p>
              Pick up <span className="font-bold text-primary">{quantity}</span>{" "}
              in <span className="font-bold text-primary">{category}</span>
            </p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
    </li>
  );
}

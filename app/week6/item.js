export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-600 p-2 m-2 rounded-lg flex w-full max-w-lg sm:w-fill border-2 border-gray-900 hover:border-white hover:font-bold">
      <div className="w-full pr-4 border-r border-gray-400 flex items-center">
        <p className="font-bold text-2xl">{name}</p>
      </div>
      <div className="w-1/2 pl-4">
        <p>Qty: {quantity}</p>
        <p>In {category}</p>
      </div>
    </li>
  );
}

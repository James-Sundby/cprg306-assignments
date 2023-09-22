export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-gray-600 p-2 m-2 rounded flex w-1/3">
            <div className="w-full pr-4 border-r border-gray-400 text-center">
                <h2 className="font-bold text-2xl">{name}</h2>
            </div>
            <div className="w-1/2 pl-4">
                <p>Qty: {quantity}</p>
                <p>In {category}</p>
            </div>
      </li>
    )
}
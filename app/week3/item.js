export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-gray-600 p-2 m-2 rounded flex w-full max-w-md sm:w-fill border-2 border-gray-900 hover:border-white">
            <div className="w-full pr-4 border-r border-gray-400 flex items-center">
                <h2 className="font-bold text-2xl">{name}</h2>
            </div>
            <div className="w-1/2 pl-4 hover:font-bold">
                <p>Qty: {quantity}</p>
                <p>In {category}</p>
            </div>
      </li>
    )
}
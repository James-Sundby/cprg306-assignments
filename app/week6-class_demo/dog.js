export default function Dog({ name, age, onDelete }) {
    return (
        <div className="border max-w-sm">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>
                <button 
                onClick={() => onDelete(name)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Delete
                </button>
            </p>
        </div>
    );
}
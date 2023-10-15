import Dog from "./dog.js";

export default function DogList({ dogs, onDelete }){
    return(
        <div>
            <h2>Dogs</h2>
            {dogs.map((dog) => (
                <div key={dog.name}>
                    <Dog key={dog.name} name={dog.name} age={dog.age} onDelete={onDelete} />
                </div>
            ))}
        </div>
    );
}
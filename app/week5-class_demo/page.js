"use client"; //forces the javascript to be run on the browser, not the server
// this does slow down the initial load time, but it allows for the page to be dynamic
//first sends the html, then hydrates the page with javascript
// determines what is server side and what is client side

export default function Page() {

    let dogList = [
        {
            id: 1,
            name: "Gunther",
            description: "squinty eyes!",
            imageUrl: "",
        },
        {
            id: 2,
            name: "Darcy",
            description: "Husky winks!",
            imageUrl: "",
        },
        {
            id: 3,
            name: "Julia",
            description: "happy girl!",
            imageUrl: "",
        },
    ];

    let name = dogList[0].name; // Gunther
    
    dogList.sort((a, b) => a.name.localeCompare(b.name)); //sort mutates, changes the array in place

   // dogList = dogList.filter((dog) => dog.id !== 2);  //creates a new array, and saves to the same variable

    console.log("here");

    function handleClick(id) {
        alert (`You clicked on Dog #${id}`); // make sure to use backticks for template literals
    }

    return (
        <main className="text-white">
            <ul className="flex m-2 p-2 border">
                {dogList.map((dog) => (
                    <li key={dog.id} onClick={() => handleClick(dog.id)}>
                        <h2>{dog.name}</h2>
                        <p>{dog.description}</p>
                        <img src={dog.imageUrl} alt={dog.name} />
                    </li>
                ))}
            </ul>
        </main>
    )


}
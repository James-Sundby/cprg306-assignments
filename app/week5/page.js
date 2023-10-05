import ItemList from "./item-list"
import NavBar from "../nav-bar"

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <h1 className="text-4xl m-4 font-bold">Shopping List</h1>
                <ItemList />
            </main>
        </>     
    )
}

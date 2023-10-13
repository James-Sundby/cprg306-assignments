import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <nav className = "flex justify-between p-2 ">
                <div className = "flex font-bold m-2 p-2">
                    <p className="hidden md:block ">CPRG 306: Web Development 2 - Assignment</p> 
                    <p className="block md:hidden">CPRG 306</p> 
                </div>
                <div className="flex">
                    <button className = "m-2 bg-gray-600 rounded p-2 hover:bg-gray-700 border-2 border-gray-900 text-white w-28">
                            <Link href="/">Home</Link> 
                    </button> 
                    <button className = "m-2 bg-gray-600 rounded p-2 hover:bg-gray-700 border-2 border-gray-900 text-white w-28">
                            <Link href="https://github.com/James-Sundby">GitHub</Link> 
                    </button>
                </div>
            </nav>  
        </>
    )
}
// 
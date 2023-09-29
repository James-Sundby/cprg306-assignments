import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <div className = "flex justify-between p-2 ">
                <div className = "font-bold mx-2">
                    <h1>CPRG 306: Web Development 2 - Assignment</h1>
                </div>
                <div className="flex">
                    <div className = "font-bold mx-2 bg-gray-600 rounded px-2 hover:bg-gray-700">
                            <Link href="/">Home</Link> 
                    </div> 
                    <div className = "font-bold mx-2 bg-gray-600 rounded px-2 hover:bg-gray-700">
                            <Link href="https://github.com/James-Sundby">GitHub</Link> 
                    </div>
                </div>
            </div>  
        </>
    )
}
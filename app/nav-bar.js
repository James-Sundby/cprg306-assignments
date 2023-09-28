import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <div className = "flex">
                <div className = "font-bold mx-2">
                    <h1>CPRG 306: Web Development 2 - Assignment</h1>
                </div>
                <div className = "font-bold mx-2">
                    <p>
                        <Link href="/">Home</Link> 
                    </p>
                </div>   
            </div>  
        </>
    )
}
import StudentInfo from "../student-info";
import NavBar from "../nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-2xl m-4">My Shopping List</h1>
        <div className="mx-2">
          <StudentInfo />
        </div>
      </main>
    </>
  );
}

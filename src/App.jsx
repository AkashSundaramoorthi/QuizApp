import "./App.css";
import Header from "./assets/components/Header";
import Quiz from "./assets/components/Quiz";

function App() {
  return (
    <>
      <div className="flex justify-center flex-col">
        <Header/> 
        <main className="flex justify-center items-center">
          <Quiz />
        </main>
      </div>
    </>
  );
}

export default App;

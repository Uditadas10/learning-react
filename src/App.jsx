import Home from "./pages/Home.jsx";
import Journal from "./pages/Journal.jsx";
const App = () => {
  return(
    <main className="app" >
        <div className="home-page">
          <Home/>
        </div>
        <div className="journal-page">
          <Journal/>
          </div>
    </main>
  )
}
export default App;
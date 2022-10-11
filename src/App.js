import "./App.css";
import img from "./assets/IMG.png";
import Card from "./components/Card/Card";
export default function App() {
  return (
    <>
      <div>
        <div className="section1">
          <div className="quote">Chez vous, partout et ailleurs</div>
          <div className="maskgroup">
            <img className="background img" src={img} alt="paysage" />
          </div>
        </div>
      </div>
      <>
        <main>
          <Card />
        </main>
      </>
    </>
  );
}

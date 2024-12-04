
import Header from "./conponents/header/header";
// import Pricing from "./pages/pricing/pricing ";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/features" Component={Features} />
          <Route path="/pricing" Component={ricing} />
        </Routes>
    </div>
  );
}

export default App;

import Table from "./practica/Components/Practica2/Table";
import Login from "./practica/Components/practica3/Login";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

function App() {
  return (
    <div>
       <h3>Practica Obligatoria 2</h3>
      <Table netIncomes={netIncomes} /> 
      <h3>Practica 3</h3>
      <Login/>
    </div>
  );
}

export default App;
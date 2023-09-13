
import Table from "./Practica 1/Components/Practica2/Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

function App() {
  return (
    <div>
      
      <Table netIncomes={netIncomes} />
    </div>
  );
}

export default App;
import React from "react";

const Table = ({ netIncomes }) => {
  const sum = netIncomes.reduce((a, b) => a + b.income, 0);
  const avarage = sum / netIncomes.length;
  return (
    <div>
      {netIncomes.map((item) => (
        <table>
          <tr>
            <td>{item.brand}</td>
            <td>${item.income}</td>
          </tr>
        </table>
      ))}
      <p>El promedio de ingreso neto es de: ${avarage.toFixed(2)}</p>
    </div>
  );
};

export default Table;
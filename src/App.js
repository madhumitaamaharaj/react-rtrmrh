import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [num,setNum]=useState(0);
  const [data,setData]=useState([]);
  const generateTab=()=>{
    const table=[];
    for(let i=1;i<=num;i++){
      table.push(i);
    }
    setData(table);
  };
  const buttonClick=()=>{
    const randomVal=Math.floor(Math.random()*10);
    setNum(randomVal);
    generateTab();
  };
  return (
    <div>
      <p>Number:{num}</p>
      <button onClick={buttonClick}>Generate Random Number</button>
      <table>
        <thead>
          <tr>
            <th>Table</th>
            </tr>
            </thead>
            <tbody>
              {data.map((table,index)=>(
                <tr key={index}>
                  <td>{table}</td>
                  </tr>
              ))}
              </tbody>
              </table>
    </div>
  );
}

import "./lottery.css";
import Ball from "./Ball";
import { useState } from "react";

function Lottery(props) {
  const [lottoNums, setLottoNums] = useState(
    Array.from(Array(parseInt(props.maxBalls)))
  );
  return (
    <>
      <h2>{props.title || "Lotto!"}</h2>
      <div className="lottonNums">
        {lottoNums.map((num) => {
          return <Ball num={num} />;
        })}
      </div>
      <button
        onClick={() => {
          let array = [];
          for (let i = 0; i < props.maxBalls; i++) {
            array.push(Math.ceil(Math.random() * props.maxNum));
          }
          setLottoNums(array);
        }}
      >
        Generate
      </button>
    </>
  );
}

export default Lottery;

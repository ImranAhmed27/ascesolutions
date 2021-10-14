import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ProductCard from "./ProductCard";

function Productslist() {
  const [num, setNum] = useState(1025);

  const [state, setState] = useState(0);

  const plus = () => {
    setState(state + 1);
  };
  const minus = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      setState(0);
    }
  };

  const inc = () => {
    setNum(num + 1025);
  };

  const dec = () => {
    if (num > 0) {
      setNum(num - 1025);
    } else {
      setNum(0);
    }
  };

  const [num2, setNum2] = useState(2599);

  const inc2 = () => {
    setNum2(num2 + 2599);
  };

  const dec2 = () => {
    if (num2 > 0) {
      setNum2(num2 - 2599);
    } else {
      setNum2(0);
    }
  };
  const [num3, setNum3] = useState(100);

  const inc3 = () => {
    setNum3(num3 + 100);
  };

  const dec3 = () => {
    if (num3 > 0) {
      setNum3(num3 - 100);
    } else {
      setNum3(0);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <table className="table table-hover table-striped mt-3">
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">PRODUCT ID</th>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">PRICE(PER MONTH)</th>
            <th scope="col">TOTAL</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
            <th scope="row">1</th>
            <td>Serum16</td>
            <td>16GB RAM SERVER</td>
            <td>
              <i>
                <i
                  className="fa fa-plus-circle"
                  aria-hidden="true"
                  onClick={inc}
                ></i>
              </i>
              <input
                style={{
                  margin: "0% 2% 0% 2%",
                  height: "5%",
                  width: "10%",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
                type="text"
                value={state}
              ></input>
              <i>
                <i
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                  onClick={dec}
                ></i>
              </i>
            </td>
            <td>$1025.50</td>
            <td>${num}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  height: "35px",
                  width: "55px",
                }}
              >
                BUY
              </button>
            </td>
          </tr>
          <tr className="table-light">
            <th scope="row">2</th>
            <td>Serum32</td>
            <td>32GB RAM SERVER</td>
            <td>
              <i>
                <i
                  className="fa fa-plus-circle"
                  aria-hidden="true"
                  onClick={inc2}
                ></i>
              </i>
              <input
                style={{
                  margin: "0% 2% 0% 2%",
                  height: "5%",
                  width: "10%",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
                type="text"
                placeholder={state}
              ></input>
              <i>
                <i
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                  onClick={dec2}
                ></i>
              </i>
            </td>
            <td>$2599.99</td>
            <td>${num2}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  height: "35px",
                  width: "55px",
                }}
              >
                BUY
              </button>
            </td>
          </tr>
          <tr className="table-info">
            <th scope="row">3</th>
            <td>Serum8</td>
            <td>8GB RAM SERVER</td>
            <td>
              <i>
                <i
                  className="fa fa-plus-circle"
                  aria-hidden="true"
                  onClick={inc3}
                ></i>
              </i>
              <input
                style={{
                  margin: "0% 2% 0% 2%",
                  height: "5%",
                  width: "10%",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
                type="text"
                placeholder={state}
              ></input>
              <i>
                <i
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                  onClick={dec3}
                ></i>
              </i>
            </td>
            <td>$100</td>
            <td>${num3}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  height: "35px",
                  width: "55px",
                }}
              >
                BUY
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Productslist;

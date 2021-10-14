import React from "react";

const ProductCard = (props) => {
  return (
    <>
      <div
        className="card text-white bg-primary mt-5"
        style={{ margin: "auto", width: "25rem" }}
      >
        <div className="card-header">Selected Products</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Products :</li>
          <li className="list-group-item">Promo Code :</li>
          <li className="list-group-item">TOTAL :</li>
        </ul>
      </div>
    </>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../models/Product";
import "../ProductList.css";

function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Product.getAll()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
  <h1>Danh sách sản phẩm</h1>
  <table border={1} width={800} style={{ margin: "20px auto", position: "relative" }}>
    <thead>
      <tr>
        <th >
          <div style={{ position: "absolute", top: "-20px", right: "0" }}>
            <button className="add-btn">
              <Link to="/products/create" className="button-link">Thêm Sản Phẩm</Link>
            </button>
          </div>
          ID
        </th>
        <th>Tên</th>
        <th>Giá</th>
        <th>Tồn Kho</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <th>{product.id}</th>
          <th>
            <Link to={"/products/" + product.id}>{product.name}</Link>
          </th>
          <th>{product.price}</th>
          <th>{product.stock}</th>
          <th>
            <button className="edit-btn">
              <Link to={"/products/" + product.id + "/edit"} className="button-link">
                Cập Nhật
              </Link>
            </button>{" "}
            |
            <button className="delete-btn">
              <Link to={"/products/" + product.id + "/delete"} className="button-link">
                Xóa
              </Link>
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default ProductList;
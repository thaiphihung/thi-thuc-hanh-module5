import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../models/Product";
import "../ProductList.css";

function ProductShow(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    Product.find(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.error("lổi xảy ra : ", err);
      });
  }, [id]);

  return (
    <div>
      <h1>Chi Tiết Sản Phẩm</h1>
      <h3>Tên sản phẩm {product.name}</h3>
      <p>Giá : {product.price}</p>
      <p>Tồn kho : {product.stock}</p>
      <p>Mô tả : {product.description}</p>
      <div>
            <button className="add-btn">
              <Link to="/" className="button-link">Danh sách</Link>
            </button>
          </div>
    </div>
  );
}

export default ProductShow;
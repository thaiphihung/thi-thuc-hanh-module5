import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Product from "../models/Product";
import "../ProductAdd.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("trường này là bắt buộc"),
  price: Yup.string().required("trường này là bắt buộc"),
  stock: Yup.string().required("trường này là bắt buộc"),

});

function ProductAdd(props) {
  const navigate = useNavigate();
  const form = {
    name: "",
    price: "",
    stock: "",
    description: ""
  };

  const handleSubmit = (data) => {
    Product.store(data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Xảy ra lổi :", err);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Thêm Sản Phẩm</h1>
      <Formik
        initialValues={form}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Tên sản phẩm : </label>
              <Field name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <label htmlFor="price">Giá : </label>
              <Field name="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>
            <div>
              <label htmlFor="price">Tồn kho : </label>
              <Field name="stock" />
              {errors.stock && touched.stock ? <div>{errors.stock}</div> : null}
            </div>
            <div>
              <label htmlFor="description">Mô tả : </label>
              <Field name="description" as="textarea" />
            </div>
            <button type="submit" className="add-button">Thêm Mới</button>
            <button className="cancel-button">
            <Link to="/" className="cancel-link">Hủy</Link>
            </button>
          

          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductAdd;
import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import Product from "../models/Product";


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Không được để trống"),
  price: Yup.string().required("Không được để trống"),
});

function ProductEdit(props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    Product.find(id)
      .then((res) => {
        setForm(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (data) => {
    Product.update(id, data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Lỗi khi sửa:", err);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cập Nhật Sản Phẩm</h1>
      <Formik
        initialValues={form}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize={true}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Tên sản phẩm:</label>
              <Field className="form-control" name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div className="form-group">
              <label htmlFor="price">Giá:</label>
              <Field className="form-control" name="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>
            <div className="form-group">
              <label htmlFor="stock">Tồn kho:</label>
              <Field className="form-control" name="stock" />
              {errors.stock && touched.stock ? <div>{errors.stock}</div> : null}
            </div>
            <div className="form-group">
              <label htmlFor="description">Mô tả:</label>
              <Field
                className="form-control"
                name="description"
                as="textarea"
                style={{
                  minHeight: "150px",
                  minWidth: "500px",
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "yellow" }}>
              Sửa
            </button>
            <Link to="/" className="btn btn-danger">
              Hủy
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductEdit;
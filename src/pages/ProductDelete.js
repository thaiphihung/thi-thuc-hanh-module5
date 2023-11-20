import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';
import Product from '../models/Product';

function ProductDelete(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [products, setProduct] = useState({});

    useEffect(() => {
        Product.find(id)
            .then((res) => {
                setProduct(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    const handleDelete = () => {
        
        Swal.fire({
            title: 'Bạn có muốn xóa sản phẩm?',
            text: 'Bạn sẽ xóa hoàn toàn sản phẩm khỏi danh sách!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
        }).then(result => {
            if (result.isConfirmed) {
                Product.delete(id)
                    .then((res) => {
                        Swal.fire('Xóa thành công!', 'Sản phẩm đã được xóa khỏi danh sách.', 'success');
                        navigate('/');
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
    };

    return (
        <div className="container">
            <h1>Xóa Sản Phẩm</h1>
            <div>
                <strong>Tên sản phẩm:</strong> {products.name}<br />
                <strong>Giá:</strong> {products.price}<br />
                <strong>Tồn kho:</strong> {products.price}<br />
                <strong>Mô tả:</strong> {products.description}<br />
            </div>
            <button className="delete-btn" onClick={handleDelete}>Xóa</button>
            <Link to="/" className="back-btn">Danh Sách Sản Phẩm</Link>
        </div>
    );
}

export default ProductDelete;
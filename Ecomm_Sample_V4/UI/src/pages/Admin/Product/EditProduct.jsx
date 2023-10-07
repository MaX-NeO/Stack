import { useState } from 'react';
import { getProductbyId, editProduct } from '../../../service/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ChevronLeftCircle } from 'lucide-react';
import Layout from '../Layout/Layout';
import FileUploader from '../../../components/FileUploader';
import { ToastContainer, toast } from 'react-toastify';

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate()
  const [fileUrl, setFileUrl] = useState('');
  const [formdata, setFormdata] = useState({
    productName: '',
    productPrice: 0,
    productQuantity: 0,
    productDesc: '',
    productImage: ''
  })
  const fetchProduct = async () => {
    try {
      const response = await getProductbyId(productId);
      setFormdata(response.data);
      console.log(response.data)
    }
    catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    fetchProduct()
  }, [])
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ProductData = {
        ...formdata,
        productimage: fileUrl,
      };
      const res=await editProduct(productId, ProductData);
      if (res.status == 200) {
        toast.success(`${formdata.productName} Edited Successfully !`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/admin/products/view')
        }, 1000)
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  const routeBack = () => {
    navigate(-1)
  }
  return (
    <>
      <Layout />
      <div className='mainx'>

        <form className='data-content shadow bg-white' onSubmit={handleSubmit}>
          <h3 className='data-title yellow'>Edit Product</h3>
          <input type="text" name="productname" id="productName" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} value={formdata.productName} required />
          <input type="number" name="productprice" id="productPrice" placeholder='Price' className='data-input bg-secondary black' onChange={handleChange} value={formdata.productPrice} required />
          <input type="number" name="productquantity" id="productQuantity" placeholder='Quantity' className='data-input bg-secondary black' onChange={handleChange} value={formdata.productQuantity} required />
          <textarea id="productDesc" placeholder='Description' className='data-input bg-secondary black' cols="5" rows="3" onChange={handleChange} value={formdata.productDesc} required />
          <FileUploader setImageUrl={setFileUrl} />
          <button type="submit" className='data-btn bg-yellow white'>Update</button>

        </form>


        <button onClick={routeBack} className='route-btn-1 bg-white'><ChevronLeftCircle color="#25db00" /></button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
export default EditProduct;
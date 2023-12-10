import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Admin = () => {
  const [addProductClicked, setAddProductClicked] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [optionSelected, setOptionSelected] = useState("");
  const [updateProductClicked, setUpdateProductClicked] = useState(false);

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user?.user?.admin) {
      navigate("/");
    }
  }, [user?.user?.admin, navigate, products]);

  const getAllProducts = () => {
    setOptionSelected("products");
    try {
      axios
        .get("https://ajaxfitness.herokuapp.com/api/products")
        .then((res) => {
          setProducts(res.data);
        });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleNewProduct = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://ajaxfitness.herokuapp.com/api/products", {
          name: productName,
          description: productDescription,
          price: productPrice,
          image: productImage,
          category: category,
        })
        .then((res) => {
          setCategory("");
          setProductDescription("");
          setProductName("");
          setProductPrice("");
          setProductImage("");
          toast.success("Product Added Succesfully");
        });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleDeleteProduct = (id) => {
    axios
      .delete(`https://ajaxfitness.herokuapp.com/api/products/${id}`)
      .then((res) => {
        toast.success("Product Deleted Succesfully");
        setTimeout(() => {
          setOptionSelected("");
        }, 500);
      });
  };

  const handleUpdateProduct = (id) => {
    axios
      .put(`https://ajaxfitness.herokuapp.com/api/products/${id}`, {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        category: category,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="w-full min-h-screen">
      <ToastContainer />
      <div className="h-16 bg-blackLighterSeeThrough lg:bg-transparent lg:h-28"></div>
      <h1 className=" text-center text-3xl font-bold my-8">
        Welcome {user?.user?.name}
      </h1>
      <p className="text-center">What would you like to do?</p>
      <div className="w-[80%] mx-auto mt-8 flex justify-center items-center gap-4 pb-2">
        <div>
          <div>
            <button onClick={getAllProducts}>View Products</button>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setOptionSelected("addProduct");
            }}
          >
            Add Product
          </button>
        </div>
      </div>
      {optionSelected === "products" && (
        <div className="w-[80%] mx-auto mt-10">
          {products.map((product) => {
            return (
              <div className="mb-8 border-b-2 pb-8 flex flex-col items-center">
                <h1 className="font-bold mb-2 lg:text-2xl">
                  Product Name : {product.name}
                </h1>
                <p>
                  <span className="font-bold">Product Description :</span>{" "}
                  {product.description}
                </p>
                <p>
                  <span className="font-bold">Price :</span> {product.price}
                </p>
                <p>
                  <span className="font-bold">Category :</span>{" "}
                  {product.category}
                </p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="lg:w-[400px]"
                />
                <div className="flex mt-2 justify-center">
                  <button
                    onClick={() => {
                      handleDeleteProduct(product._id);
                    }}
                    className=" border border-gray-700 p-1 my-2"
                  >
                    Delete Product
                  </button>
                  {/* <button
                    onClick={() =>
                      setUpdateProductClicked(!updateProductClicked)
                    }
                    className=" border border-gray-700 p-1 my-2"
                  >
                    Update Product
                  </button> */}
                  {/* {updateProductClicked && (
                    <div>
                      <form
                        onClick={() => {
                          handleUpdateProduct(product._id);
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Product Name"
                          value={product.name}
                          onChange={(e) => {
                            setProductName(e.target.value);
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Product Description"
                          value={product.description}
                          onChange={(e) => {
                            setProductDescription(e.target.value);
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Product Price"
                          onChange={(e) => {
                            setProductPrice(e.target.value);
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Product Image"
                          value={product.image}
                          onChange={(e) => {
                            setProductImage(e.target.value);
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Product Category"
                          value={product.category}
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        />
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  )} */}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {optionSelected === "addProduct" && (
        <div className="flex justify-center items-center w-[80%] mx-auto">
          <form
            onSubmit={handleNewProduct}
            className="flex flex-col border-t-2"
          >
            <h3 className="mt-8 mb-2 text-center">Add A New Product</h3>
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              className=" border border-gray-700 p-1 my-2"
              value={productName}
            />
            <input
              type="text"
              placeholder="Product Description"
              onChange={(e) => {
                setProductDescription(e.target.value);
              }}
              className=" border border-gray-700 p-1 my-2"
              value={productDescription}
            />
            <input
              type="text"
              placeholder="Product Price"
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
              className=" border border-gray-700 p-1 my-2"
              value={productPrice}
            />
            <input
              type="text"
              placeholder="Product Image"
              onChange={(e) => {
                setProductImage(e.target.value);
              }}
              className=" border border-gray-700 p-1 my-2"
              value={productImage}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className=" border border-gray-700 p-1 my-2"
              value={category}
            />
            <button
              className="
            border border-gray-700 p-1 my-2
            "
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;

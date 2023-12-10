import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { newReleases } from "./FitShopData";
import { FaFireAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [newRelease, setNewRelease] = useState(newReleases);
  const [products, setProducts] = useState([]);
  const [proteinPowders, setProteinPowders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preWorkout, setPreWorkout] = useState([]);
  const [supplements, setSupplements] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://ajaxfitness.herokuapp.com/api/products"
        );
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    const getProteinPowders = async () => {
      try {
        const res = await fetch(
          "https://ajaxfitness.herokuapp.com/api/products/category/protein-powder"
        );
        const data = await res.json();
        setProteinPowders(data);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };

    const getPreWorkout = async () => {
      try {
        const res = await fetch(
          "https://ajaxfitness.herokuapp.com/api/products/category/pre-workout"
        );
        const data = await res.json();
        setPreWorkout(data);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    const getSupplements = async () => {
      try {
        const res = await fetch(
          "https://ajaxfitness.herokuapp.com/api/products/category/supplement"
        );
        const data = await res.json();
        setSupplements(data);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    getProducts();
    getSupplements();
    getPreWorkout();
    getProteinPowders();
  }, []);

  return (
    <div className="">
      <ToastContainer autoClose={1000} />
      <h2 className="ml-4 text-xl my-4 font-bold sm:text-2xl lg:text-4xl lg:mt-20 lg:ml-14">
        New Releases
      </h2>

      <div className="flex overflow-scroll no-scrollbar md:grid md:grid-cols-2 md:w-[90%] md:mx-auto lg:grid-cols-3 lg:w-[95%] xl:grid-cols-4 xl:w-[98%]  ">
        {products.map((item) => {
          return (
            <ProductCard
              key={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              colors={item.color}
              image={item.image}
              item={item}
              id={item._id}
            />
          );
        })}
        <div className="hidden underline  lg:flex lg:justify-center lg:items-center lg:text-2xl ">
          <Link to="/cart" className="lg:hover:text-gray-600">
            Go to Cart
          </Link>
        </div>
      </div>
      {/* <h2 className="ml-4 text-xl my-4 flex items-center gap-2 font-bold sm:text-2xl lg:text-4xl lg:mt-20 lg:ml-14">
        Popular <FaFireAlt className="text-orange" />
      </h2>
      <div className="flex overflow-scroll no-scrollbar md:grid md:grid-cols-2 md:w-[90%] md:mx-auto lg:grid-cols-3 lg:w-[95%]">
        {newRelease.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
        <div className="hidden underline  lg:flex lg:justify-center lg:items-center lg:text-2xl ">
          <Link to="/cart" className="lg:hover:text-gray-600">
            Go to Cart
          </Link>
        </div>
      </div> */}
      <h2 className="ml-4 text-xl my-4 flex items-center gap-2 font-bold sm:text-2xl lg:text-4xl lg:mt-20 lg:ml-14 ">
        Pre-Workouts
      </h2>
      <div className="flex overflow-scroll no-scrollbar md:grid md:grid-cols-2 md:w-[90%] md:mx-auto lg:grid-cols-3 lg:w-[95%] lg:mb-20">
        {preWorkout.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
        <div className="hidden underline  lg:flex lg:justify-center lg:items-center lg:text-2xl ">
          <Link to="/cart" className="lg:hover:text-gray-600">
            Go to Cart
          </Link>
        </div>
      </div>
      <h2 className="ml-4 text-xl my-4 flex items-center gap-2 font-bold sm:text-2xl lg:text-4xl lg:mt-20 lg:ml-14 ">
        Protein Powders
      </h2>
      <div className="flex overflow-scroll no-scrollbar md:grid md:grid-cols-2 md:w-[90%] md:mx-auto lg:grid-cols-3 lg:w-[95%] lg:mb-20">
        {proteinPowders.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
        <div className="hidden underline  lg:flex lg:justify-center lg:items-center lg:text-2xl ">
          <Link to="/cart" className="lg:hover:text-gray-600">
            Go to Cart
          </Link>
        </div>
      </div>
      <h2 className="ml-4 text-xl my-4 flex items-center gap-2 font-bold sm:text-2xl lg:text-4xl lg:mt-20 lg:ml-14 ">
        Supplements
      </h2>
      <div className="flex overflow-scroll no-scrollbar md:grid md:grid-cols-2 md:w-[90%] md:mx-auto lg:grid-cols-3 lg:w-[95%] lg:mb-20">
        {supplements.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
        <div className="hidden underline  lg:flex lg:justify-center lg:items-center lg:text-2xl ">
          <Link to="/cart" className="lg:hover:text-gray-600">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { BsDash, BsPlus } from "react-icons/bs";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" alt={title} src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="b" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="details__info">
                    <div className="details__incDec">
                      <span className="dec" onClick={decQuantity}>
                        <BsDash />
                      </span>
                      <span className="quantity">{quantity}</span>
                      <span
                        className="inc"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <BsPlus />
                      </span>
                      </div>
                 
                  </div> <br />
                <div className="ui vertical animated button" tabIndex="0">
                  {/* <div className="hidden content">
                    <i className="shop icon"></i>
                  </div> */}
                  <button
                        className="btn-default"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: { product, quantity },
                          })
                        }
                      >
                        Add To Cart
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

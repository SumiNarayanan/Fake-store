import React from "react";
import { useState, useEffect } from "react";

const Fakestore = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const users = await response.json();

    setStore(users.splice(0, 4));
  };
  //   fakeStore();

  return (
    <div>
      <h1>Fake Store</h1>
      <div className="mainContainer">
        {store.map((values) => {
          return (
            <>
              <div className="card">
                <img src={values.image} alt="" />
                <div className="content">
                  <h3>{values.title}</h3>
                  <h4>Price:{values.price}</h4>
                  <p>Rating:{values.rating.rate}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Fakestore;

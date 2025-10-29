import React, { Component } from "react";

export default class Product extends Component {
  getId() {
    const { id, name, description, price, image } = this.props;
    this.props.sendId({ id, name, description, price, image });
  }

  render() {
    const { id, name, description, price, image } = this.props;

    return (
      <div className="bg-white w-72 sm:w-80 md:w-72 flex flex-col rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl m-4 mt-10 text-center">
        
        <div className="w-full h-48 md:h-52 flex justify-center items-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-auto max-h-full object-contain"
          />
        </div>

        
        <div className="flex flex-col flex-1 p-5 justify-between">
          <div className="flex-1">
            <h2
              className="text-lg md:text-xl font-bold text-gray-800 truncate"
              title={name}
            >
              {name}
            </h2>

            <p
              className="text-gray-400 text-sm md:text-base mb-2 h-12 overflow-hidden"
              title={description}
            >
              {description}
            </p>
          </div>

       
          <p className="text-green-500 font-bold text-base md:text-xl mb-3">
            $ {price}
          </p>

          {/* دکمه */}
          <button
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition text-sm md:text-base"
            onClick={this.getId.bind(this, id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

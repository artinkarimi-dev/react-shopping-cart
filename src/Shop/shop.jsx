import React, { Component } from "react";
import Header from "./header";
import Product from "./products";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Gaming Laptop",
          description: "Lenovo 18-inch laptop",
          price: "5,298",
          image: "./laptop2.jpg",
        },
        {
          id: 2,
          name: "Mac laptop",
          description: "14.2-inch Apple laptop",
          price: "3,112",
          image: "./laptop.jpg",
        },
        {
          id: 3,
          name: "Gaming keyboard",
          description: "TSCO GK 8161 gaming keyboard",
          price: "472",
          image: "./keyboard.jpg ",
        },
        {
          id: 4,
          name: "Backpack",
          description: "Delsey laptop backpack",
          price: "1,434",
          image: "./bag.jpg",
        },
        {
          id: 5,
          name: "Tablet",
          description: "13-inch Microsoft tablet",
          price: "3,002",
          image: "./ipad.jpg",
        },
        {
          id: 6,
          name: "Computer case",
          description: "Thermaltake CA-1I7-00F1WN-01 gaming computer case",
          price: "1,203",
          image: "./case.jpg",
        },
        {
          id: 7,
          name: "iPhone 17 Pro Max",
          description:
            "iPhone 17 Pro Max CH Dual SIM, 256GB, 12GB RAM - Not Active",
          price: "2,701",
          image: "./iphone17px.jpg",
        },
        {
          id: 8,
          name: "iPhone 17",
          description:
            "Apple iPhone 17 CH Dual SIM Storage 256GB And RAM 8GB Mobile Phone",
          price: "2,005",
          image: "./iphone17n.jpg",
        },
        {
          id: 9,
          name: "Gaming monitor",
          description:
            "Samsung Odyssey G80SD LS32DG802SMXUE 32 Inch 4K UHD OLED Monitor, 240Hz, 16:9, Built-in Speaker, HDMI, DisplayPort, USB, Bluetooth, WIFI",
          price: "3,503",
          image: "./monitor.jpg",
        },

        {
          id: 10,
          name: "Bluetooth speaker",
          description: "JBL Partybox 310 Portable Bluetooth Speaker",
          price: "742",
          image: "./speaker.jpg",
        },
        {
          id: 11,
          name: "React 16, Node, Express",
          description:
            "JFull-Stack React Projects: Modern web development using React 16, Node, Express, and MongoDB by Shama Hoque, Golden Authors Publishing",
          price: "131",
          image: "./book.jpg",
        },
        {
          id: 12,
          name: "Thermal mug",
          description: "Thermal mug graphic design programming and computers",
          price: "43",
          image: "./mug.jpg",
        },
      ],

      Specifications: [],
    };

    this.clickBtn = this.clickBtn.bind(this);
    this.trashCanShop = this.trashCanShop.bind(this);
  }

  clickBtn(product) {
    this.props.addToPurchased(product);
  }

  trashCanShop(idTrash) {
    console.log(idTrash);
  }

  render() {
    return (
      <>
        <Header text="Go to Purchased" link="/purchased" />

        <div className="flex flex-wrap justify-center sm:justify-evenly gap-6 px-4 sm:px-10 md:px-14 mt-6">
          {this.state.products.map((product, index) => (
            <Product
              {...product}
              key={`${product.id}-${index}`}
              sendId={this.clickBtn}
              sendTrash={this.trashCanShop}
            />
          ))}
        </div>
      </>
    );
  }
}

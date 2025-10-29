import React, { Component } from "react";
import { FaCartShopping } from "react-icons/fa6";

export default class btnMenu extends Component {
  render() {
    return (
      <div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm">
            <FaCartShopping className="text-xl cursor-pointer text-amber-200" />
            Shopping cart
          </button>
        </div>
      </div>
    );
  }
}

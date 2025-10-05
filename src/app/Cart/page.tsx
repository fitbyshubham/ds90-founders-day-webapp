"use client";
import React, { useState } from "react";
import { Minus, Plus, X, ArrowLeft } from "lucide-react";

const initialItems = [
  {
    id: 1,
    name: "Cheese Hot Hamburger",
    price: 189,
    image: "/Test/Food2.jpg",
    quantity: 2,
  },
  {
    id: 2,
    name: "Italian Hot Pizza",
    price: 259,
    image: "/Test/Food1.jpg",
    quantity: 2,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Cart summary calculations
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxesAndFees = 10.0;
  const deliveryFee = 5.0;
  const total = subTotal + taxesAndFees + deliveryFee;

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white py-2">
        {/* Header */}
        <div className="flex items-center py-5">
          <button>
            <ArrowLeft className=" absolute left-2 top-7.5 w-6 h-6" />
          </button>
          <div className="flex-1 text-center text-lg font-semibold -ml-6">
            My Cart
          </div>
        </div>

        {/* Cart Items */}
        <div className="w-full">
          <div className="mx-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 mb-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">₹{item.price.toFixed(2)}</div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="border rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    className="border rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <button
                className="ml-2"
                onClick={() => handleRemove(item.id)}
                aria-label="Remove"
              >
                <X size={22} className="text-gray-400" />
              </button>
            </div>
          ))}
          <button className="flex items-center text-orange-500 text-sm font-medium mt-3 mb-6">
            <span className="text-xl mr-1">+</span> Add more items
          </button>
          </div>  
        </div>

        {/* Cart Summary */}
        <div className="w-full mt-auto text-sm text-gray-600">
          <div className="flex justify-between mb-2 mx-5">
            <span>Sub total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 mx-5">
            <span>Taxes & Fees</span>
            <span>${taxesAndFees.toFixed(2)}</span>
          </div>
          <hr className="my-2 mx-5" />
          <div className="flex justify-between text-base font-semibold text-black mx-5">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="mt-6 w-96 py-3 bg-black text-white rounded-2xl text-lg font-medium shadow-md mb-6">
          Checkout
        </button>
      </div>
  );
}
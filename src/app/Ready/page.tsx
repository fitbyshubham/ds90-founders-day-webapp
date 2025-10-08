"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FoodItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  name: string;
  phone: string;
  items: FoodItem[];
}

const initialOrders: Order[] = [
  {
    id: "F001",
    name: "Pundeer",
    phone: "9876543210",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 299 },
      { name: "Coke", quantity: 2, price: 60 },
    ],
  },
  {
    id: "F002",
    name: "Hemant",
    phone: "9823456789",
    items: [
      { name: "Paneer Tikka", quantity: 1, price: 250 },
      { name: "Butter Naan", quantity: 2, price: 80 },
    ],
  },
  {
    id: "F003",
    name: "Vibhor",
    phone: "9812345678",
    items: [
      { name: "Veg Burger", quantity: 2, price: 180 },
      { name: "Peri-Peri French Fries", quantity: 1, price: 90 },
    ],
  },
];

const FoodOrders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const toggleExpand = (id: string) => setExpandedId(expandedId === id ? null : id);
  const getTotal = (items: FoodItem[]) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  // Filter orders by name, phone, id, or item name
  const filteredOrders = orders.filter(order => {
    const searchLower = search.toLowerCase();
    return (
      order.name.toLowerCase().includes(searchLower) ||
      order.phone.includes(searchLower) ||
      order.id.toLowerCase().includes(searchLower) ||
      order.items.some(item => item.name.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="mx-8">
      <div className="min-h-screen bg-white flex flex-col items-center">
        <div>
          <h1 className="text-xl font-bold mb-3 text-gray-900 tracking-tight mt-5">Ready Orders</h1>
        </div>
        <div className="flex flex-col items-center justify-center mb-4 mx-3 bg-white w-full">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, phone, ID, or item..."
            className="w-full max-w-md px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-gray-50"
          />
        </div>
        <AnimatePresence>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => {
              const isExpanded = expandedId === order.id;
              return (
                <motion.div
                  key={order.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full max-w-md rounded-xl mb-4 p-5 cursor-pointer shadow-lg transition-all ${
                    isExpanded
                      ? "border-2 border-orange-500 bg-white"
                      : "border border-gray-300 bg-white"
                  }`}
                  onClick={() => toggleExpand(order.id)}
                >
                  <motion.div layout className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{order.name}</p>
                      <p className="text-xs text-gray-500">
                        ID: {order.id} • {order.phone}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-gray-400 transition-transform"
                    >
                      ▼
                    </motion.span>
                  </motion.div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-gray-200 mt-4 pt-4 text-gray-700 m-2"
                      >
                        <ul className="space-y-2">
                          {order.items.map((item, index) => (
                            <li
                              key={index}
                              className="flex justify-between items-center text-gray-800 font-medium"
                            >
                              <span>{item.name} × {item.quantity}</span>
                              <span>₹{item.price * item.quantity}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex justify-between mt-3 font-semibold text-gray-900">
                          <span>Total</span>
                          <span>₹{getTotal(order.items)}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 text-sm mt-12"
            >
              All orders completed!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FoodOrders;
"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const initialOrders = [
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

const ordersWithTotal = initialOrders.map(order => ({
  ...order,
  total: order.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));

const grandTotal = ordersWithTotal.reduce((sum, order) => sum + order.total, 0);

export default function TabulationPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center px-2 py-8">
      <div className="w-full max-w-2xl mx-20 flex items-center justify-between mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-200 shadow hover:bg-blue-100 text-blue-700 font-semibold transition"
        >
          <ArrowLeft className="w-5 h-5" />
          
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mx-auto">
          
        </h1>
        <div className="w-24" /> {/* Spacer for symmetry */}
      </div>
      <p className="text-2xl text-gray-600 mb-6 max-w-2xl text-center">
        Tabulation For All Orders.
      </p>
      <div className="w-full max-w-2xl  rounded-2xl shadow-xl p-6 border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-3 font-semibold text-gray-700 bg-blue-50 rounded-tl-2xl">Client Info</th>
              <th className="py-3 px-3 font-semibold text-gray-700 bg-blue-50">Food Items</th>
              <th className="py-3 px-3 font-semibold text-gray-700 bg-blue-50 rounded-tr-2xl">Total</th>
            </tr>
          </thead>
          <tbody>
            {ordersWithTotal.map((order) => (
              <tr key={order.id} className="border-b hover:bg-blue-50 align-top transition">
                <td className="py-3 px-3 font-semibold text-blue-900">
                  {order.name}
                  <div className="text-xs text-gray-500">ID: {order.id}</div>
                  <div className="text-xs text-gray-500">{order.phone}</div>
                </td>
                <td className="py-3 px-3">
                  <ul className="list-disc ml-4">
                    {order.items.map((item, i) => (
                      <li key={i} className="mb-1">
                        <span className="font-medium text-gray-800">{item.name}</span> × {item.quantity} <span className="text-gray-500">₹{item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-3 font-bold text-orange-600 text-lg">₹{order.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="py-4 px-3 text-right font-bold text-xl text-blue-700 bg-blue-50 rounded-bl-2xl">
                Grand Total
              </td>
              <td className="py-4 px-3 font-extrabold text-2xl text-orange-700 bg-orange-100 rounded-br-2xl">
                ₹{grandTotal}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
"use client"
import { useRouter } from "next/navigation";

export default function Cart() {
  const taxes = 10;
  const delivery = 5;
  const total = taxes + delivery;

  const router = useRouter();
  const handleRoute = () => {
    router.push('/FoodItems');
  }

  return (
    <div className="w-[375px] bg-white rounded-2xl shadow-lg p-4">
      <button onClick={handleRoute} className="text-gray-500">← Back</button>

      <h1 className="text-xl font-bold my-3">My Cart</h1>
      <div className="space-y-3">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center space-x-3">
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateQty(item.id, Math.max(item.qty - 1, 1))}
                className="px-2 border rounded">-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}
                className="px-2 border rounded">+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-gray-700 space-y-1">
        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Taxes & Fees</span><span>${taxes.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Delivery Fee</span><span>${delivery.toFixed(2)}</span></div>
        <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${total.toFixed(2)}</span></div>
      </div>

      <button className="mt-4 w-full bg-black text-white py-3 rounded-lg">
        Checkout
      </button>
    </div>
  );
}
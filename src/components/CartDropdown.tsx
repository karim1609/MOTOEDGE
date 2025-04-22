import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-md shadow-lg overflow-hidden z-20"
    >
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-white">Your Cart</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-gray-400">
            Your cart is empty
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 border-b border-gray-700 flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">{item.name}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-sm text-gray-400">${item.price.toFixed(2)}</div>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-l-md hover:bg-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 h-6 flex items-center justify-center bg-gray-700 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-r-md hover:bg-gray-600 transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex justify-between mb-4">
          <span className="font-medium text-white">Total:</span>
          <span className="font-medium text-white">${totalPrice.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className={`block text-center py-2 bg-red-600 text-white rounded-md font-medium transition-colors ${
            cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
          }`}
          onClick={(e) => {
            if (cartItems.length === 0) {
              e.preventDefault();
            } else {
              onClose();
            }
          }}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
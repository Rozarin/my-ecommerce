const CART_KEY = "cart_items";

const loadCart = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
};

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
};

let cart = loadCart();

export const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  return [...cart];
};

export const removeFromCart = (id) => {
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  return [...cart];
};

export default cart;

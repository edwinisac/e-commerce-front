import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Space } from "../../components/Space";
import "./cart.css";

export function Cart() {
    const cartItems = [
        {
            id: 1,
            name: "Noise Cancelling Earbuds",
            img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format&fit=crop",
            category: "Audio",
            sale: true,
            rateavg: 4.4,
            ratecount: 918,
            saleprice: 129.99,
            originalprice: 179.99,
            featured: false,
            description:
              "Compact wireless earbuds with active noise cancellation, deep bass, and long battery life for immersive listening.",
          
          quantity:1,  },
          {
            id: 2,
            name: "Fitness Tracker Band",
            img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop",
            category: "Wearables",
            sale: false,
            rateavg: 4.1,
            ratecount: 402,
            saleprice: 99.99,
            originalprice: 99.99,
            featured: false,
            description:
              "Lightweight fitness band with heart-rate monitoring, sleep tracking, and daily activity insights.",
          
          quantity:1,  },
          {
            id: 3,
            name: "4K Action Camera",
            img: "https://images.unsplash.com/photo-1603720913661-76d1053714e2?q=80&w=1170&auto=format&fit=crop",
            category: "Cameras",
            sale: true,
            rateavg: 4.6,
            ratecount: 276,
            saleprice: 249.99,
            originalprice: 329.99,
            featured: false,
            description:
              "Rugged 4K action camera with wide-angle lens, image stabilization, and waterproof design.",
            quantity:2,
          },
          {
            id: 4,
            name: "USB-C Hub Adapter",
            img: "https://images.unsplash.com/photo-1589447388175-ac47d31be950?q=80&w=1170&auto=format&fit=crop",
            category: "Accessories",
            sale: false,
            rateavg: 3.3,
            ratecount: 611,
            saleprice: 39.99,
            originalprice: 49.99,
            featured: false,
            description:
              "Multi-port USB-C hub with HDMI, USB, and fast charging support for laptops and tablets.",
            quantity:3
            },
    ];

    const total = Math.round(cartItems.reduce((acc, item) =>
        acc + item.saleprice * item.quantity, 0
    ))

    return (
        <>
            <Navbar />
            <Space />

            <div className="cart-wrapper">
                <h2 className="cart-heading">Shopping Cart</h2>

                <div className="cart-layout">
                    {/* LEFT - CART ITEMS */}
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img className="cart-item-image" src={item.img} alt={item.name} />

                                <div className="item-info">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-price">₹{item.saleprice}</p>
                                    <div className="quantity-ui">
                                        <button className="qty-btn">−</button>
                                        <span className="qty-value">{item.quantity}</span>
                                        <button className="qty-btn">+</button>
                                    </div>
                                </div>

                                <div className="item-actions">
                                    <div className="item-subtotal">
                                        ₹{item.saleprice * item.quantity}
                                    </div>
                                    <button className="remove-btn">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT - SUMMARY */}
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span className="free-shipping">Free</span>
                        </div>
                        <hr />
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>

                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>
                        <a href="/" className="continue-shopping-link">
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
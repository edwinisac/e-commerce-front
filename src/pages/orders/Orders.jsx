import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Space } from "../../components/Space";
import "./orders.css";

// Mock orders using your provided product data
const mockOrders = [
  {
    id: "ORD-20260001",
    date: "2026-02-14",
    total: 129.99,
    status: "Delivered",
    items: [
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
        description:
          "Compact wireless earbuds with active noise cancellation, deep bass, and long battery life for immersive listening.",
        quantity: 1
      }
    ]
  },
  {
    id: "ORD-20260002",
    date: "2026-01-31",
    total: 199.98,
    status: "Processing",
    items: [
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
        description:
          "Lightweight fitness band with heart-rate monitoring, sleep tracking, and daily activity insights.",
        quantity: 2
      }
    ]
  },
  {
    id: "ORD-20260003",
    date: "2025-12-25",
    total: 589.97,
    status: "In Transit",
    items: [
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
        description:
          "Rugged 4K action camera with wide-angle lens, image stabilization, and waterproof design.",
        quantity: 1
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
        description:
          "Multi-port USB-C hub with HDMI, USB, and fast charging support for laptops and tablets.",
        quantity: 2
      }
    ]
  }
];

export function Orders() {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return { backgroundColor: "#25c685", color: "#fff", icon: "✓" };
      case "In Transit":
        return { backgroundColor: "#007bff", color: "#fff", icon: "🚚" };
      case "Processing":
        return { backgroundColor: "#ffc107", color: "#222", icon: "⏳" };
      default:
        return { backgroundColor: "#6c757d", color: "#fff", icon: "?" };
    }
  };

  const calculateSavings = (item) => {
    if (item.sale) {
      return ((item.originalprice - item.saleprice) * item.quantity).toFixed(2);
    }
    return "0.00";
  };

  return (
    <>
      <Navbar />
      <Space />

      <div className="orders-container">
        <div className="orders-header">
          <div className="header-content">
            <h1>📦 My Orders</h1>
            <p>Your purchase history with shipment tracking and product details</p>
          </div>
        </div>

        {mockOrders.length > 0 ? (
          <div className="orders-list">
            {mockOrders.map((order) => {
              const statusStyle = getStatusStyle(order.status);
              return (
                <div key={order.id} className="order-card">
                  <div className="order-card-header">
                    <div className="order-header-left">
                      <div className="order-id-section">
                        <h3>Order {order.id}</h3>
                        <p className="order-date">
                          📅 {new Date(order.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="order-header-right">
                      <span 
                        className="status-badge" 
                        style={{ 
                          backgroundColor: statusStyle.backgroundColor,
                          color: statusStyle.color
                        }}
                      >
                        <span className="status-icon">{statusStyle.icon}</span>
                        {order.status}
                      </span>
                    </div>
                  </div>

                  <div className="order-items">
                    <h4 className="items-heading">Items Ordered</h4>
                    <div className="order-product-list">
                      {order.items.map((item) => (
                        <div key={item.id} className="order-product-card">
                          <div className="product-image-wrapper">
                            <img 
                              className="product-image" 
                              src={item.img} 
                              alt={item.name}
                              loading="lazy"
                            />
                            {item.sale && (
                              <div className="sale-badge">SALE</div>
                            )}
                          </div>

                          <div className="product-details">
                            <div className="product-header">
                              <div>
                                <h5 className="product-name">{item.name}</h5>
                                <p className="product-category">
                                  <span className="category-tag">{item.category}</span>
                                </p>
                              </div>
                            </div>

                            <p className="product-description">{item.description}</p>

                            <div className="product-meta">
                              <div className="meta-item">
                                <span className="meta-label">Rating:</span>
                                <span className="rating">
                                  <span className="stars">{'⭐'.repeat(Math.floor(item.rateavg))}</span>
                                  {item.rateavg} <span className="review-count">({item.ratecount} reviews)</span>
                                </span>
                              </div>
                              <div className="meta-item">
                                <span className="meta-label">Quantity:</span>
                                <span className="quantity-value">{item.quantity}x</span>
                              </div>
                            </div>

                            <div className="product-pricing">
                              <div className="price-section">
                                <span className="price-label">Price:</span>
                                <div className="price-values">
                                  <span className="sale-price">${(item.saleprice * item.quantity).toFixed(2)}</span>
                                  {item.sale && (
                                    <span className="original-price">${(item.originalprice * item.quantity).toFixed(2)}</span>
                                  )}
                                </div>
                              </div>
                              {item.sale && (
                                <div className="savings-badge">
                                  💰 You saved ${calculateSavings(item)}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="order-footer">
                    <div className="order-summary">
                      <div className="summary-row">
                        <span className="summary-label">Subtotal:</span>
                        <span className="summary-value">${order.total.toFixed(2)}</span>
                      </div>
                      <div className="summary-row highlight">
                        <span className="summary-label">Order Total:</span>
                        <span className="summary-value total">${order.total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="order-actions">
                      <button className="btn btn-primary">📍 Track Shipment</button>
                      <button className="btn btn-secondary">🧾 View Invoice</button>
                      <button className="btn btn-secondary">❌ Return Items</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-orders">
            <div className="empty-icon">📦</div>
            <h2>No Orders Yet</h2>
            <p>Your order history will appear here once you make your first purchase!</p>
            <button className="btn btn-primary btn-large">🛍️ Start Shopping</button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
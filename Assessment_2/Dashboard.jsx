import React from "react";

export default function Dashboard({ sweets, onPurchase }) {
  return (
    <div>
      <h2>Available Sweets</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {sweets.map(s => (
          <div key={s.id} style={{ border: "1px solid #ddd", padding: 8 }}>
            <h4>{s.name}</h4>
            <div>Category: {s.category}</div>
            <div>Price: {s.price}</div>
            <div>Quantity: {s.quantity}</div>
            <button disabled={s.quantity <= 0} onClick={() => onPurchase(s.id)}>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
}

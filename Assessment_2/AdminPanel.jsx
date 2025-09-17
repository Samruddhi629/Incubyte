import React, { useState } from "react";

export default function AdminPanel({ onAdd }) {
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Admin - Add Sweet</h3>
      <input placeholder="name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="category" value={cat} onChange={e => setCat(e.target.value)} />
      <input placeholder="price" type="number" value={price} onChange={e => setPrice(+e.target.value)} />
      <input placeholder="quantity" type="number" value={qty} onChange={e => setQty(+e.target.value)} />
      <button onClick={() => { onAdd({ name, category: cat, price, quantity: qty }); setName(""); setCat(""); setPrice(0); setQty(0); }}>Add</button>
    </div>
  );
}

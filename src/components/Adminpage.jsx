import React, { useState } from 'react';
import './Admin.css';

const AdminPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', item: 'Pizza', status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', item: 'Pasta', status: 'Pending' },
    { id: 3, customer: 'Lucy Brown', item: 'Salad', status: 'In Progress' },
  ]);

  const [menu, setMenu] = useState([
    { id: 1, name: 'Pizza', price: 15 },
    { id: 2, name: 'Pasta', price: 10 },
    { id: 3, name: 'Salad', price: 7 },
  ]);

  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 3 },
    { id: 3, name: 'Lucy Brown', email: 'lucy@example.com', orders: 2 },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  const addMenuItem = (name, price) => {
    setMenu([...menu, { id: menu.length + 1, name, price }]);
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <div className="section">
        <h2>Order Management</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Item</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.item}</td>
                <td>{order.status}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Menu Management</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {menu.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-menu-item">
          <input type="text" placeholder="Item Name" id="itemName" />
          <input type="number" placeholder="Price" id="itemPrice" />
          <button onClick={() => addMenuItem(document.getElementById('itemName').value, document.getElementById('itemPrice').value)}>
            Add Item
          </button>
        </div>
      </div>

      <div className="section">
        <h2>Customer Management</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Analytics</h2>
        <div className="analytics">
          <div className="analytic-card">
            <h3>Total Orders</h3>
            <p>{orders.length}</p>
          </div>
          <div className="analytic-card">
            <h3>Total Revenue</h3>
            <p>${orders.reduce((total, order) => total + menu.find(item => item.name === order.item).price, 0)}</p>
          </div>
          <div className="analytic-card">
            <h3>Total Customers</h3>
            <p>{customers.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const express = require('express');
const mysql = require('mysql');
const cors = requrire('cors');

const db = mysql.createConnection({
  host: 'localhost' ,
  user: 'root' , 
  password: 'BunnyBillionaire@400$',
  database: 'blog_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

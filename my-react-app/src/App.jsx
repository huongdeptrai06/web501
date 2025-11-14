import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const greeting = "Chào mừng đến với React!";

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <p>Đây là component đầu tiên của bạn</p>
        </div>
    );
}
export default App

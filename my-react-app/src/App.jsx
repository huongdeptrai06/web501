import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Profile() {
    const name = "Đẹp Trai";
    const studentId = "SV001";
    const major = "Công nghệ Thông tin";

    return (
        <div className="profile-card">
            <h2>Thông tin sinh viên</h2>
            <p>
                <strong>Họ tên:</strong> {name}
            </p>
            <p>
                <strong>Mã SV:</strong> {studentId}
            </p>
            <p>
                <strong>Ngành học:</strong> {major}
            </p>
        </div>
    );
}
export default Profile;

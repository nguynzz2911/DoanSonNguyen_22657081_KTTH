import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Phần 1: Topbar */}
      <div style={{
        backgroundColor: '#2b2b6f',
        color: 'white',
        padding: '5px 20px',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>E-OFFICE</button>
          <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>EMAIL</button>
          <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>THƯ VIỆN - THÔNG TIN</button>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>KẾT NỐI | LIÊN HỆ</a>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" style={{ width: '20px', height: '14px' }} />
          <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK" style={{ width: '20px', height: '14px' }} />
        </div>
      </div>

      {}
      <div style={{ height: '40px' }}></div>
    </>
  )
}

export default App

import React from 'react'

function Navbar() {
    return (
        <nav className="navigation">
            <div>
                <p className="logo">real estate</p>
            </div>
            <ul className="links">
                <li className="link">home</li>
                <li className="link">about</li>
                <li className="link">properties</li>
                <li className="link">find a home</li>
                <li className="link">contact us</li>
            </ul>
            <div className="action">
                <span className="signin">Signin</span>
                <span className="signup">Signup</span>
            </div>
        </nav>
    )
}

export default Navbar

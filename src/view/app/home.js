import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BitCoin from '../../assets/img/icons8-bitcoin.svg'

function HomePage() {
    return (
        <div>
            <div className='navbar navbar-expand-lg backGround'>
            <a href className='navbar-brand'>
                <img src={BitCoin} alt='' className='m-2 logoSize' />
            </a>
            <div className='collapse navbar-collapse' id='navbar-nav'>
                <ul className='navbar-nav'>
                    <li className='nav-item mx-2 fontColor'>Home</li>
                    <li className='nav-item mx-2 fontColor'>About</li>
                    <li className='nav-item mx-2 fontColor'>Contact</li>
                    {/* <li className='nav-item'></li> */}
                </ul>
            </div>
            </div>
            <div className="container loginPage">
            <div className='col-md-12 d-flex justify-content-evenly loginPage'>
                <div classname="bit-1 col-md-5">
                    <h2>Hello Crypto !!</h2>
                </div>
                <div className='bit-1 card col-md-3'>
                    <h2>Login</h2>
                    <input type="email" className='m-3' name='E-mail'/>
                    <input type="password" className='m-3'/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default HomePage;
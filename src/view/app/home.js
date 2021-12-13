import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BitCoin from '../../assets/img/icons8-bitcoin.svg'
import Wave from '../../assets/img/wave.svg'

function HomePage() {
    return (
        <div>
            <div className='navbar navbar-expand-lg backGround d-none'>
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
			<div>
            	<div className="container loginPage">
            		<div className='col-md-12 d-flex justify-content-between loginPage'>
                		<div classname="bit-1 col-md-5">
                    		<h2>Hello Crypto !!</h2>
                		</div>
                	<div className='bit-1 card col-md-3'>
                    	<div className='m-3'>
                        	<h2>Login</h2>
                    	</div>
                    <div className='my-4 d-flex flex-column'>
						<label className='mx-3'>E-Mail</label>
                    	<input type="email" className='m-3' label='E-mail'/>
						<label className='mx-3'>Password</label>
                    	<input type="password" className='m-3'/>
                    </div>
					<div className='m-3'>
						<button type="button" class="btn btn-login">Login</button>
					</div>
                </div>
            </div>
            </div>
			</div>
			<img src={Wave} alt='' />
        </div>
    );
}

export default HomePage; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BitCoin from '../../assets/img/icons8-bitcoin.svg'

function HomePage() {
    return (
        <div className='navbar'>
            <div className='logoSize'>
                <img src={BitCoin} alt='' className='m-2' />
            </div>
            <h2 className="m-2">hello Crypto!!</h2>
            <div className=''>
                <p className='mx-3 my-2'>home</p>
                <p className='mx-3 my-2'>bitcoin</p>
                <p className='mx-3 my-2'>API</p>
                <p className='mx-3 my-2'>contact</p>
            </div>
        </div>
    );
}

export default HomePage;
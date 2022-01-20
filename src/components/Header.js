import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Header = () => {
    // setInterval(() => {
    //     const data = async () => await axios.post('http://localhost:5000/posts')
    //     .then(res => console.log(res))
    //     data()
    // },1500)
    return (
        <div className='sticky top-0 z-20 bg-slate-900 shadow-lg shadow-slate-800'>
            <div className="flex justify-around">
                <div className="cursor-pointer text-6xl p-2 font-dongle text-emerald-200">
                    <Link to='/'>View All </Link>
                </div>
                <div className="cursor-pointer text-6xl p-2 font-dongle text-amber-50">
                    <Link to='/createdata'>Create New Data</Link>
                </div>

            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';
import RotateLoader from 'react-spinners/RotateLoader';
import FadeLoader from 'react-spinners/FadeLoader';


const data = [
  { name: RiseLoader },
  { name: RotateLoader },
  { name: FadeLoader },
];

const Loading = () => {
    let loader = data[Math.floor(Math.random() * data.length)];
    
  return (
    <div className='flex justify-center mt-10 h-screen min-w-full bg-slate-900'>
      <loader.name color={'yellow'} size={150}/>
    </div>
  );
};

export default Loading;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post, handleDelete }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div className='bg-gray-400 p-1 max-w-md  shadow-sm shadow-emerald-50 rounded-md min-h-full flex flex-col justify-between'>
        <div>
          <Link to={`edit/${post._id}`}>
            <h1 className='text-xl p-2 font-mochiy uppercase text-center cursor-pointer text-teal-900'>
              {post.title}
            </h1>
          </Link>
        </div>
        <div className=''>
          <p className='mt-2 mb-5 indent-[10%] text-slate-100'>
            {post.description.substring(0, 500)}
            <span className='text-teal-200 cursor-pointer text-sm'>
              ....read more
            </span>{' '}
          </p>
        </div>
        <div className='flex justify-around text-sm font-light'>
          <p className='bg-gray-500 rounded-lg p-1'>Author: {post.author}</p>
          <div className='flex gap-3'>
            <Link to={`edit/${post._id}`}>
              <svg
                className='w-6 h-6 cursor-pointer hover:text-teal-700'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                />
              </svg>
            </Link>
            <svg
              className='w-6 h-6 cursor-pointer hover:text-red-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => handleDelete(post._id)}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </div>
          {/* <p className='bg-gray-500 rounded-lg p-1 text-opacity-20'>Date: {post.createdAt.toISOString().substring(11, 19)}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

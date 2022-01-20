import React from 'react';

const CreateData = () => {
  return (
    <form>
      <div className='bg-slate-900 min-h-screen md:px-20 pt-6'>
        <div className=' bg-slate-500 rounded-md px-6 py-10 max-w-2xl mx-auto'>
          <h1 className='text-center text-2xl font-bold text-emerald-200 mb-10'>
            ADD POST
          </h1>
          <div className='space-y-4'>
            <div>
              <input
                type='text'
                placeholder='Title'
                id='title'
                className='outline-none py-1 px-2 text-md rounded-md text-white bg-slate-600 min-w-full'  
              />
            </div>
            <div>
              <textarea
                id='description'
                cols='30'
                rows='10'
                placeholder='Description...'
                className='w-full font-serif  p-4 text-white bg-slate-600 outline-none rounded-md'
              ></textarea>
            </div>
            <div>
              <input
                type='text'
                placeholder='Author'
                id='name'
                className='outline-none py-1 px-2 text-md rounded-md text-white bg-slate-600'
              />
            </div>
            <label for='name' className='text-lx font-serif'>
              Date: {new Date().toISOString().substring(0,10)}
            </label>
            <button className=' px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-amber-50 bg-slate-900'>
              ADD POST
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateData;

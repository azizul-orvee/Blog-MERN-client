import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postService from '../services/postService';
import EditLoading from './EditLoading';

const EditPost = () => {
  const [editData, setEditData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [editing, setEditing] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      try {
        const data = await postService.getPostById(id);
        setEditData(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const handleChange = (e) => {
    const sendData = { ...editData };
    sendData[e.target.name] = e.target.value;
    setEditData(sendData);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setEditing(true)
    console.log('boga');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='bg-slate-900 min-h-screen md:px-20 pt-6'>
          <div className=' bg-slate-500 rounded-md px-6 py-10 max-w-2xl mx-auto'>
            <h1 className='text-center text-2xl font-bold text-emerald-200 mb-10'>
              Edit Post
            </h1>
            <div className='space-y-4'>
              <div>
                <input
                  type='text'
                  placeholder='Title'
                  name='title'
                  className='outline-none py-1 px-2 text-md rounded-md text-white bg-slate-600 min-w-full'
                  value={editData.title}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <textarea
                  cols='30'
                  rows='10'
                  name='description'
                  placeholder='Description...'
                  className='w-full font-serif  p-4 text-white bg-slate-600 outline-none rounded-md'
                  value={editData.description}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='outline-none py-1 px-2 text-md rounded-md text-white bg-slate-600'
                  value={editData.author}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              Date: {new Date().toISOString().substring(0, 10)}
              <div>
                {editing ? (
                  <EditLoading />
                ) : (
                  <button
                    type='submit'
                    className='px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-amber-50 bg-slate-900'
                  >
                    Edit Post
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPost;

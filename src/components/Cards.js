import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Loading from './Loading';
import ReactPaginate from 'react-paginate';
import postService from '../services/postService';

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await postService.getTenPosts();
        setPosts(data);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await postService.deleteJobById(id);
      setPosts(posts.filter(post => post._id !== id))
    } catch (error) {
      console.log(error.message)
    }
    
  }

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(posts.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='flex flex-wrap gap-9 m-10 justify-center'>
      {!load ? (
        posts
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((post) => <Card key={post._id} post={post} handleDelete={handleDelete}/>)
      ) : (
        <Loading />
      )}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
};

export default Cards;

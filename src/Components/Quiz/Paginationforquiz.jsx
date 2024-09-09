import { useState } from 'react';
import ReactPaginate from 'react-paginate';
//Not using it
const PaginatedComponent = ({ data, itemsPerPage,handleInputChange,handleClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
     <div>
      <h2>Acadmeics</h2>
      {currentItems.map((item) => {
        return (
          <>
            Type:{item.type}
            <br />
            Question:{item.Question}
            <br />
            <input
              onChange={(e) => {
                handleInputChange(e, item.id,item.type);
              }}
            ></input>
            <br />
          </>
        );
      })}
      <button onClick={handleClick}>Submit</button>
    </div>
      {/* Pagination component */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <ReactPaginate
        className='cursor-pointer bg-slate-500 flex justify-around m-4 p-2'
        previousLabel={''}
        nextLabel={''}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      
    </div>
  );
};

export default PaginatedComponent;

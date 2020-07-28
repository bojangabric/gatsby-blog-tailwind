import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  return (
    <div className="flex justify-between mb-24">
      <div className="text-2xl">
        <Link
          rel="prev"
          to={hasPrevPage ? prevPagePath : '/blog'}
          className={hasPrevPage ? 'text-blue-400' : 'pointer-events-none text-gray-400'}
        >
          Prev
        </Link>
      </div>
      <div className="text-2xl">
        <Link
          rel="next"
          to={hasNextPage ? nextPagePath : '/blog'}
          className={hasNextPage ? 'text-blue-400' : 'pointer-events-none text-gray-400'}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;

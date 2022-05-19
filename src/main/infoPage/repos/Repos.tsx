import React, { useEffect, useState } from 'react';

import './repos.scss';
import { IRepo } from '../../../types/types';
import EmptyRepos from '../emptyRepos/EmptyRepos';
import ReactPaginate from 'react-paginate';

const Repos = (props: { repos: IRepo[] }) => {
  const repos = props.repos;
  const [currentItems, setCurrentItems] = useState<IRepo[] | []>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const reposPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + reposPerPage;
    setCurrentItems(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / reposPerPage));
  }, [itemOffset, reposPerPage, repos]);

  const handlePageClick = (event: { selected: number }) => {
    if (repos) {
      const newOffset = (event.selected * reposPerPage) % repos.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <div className="repos-wrapper">
      {currentItems.map((repo: IRepo, index: number) => {
        return (
          <div key={index} className={'repo-element'}>
            <a
              href={repo.html_url}
              target={'_blank'}
              className={'repo-element__title'}
              rel="noreferrer"
            >
              {repo.name}
            </a>
            <p className={'repo-element__text'}>{repo.description}</p>
          </div>
        );
      })}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={'pagination'}
        pageLinkClassName={'page-num'}
        previousLinkClassName={'prev'}
        nextLinkClassName={'next'}
        activeLinkClassName={'active-page'}
      />
    </div>
  );
};

export default Repos;

import React from 'react';
import './paginationPreview.scss';
import { IRepo } from '../../../../types/types';

const PaginationPreview = (props: { length: number; itemOffset: number }) => {
  return (
    <div className={'pagination-counter'}>
      <span className={'pagination-counter__text'}>
        {props.itemOffset + 1} -{' '}
        {props.length < props.itemOffset + 4 ? props.length : props.itemOffset + 4} of{' '}
        {props.length} items
      </span>
    </div>
  );
};

export default PaginationPreview;

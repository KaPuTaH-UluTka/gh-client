import React from 'react';
import './paginationPreview.scss';
import { IRepo } from '../../../../types/types';

const PaginationPreview = (props: { length: number; itemOffset: number }) => {
  function calculateLast(itemNum: number, itemsCount: number) {
    return itemsCount < itemNum + 4 ? itemsCount : itemNum + 4;
  }
  return (
    <div className={'pagination-counter'}>
      <span className={'pagination-counter__text'}>
        {props.itemOffset + 1} - {calculateLast(props.itemOffset, props.length)} of {props.length}{' '}
        items
      </span>
    </div>
  );
};

export default PaginationPreview;

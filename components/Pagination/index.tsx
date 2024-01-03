import React from 'react';
import styles from './styles';

interface PaginationItemProps {
  label: string;
  link: string;
  isThreeDot?: boolean;
}

const PaginationItem = (props: PaginationItemProps) => {
  const { label, link, isThreeDot = false } = props;
  return (
    <li className="mx-1">
      <a
        href={isThreeDot ? '#' : link}
        className={isThreeDot ? styles.three_dot : styles.pagination_item}
      >
        {label}
      </a>
    </li>
  )
}

const Pagination = () => {
  return (
    <div
      className="wow fadeInUp -mx-4 flex flex-wrap"
      data-wow-delay=".15s"
    >
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-8">
          <PaginationItem label='Prev' link='#0' />
          <PaginationItem label='1' link='#0' />
          <PaginationItem label='2' link='#0' />
          <PaginationItem label='3' link='#0' />
          <PaginationItem label='...' link='#0' isThreeDot={true} />
          <PaginationItem label='12' link='#0' />
          <PaginationItem label='Next' link='#0' />
        </ul>
      </div>
    </div>
  );
};

export default Pagination;

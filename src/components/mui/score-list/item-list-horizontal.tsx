import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import { cat } from 'src/context/types';
import ItemHorizontal from './item-horizontal';

// ----------------------------------------------------------------------

type Props = {
  items: cat[];
  loading?: boolean;
};

const ITEMS_PER_PAGE = 8;

export default function ItemListHorizontal({ items, loading }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const sortedItems = items.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.name.localeCompare(b.name);
  });

  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderList = (
    <>
      {paginatedItems.map((item) => (
        <ItemHorizontal key={item.id} item={item} />
      ))}
    </>
  );

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        sx={{ p: 5 }}
      >
        {renderList}
      </Box>

      {items.length > ITEMS_PER_PAGE && (
        <Pagination
          count={Math.ceil(items.length / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handleChangePage}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

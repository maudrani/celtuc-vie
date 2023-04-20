import React, { useEffect, useRef } from 'react';

const SimpleGrid = ({ children, gap, columnSize, fitItems, ...rest }) => {
  const gridRef = useRef();

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid || !grid.children[0] || fitItems) return;

    const childrenAmount = grid.children.length;
    const totalChildrenWidth = columnSize * childrenAmount;
    const totalGapSize = gap * (childrenAmount - 1);

    grid.style.max_width = `${totalChildrenWidth + totalGapSize}px`;
  }, [columnSize, gap, fitItems]);

  return (
    <div
      ref={gridRef}
      {...rest}
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: `repeat(
        ${fitItems ? 'auto-fit' : 'auto-fill'},
        minmax(min(${columnSize}px, 100%), 1fr)
      )`,
        gap: `${gap}px`,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};

export default SimpleGrid;

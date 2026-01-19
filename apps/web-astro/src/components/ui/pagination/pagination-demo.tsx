import { Pagination } from './pagination';

export const PaginationDemo = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Pagination count={100} pageSize={10} siblingCount={1} defaultPage={1} />
    </div>
  );
};

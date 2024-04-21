import { TSortBy } from '../../../shared';

type HomeHeaderProps = {
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  sortBy: TSortBy;
};
const HomeHeader = (props: HomeHeaderProps) => {
  return (
    <>
      <h2>User List</h2>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={props.sortBy} onChange={props.handleSortChange}>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>
    </>
  );
};

export default HomeHeader;

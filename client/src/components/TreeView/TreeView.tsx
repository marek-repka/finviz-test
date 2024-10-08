import { DataItem } from "../../api/api";
import CategoryItem from "./CategoryItem/CategoryItem";

interface Props {
  items?: DataItem[];
}

const TreeView = ({ items }: Props) => {
  if (items) {
    return (
      <div>
        {items.map((item) => (
          <CategoryItem key={item.name} item={item} />
        ))}
      </div>
    );
  }
  return null;
};

export default TreeView;

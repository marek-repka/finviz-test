import styled from "styled-components";
import { DataItem } from "../../../api/api";
import { useState } from "react";
import SubcategoryItem from "../SubcategoryItem/SubcategoryItem";
import ExpandingIndicator from "../ExpandingIndicator/ExpandingIndicator";

interface Props {
  item: DataItem;
}

const ListItem = styled.div`
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: lightgreen;
  color: darkgreen;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
  span {
    display: inline-block;
    width: 12px;
    text-align: center;
    margin-right: 25px;
  }
`;

const SubcategoriesContainer = styled.div`
  padding-left: 30px;
`;

const CategoryItem = ({ item }: Props) => {
  const [isOpen, toggle] = useState(false);
  return (
    <div>
      <ListItem role="listitem" onClick={() => toggle((prev) => !prev)}>
        <ExpandingIndicator size={item.size} isOpen={isOpen} />
        {`${item.name} (${item.size})`}
      </ListItem>
      {isOpen && (
        <SubcategoriesContainer>
          {item.children.map((subitem) => (
            <SubcategoryItem item={subitem} />
          ))}
        </SubcategoriesContainer>
      )}
    </div>
  );
};

export default CategoryItem;

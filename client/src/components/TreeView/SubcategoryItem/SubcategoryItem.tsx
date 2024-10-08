import styled from "styled-components";
import { DataItem } from "../../../api/api";
import { useState } from "react";
import NthSubcategoryItem from "../NthSubcategoryItem/NthSubcategoryItem";
import ExpandingIndicator from "../ExpandingIndicator/ExpandingIndicator";

interface Props {
  item: DataItem;
}

const ListItem = styled.div`
  padding: 3px 10px;
  margin: 5px 0;
  border-radius: 7px;
  background-color: lightblue;
  color: darkblue;
  font-size: 1.1rem;
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
  padding-left: 15px;
`;

const SubcategoryItem = ({ item }: Props) => {
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
            <NthSubcategoryItem key={subitem.name} item={subitem} />
          ))}
        </SubcategoriesContainer>
      )}
    </div>
  );
};

export default SubcategoryItem;

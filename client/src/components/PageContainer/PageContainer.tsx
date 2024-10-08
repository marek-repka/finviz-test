import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container = styled.div`
  max-width: 1200px;
  min-width: 300;
  margin: 20px auto;
  padding: 15px;
  border-radius: 20px;
  background-color: white;
`;

const PageContainer = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default PageContainer;

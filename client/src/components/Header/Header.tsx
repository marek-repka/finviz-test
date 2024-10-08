import styled from "styled-components";

interface Props {
  title?: string;
}

const StyledH1 = styled.h1`
font-size: 1.5rem;
font-weight: 500;
padding: 0 5px 30px;
margin: 25px 0;
border-bottom: 1px solid;
`;

const Header = ({title}: Props) => {
return <header><StyledH1>{title || 'Loading...'}</StyledH1></header>
}

export default Header;
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  border: 1px solid red;
  font-size: ${(props) => props?.theme?.fontSize?.small};
  color: ${(props) => props.theme.colors.themeColor};
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
  gap: 10px;
`;

import styled from 'styled-components';

// Navbar Containers
export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 10px 200px;
  background-color: #141414;
`;
export const NavItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Navbar Logo
export const NavLogo = styled.a`
  font-size: 24px;
  cursor: pointer;
  color: #fff;
`;

// Navbar Items
export const NavItem = styled.a`
  font-size: 20px;
  cursor: pointer;
  color: #fff;

  &:not(:last-child) {
    margin-right: 6rem;
  }
`;

// Navbar Hamburger

// Navbar Menu

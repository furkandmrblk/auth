import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarDiv, NavItem, NavItemDiv, NavLogo } from './NavbarStyled';

function Hero() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [isAuth]);

  const logOut = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    router.push('/');
  };

  return (
    <NavbarDiv>
      <Link href="/">
        <NavLogo>Logo</NavLogo>
      </Link>
      <NavItemDiv>
        {isAuth ? (
          <>
            <NavItem>Profile</NavItem>
            <NavItem onClick={logOut}>Logout</NavItem>
          </>
        ) : (
          <>
            <Link href="/register">
              <NavItem>Register</NavItem>
            </Link>
            <Link href="/login">
              <NavItem>Sign In</NavItem>
            </Link>
          </>
        )}
      </NavItemDiv>
    </NavbarDiv>
  );
}

export default Hero;

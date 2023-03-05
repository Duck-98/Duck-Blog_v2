import React, { useState, useEffect } from 'react';
import navlinks from '../data/navlinks';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from 'react-icons/rx';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [router]); // 페이지 이동 시 메뉴창 닫히기

  return (
    <div>
      <CustomNav isOpen={isOpen}>
        {navlinks.map((nav) => (
          <CustomLink href={nav.link} key={nav.title}>
            {nav.title}
          </CustomLink>
        ))}
      </CustomNav>
      <Button onClick={toggleMenu} isOpen={isOpen}>
        <RxHamburgerMenu />
      </Button>
      <CustomSide isOpen={isOpen}>
        {navlinks.map((nav) => (
          <CustomLink href={nav.link} key={nav.title}>
            {nav.title}
          </CustomLink>
        ))}
      </CustomSide>
    </div>
  );
};

export default Nav;

const CustomLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  padding: 0.7rem;
`;

const CustomNav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.button<{ isOpen: boolean }>`
  display: none;
  color: ${({ theme }: { theme: any }) => theme.textColor};
  font-size: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const CustomSide = styled.div<{ isOpen: boolean }>`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    right: -20px;

    display: ${({ isOpen }) => (isOpen === false ? 'none' : 'flex')};
    flex-direction: column;

    background: ${({ theme }: { theme: any }) => theme.grayColor};

    padding: 0.75rem 1rem;

    line-height: 1.5;
    font-weight: 500;

    z-index: 100;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  }
`;

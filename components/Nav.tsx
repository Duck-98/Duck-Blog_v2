import navlinks from '../data/navlinks';
import Link from 'next/link';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

const Nav = () => {
  return (
    <CustomNav>
      {navlinks.map((nav) => (
        <CustomLink href={nav.link} key={nav.title}>
          {nav.title}
        </CustomLink>
      ))}
    </CustomNav>
  );
};

export default Nav;

const CustomLink = styled(Link)`
  margin-right: 1.25rem;
  font-size: 20px;
  font-weight: bold;
`;

const CustomNav = styled.nav``;

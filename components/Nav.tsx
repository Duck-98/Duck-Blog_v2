import navlinks from '../data/navlinks';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <CustomLink href={nav.link} key={nav.title}>
          {nav.title}
        </CustomLink>
      ))}
    </nav>
  );
};

export default Nav;

const CustomLink = styled(Link)`
  margin-right: 1.25rem;
  font-size: 20px;
  font-weight: bold;
`;

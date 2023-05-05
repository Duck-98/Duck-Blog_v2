import styled, { css } from 'styled-components';
import { MdOutlineModeNight } from 'react-icons/md';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

  .select {
    padding-left: 10px;
  }
`;

export const BlogContainer = styled.div`
  height: 50vh;
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  margin: 20px 5px 0 5px;
  flex-shrink: 0;
  height: 1.5rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.5px;
  background: ${({ theme }: { theme: any }) => theme.grayColor};
  color: ${({ theme }: { theme: any }) => theme.textColor};
  text-decoration: none;
  ${({ isActive }) =>
    isActive
      ? css`
          background: ${({ theme }: { theme: any }) => theme.textColor};
          color: ${({ theme }: { theme: any }) => theme.grayColor};
          font-weight: bolder;
        `
      : css``};
`;

export const DefaultTagContainer = styled(TagContainer)`
  background: ${({ theme }: { theme: any }) => theme.textColor};
  color: ${({ theme }: { theme: any }) => theme.grayColor};
  font-weight: bolder;
`;

export const Button = styled.button`
  position: relative;
  bottom: 45px;
  right: -150px;
  font-size: 40px;
`;

export const Night = styled(MdOutlineModeNight)`
  color: white;
`;

export const BtnWrapper = styled.div``;

export const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: ${({ theme }: { theme: any }) => theme.textColor};
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: ${({ theme }: { theme: any }) => theme.grayColor};
  }
  ul.pagination li.active {
    background: ${({ theme }: { theme: any }) => theme.textColor};
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
  }
`;

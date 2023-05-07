import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Router from 'next/router';

const Modal = ({ setModalOpen }) => {
  const handleRouter = () => {
    Router.push('http://duck-blog.info/');
  };
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef<HTMLDivElement>(null);
  /*
  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (e: any) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          setModalOpen(false);
        }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });
  */

  return (
    // 모달창을 useRef로 잡아준다.
    <Div ref={modalRef}>
      <button className="close" onClick={closeModal}>
        <AiOutlineClose className="icon" />
      </button>
      <p>블로그 이전 중입니다..</p>
      <Button onClick={handleRouter}>이전 블로그 가보기</Button>
    </Div>
  );
};
export default Modal;

const Button = styled.button`
  background: ${({ theme }: { theme: any }) => theme.bgColor};
  color: ${({ theme }: { theme: any }) => theme.textColor};
  font-size: 15px;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
`;

const Div = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  /* 최상단 위치 */
  z-index: 999;
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 모달창 디자인 */
  background: ${({ theme }: { theme: any }) => theme.grayColor};
  border: 1px solid black;
  border-radius: 8px;
  .icon {
    cursor: pointer;
    color: ${({ theme }: { theme: any }) => theme.textColor};
    font-size: 35px;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  p {
    font-size: 20px;
    color: ${({ theme }: { theme: any }) => theme.textColor};
  }
`;

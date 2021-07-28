import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1110px;
  border: 2px solid #e4e3e6;
  border-radius: 2px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 1.5rem;

  .year {
    font-size: 2rem;
    font-weight: bold;
    margin-right: 2rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 0 0;
    cursor: pointer;

    li {
      font-weight: bold;
      padding: 0.3rem 0.5rem;
      border: 1px solid #8b8a8a;
      border-radius: 4px;
      margin-right: 0.5rem;
      transition: 0.12s;

      &:hover {
        background: #4e97c2;
        color: white;
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }
`;

const Days = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  li {
    padding-right: 1.5rem;
    width: calc(100% / 7);
    text-align: right;
    &:nth-child(7n + 1) {
      color: #b33131;
    }

    &:nth-child(7n) {
      color: #3b7ac2;
    }
  }
`;

interface Props {
  year: number;
  month: number;
  goToday: () => void;
  setMonth: Dispatch<SetStateAction<number>>;
}

const Header: React.FC<Props> = ({ year, month, goToday, setMonth }) => {
  const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <Container>
      <Nav>
        <div className="year">
          {year}년 {month}월
        </div>

        <div className="buttons">
          <li onClick={() => setMonth(month - 1)}>&lt;</li>
          <li className="today" onClick={goToday}>
            오늘
          </li>
          <li onClick={() => setMonth(month + 1)}>&gt;</li>
        </div>
      </Nav>
      <Days>
        {DAYS.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </Days>
    </Container>
  );
};

export default Header;

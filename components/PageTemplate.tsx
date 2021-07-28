import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Header from './Header';

// Styles
const Main = styled.main``;

interface Props {
  year: number;
  month: number;
  setMonth: Dispatch<SetStateAction<number>>;
  goToday: () => void;
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({
  year,
  month,
  setMonth,
  goToday,
  children,
}) => {
  return (
    <>
      <Header year={year} month={month} setMonth={setMonth} goToday={goToday} />

      <Main>{children}</Main>
    </>
  );
};

export default PageTemplate;

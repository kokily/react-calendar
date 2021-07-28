import React from 'react';
import styled from 'styled-components';
import Dates from './Dates';

// Styles
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 1110px;
`;

interface Props {
  year: number;
  month: number;
  today: number;
  totalDate: any[];
  lastDate: number;
  firstDate: number;
  findToday: number;
  getMonth: number;
}

const Main: React.FC<Props> = ({
  year,
  month,
  today,
  totalDate,
  lastDate,
  firstDate,
  findToday,
  getMonth,
}) => {
  return (
    <Container>
      {totalDate.map((day, i) => (
        <Dates
          key={i}
          id={i}
          lastDate={lastDate}
          firstDate={firstDate}
          day={day}
          findToday={findToday === i && month === getMonth && findToday}
          month={month}
          year={year}
        />
      ))}
    </Container>
  );
};

export default Main;

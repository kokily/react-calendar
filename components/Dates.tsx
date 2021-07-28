import React from 'react';
import styled, { css } from 'styled-components';
import useDates from '../pages/hooks/useDates';
import Modal from './Modal';

// Styles
const Container = styled.li`
  width: calc(100% / 7 - 2px);
  text-align: right;
  min-height: 3.5rem;
  border: 1px solid #bebebe;

  &:nth-child(7n + 1) {
    color: #b33131;
  }

  &:nth-child(7n) {
    color: #3b7ac2;
  }
`;

const DateNum = styled.div<{
  idx: number;
  lastDate: number;
  firstDate: number;
  findToday: number;
}>`
  padding: 0.5rem 1.4rem;

  ${(props) =>
    props.idx < props.lastDate &&
    css`
      color: #969696;
    `}

  ${(props) =>
    props.firstDate > 0 &&
    props.idx > props.firstDate - 1 &&
    css`
      color: #969696;
    `}
`;

const Today = styled.span<{ findToday: number }>`
  ${(props) =>
    props.findToday &&
    css`
      position: relative;
      padding: 0.3rem 0.5rem;
      border-radius: 50%;
      color: white;
      background: #17cca5;
    `}
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.span`
  padding: 0.1rem;
  margin-bottom: 0.2rem;
`;

interface Props {
  id: number;
  lastDate: number;
  firstDate: number;
  day: any;
  findToday: number;
  month: number;
  year: number;
}

const Dates: React.FC<Props> = ({
  id,
  lastDate,
  firstDate,
  day,
  findToday,
  month,
  year,
}) => {
  const {
    userInput,
    setUserInput,
    openModal,
    setOpenModal,
    AddEvent,
    onChangeText,
    dateKey,
    evtList,
  } = useDates(month, day);

  return (
    <>
      <Container onClick={() => setOpenModal(true)}>
        <DateNum
          idx={id}
          lastDate={lastDate}
          firstDate={firstDate}
          findToday={findToday}
        >
          <Today findToday={findToday}>{day}</Today>
        </DateNum>

        {Boolean(evtList[0]) && (
          <Lists>
            {evtList.map(
              (list, i) =>
                list.slice(0, list.indexOf('_')) === dateKey && (
                  <List key={i} onClick={() => setOpenModal(true)}>
                    {list.slice(list.indexOf('_') + 1, list.length)}
                  </List>
                )
            )}
          </Lists>
        )}
      </Container>

      {openModal && (
        <Modal
          day={day}
          month={month}
          year={year}
          AddEvent={AddEvent}
          setOpenModal={setOpenModal}
          onChangeText={onChangeText}
        />
      )}
    </>
  );
};

export default Dates;

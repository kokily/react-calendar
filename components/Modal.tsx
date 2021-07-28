import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// Styles
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  background: rgba(202, 202, 202, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;

  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }

  .days {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Contexts = styled.div`
  margin-bottom: 1.5rem;

  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    outline: none;
    transition: border-color 0.15s ease-in-out;
    resize: vertical;
    padding: 0.5rem;
    font-size: 1em;
    font-weight: 400;
    color: #495057;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-right: 1rem;
  }
`;

interface Props {
  day: number;
  month: number;
  year: number;
  AddEvent: (value: string) => void;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({
  day,
  month,
  year,
  AddEvent,
  onChangeText,
  setOpenModal,
}) => {
  return (
    <Container>
      <Contents>
        <h2>Event 추가</h2>

        <div className="days">
          날짜 {year}. {month}. {day}
        </div>

        <Contexts>
          <textarea
            placeholder="Event를 추가하세요"
            onChange={onChangeText}
            rows={5}
          />
        </Contexts>

        <ButtonGroup>
          <Button submit onClick={AddEvent}>
            저장
          </Button>
          <Button back onClick={() => setOpenModal(false)}>
            닫기
          </Button>
        </ButtonGroup>
      </Contents>
    </Container>
  );
};

export default Modal;

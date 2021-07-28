import React, { useState } from 'react';

function useDate(month: number, day: number) {
  const [userInput, setUserInput] = useState({});
  const [evtList, setEvtList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let dateKey = `${month}${day}`;

  const AddEvent = () => {
    setEvtList([...evtList, userInput]);
    setUserInput('');
    setOpenModal(false);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(`${dateKey}_${e.target.value}`);
  };

  return {
    userInput,
    setUserInput,
    openModal,
    setOpenModal,
    AddEvent,
    onChangeText,
    dateKey,
    evtList,
  };
}

export default useDate;

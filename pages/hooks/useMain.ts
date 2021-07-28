import { useEffect, useState } from 'react';

function useMain() {
  let DATE = new Date();

  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);
  const [totalDate, setTotalDate] = useState([]);
  const [today, setToday] = useState(0);

  const goToday = () => {
    let TODAY = new Date().getDate();
    let goMonth = new Date().getMonth() + 1;

    setMonth(goMonth);
    setToday(TODAY);
  };

  const changeDate = (month: number) => {
    let PVLastDate = new Date(YEAR, month - 1, 0).getDate();
    let PVLastDay = new Date(YEAR, month - 1, 0).getDay();

    const ThisLasyDate = new Date(YEAR, month, 0).getDate();
    const ThisLasyDay = new Date(YEAR, month, 0).getDay();

    // 이전 날짜
    let PVLD = [];

    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PVLD.unshift(PVLastDate - i);
      }
    }

    // 다음 날짜
    let TLD = [];

    for (let i = 1; i < 7 - ThisLasyDay; i++) {
      if (i === 0) {
        return TLD;
      }

      TLD.push(i);
    }

    // 현재 날짜
    let TD = [];

    TD = [...Array(ThisLasyDate + 1).keys()].slice(1);

    return PVLD.concat(TD, TLD);
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  return {
    year,
    month,
    setMonth,
    goToday,
    totalDate,
    today,
  };
}

export default useMain;

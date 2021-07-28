import { NextPage } from 'next';
import PageTemplate from '../components/PageTemplate';
import useMain from './hooks/useMain';
import Main from '../components/Main';

const IndexPage: NextPage = () => {
  const { year, month, setMonth, goToday, totalDate, today } = useMain();
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;

  console.table([
    `lastDate: ${lastDate}`,
    `firstDate: ${firstDate}`,
    `findToday: ${findToday}`,
    `getMonth: ${getMonth}`,
    `year: ${year}`,
    `totalDate: ${totalDate}`,
  ]);

  return (
    <PageTemplate
      year={year}
      month={month}
      setMonth={setMonth}
      goToday={goToday}
    >
      <Main
        year={year}
        month={month}
        today={today}
        totalDate={totalDate}
        lastDate={lastDate}
        firstDate={firstDate}
        findToday={findToday}
        getMonth={getMonth}
      />
    </PageTemplate>
  );
};

export default IndexPage;

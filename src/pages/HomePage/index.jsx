import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  PaymentHistoryChart,
  PaymentHistoryForm,
  PaymentHistoryList,
  PaymentHistoryMonth,
} from "../../components/HomePage";
import { DefaultLayout, Flex } from "../../components/ui";
import useHistoryListQuery from "../../hooks/query/useHistoryListQuery";

const HomePage = () => {
  const { user: userId } = useParams();
  const [selectedMonth, setSelectedMonth] = useState(6);

  const initialHistoryList = useLoaderData();

  const historyList = useHistoryListQuery(initialHistoryList, userId);

  const filteredList = historyList.filter(({ date }) => {
    const formattedDate = new Date(date);
    return formattedDate.getMonth() + 1 === selectedMonth;
  });

  return (
    <DefaultLayout>
      <Wrap>
        <PaymentHistoryForm selectedMonth={selectedMonth} />
        <PaymentHistoryMonth
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <PaymentHistoryChart historyList={filteredList} />
        <PaymentHistoryList historyList={filteredList} />
      </Wrap>
    </DefaultLayout>
  );
};

export default HomePage;

const Wrap = styled(Flex)`
  padding-top: 32px;
  padding-bottom: 32px;
  flex-direction: column;
  gap: 32px;
`;

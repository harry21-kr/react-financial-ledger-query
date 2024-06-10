import { useState } from "react";
import styled from "styled-components";
import {
  PaymentHistoryChart,
  PaymentHistoryForm,
  PaymentHistoryList,
  PaymentHistoryMonth,
} from "../../components/HomePage";
import { DefaultLayout, Flex } from "../../components/ui";

const HomePage = () => {
  const [selectedMonth, setSelectedMonth] = useState(5);

  return (
    <DefaultLayout>
      <Wrap>
        <PaymentHistoryForm selectedMonth={selectedMonth} />
        <PaymentHistoryMonth
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <PaymentHistoryChart selectedMonth={selectedMonth} />
        <PaymentHistoryList selectedMonth={selectedMonth} />
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

import styled from "styled-components";
import { Box, Button, Flex } from "../ui";

export const PaymentHistoryMonth = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <Box>
      <Flex $justifyContent="center" $gap="20px" $flexWrap="wrap">
        {Array.from({ length: 12 }).map((_, idx) => (
          <SelectMonthButton
            key={idx}
            $isSelected={selectedMonth === idx + 1}
            onClick={() => setSelectedMonth(idx + 1)}
          >
            {idx + 1}월
          </SelectMonthButton>
        ))}
      </Flex>
    </Box>
  );
};

const SelectMonthButton = styled(Button)`
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#2ec4b6" : "#F6F7FA"};
  width: 104px;
  height: 60px;
  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
`;

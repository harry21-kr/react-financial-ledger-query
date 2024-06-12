import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { numberWithCommas } from "../../utils";
import { Box, Button, Flex, Text } from "../ui";

export const PaymentHistoryList = ({ historyList }) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex $flexDirection="column" $gap="16px">
        {historyList.length ? (
          historyList.map(({ id, date, title, amount, description, user }) => (
            <ListButton
              key={id}
              onClick={() => navigate(`/detail/${user}/${id}`)}
            >
              <Flex $flexDirection="column" $gap="4px">
                <Text $fontSize="14px">{date}</Text>
                <Flex>
                  <Text color="#007bff" $fontWeight="bold">
                    {title}&nbsp;-&nbsp;{description}
                  </Text>
                </Flex>
              </Flex>
              <Text color="#007bff" $fontWeight="bold">
                {numberWithCommas(amount)} 원
              </Text>
            </ListButton>
          ))
        ) : (
          <Text>지출 내역이 없습니다.</Text>
        )}
      </Flex>
    </Box>
  );
};

const ListButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 64px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  color: black;
  padding: 15px 20px;

  &:hover {
    transform: scale(1.02);
  }
`;

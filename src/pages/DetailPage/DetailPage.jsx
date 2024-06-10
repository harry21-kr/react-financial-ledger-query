import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  EditPaymentHistory,
  PaymentHistoryDetail,
} from "../../components/DetailPage";
import { Box, DefaultLayout, Flex } from "../../components/ui";
import { usePaymentHistoryList } from "../../store/paymentHistory/hooks";

const DetailPage = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const { itemId } = useParams();

  const paymentHistoryList = usePaymentHistoryList();
  const targetItem = paymentHistoryList.find((item) => item.id === itemId);

  return (
    <DetailPageDefaultLayout>
      <Box>
        <Flex $flexDirection="column" $gap="12px">
          <Flex
            $flexDirection="column"
            $justifyContent="center"
            $alignItems="center"
            $gap="12px"
          >
            {isEditMode ? (
              <EditPaymentHistory
                item={targetItem}
                setIsEditMode={setIsEditMode}
              />
            ) : (
              <PaymentHistoryDetail
                item={targetItem}
                setIsEditMode={setIsEditMode}
              />
            )}
          </Flex>
        </Flex>
      </Box>
    </DetailPageDefaultLayout>
  );
};

export default DetailPage;

const DetailPageDefaultLayout = styled(DefaultLayout)`
  padding-top: 32px;
`;

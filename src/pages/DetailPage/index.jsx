import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import {
  EditPaymentHistory,
  PaymentHistoryDetail,
} from "../../components/DetailPage";
import { Box, DefaultLayout, Flex } from "../../components/ui";

const DetailPage = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const paymentHistoryItem = useLoaderData();

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
                item={paymentHistoryItem[0]}
                setIsEditMode={setIsEditMode}
              />
            ) : (
              <PaymentHistoryDetail
                item={paymentHistoryItem[0]}
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

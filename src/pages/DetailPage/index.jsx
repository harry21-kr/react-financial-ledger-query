import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  EditPaymentHistory,
  PaymentHistoryDetail,
} from "../../components/DetailPage";
import { Box, DefaultLayout, Flex } from "../../components/ui";
import useHistoryItemQuery from "../../hooks/query/useHistoryItemQuery";

const DetailPage = () => {
  const { itemId } = useParams();

  const [isEditMode, setIsEditMode] = useState(false);

  const initialHistoryItem = useLoaderData();

  const historyItem = useHistoryItemQuery(initialHistoryItem, itemId);

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
                item={historyItem[0]}
                setIsEditMode={setIsEditMode}
              />
            ) : (
              <PaymentHistoryDetail
                item={historyItem[0]}
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

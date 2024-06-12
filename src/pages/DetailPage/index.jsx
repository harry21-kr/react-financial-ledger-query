import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import styled from "styled-components";
import paymentHistoryApi from "../../api/PaymentHistory/paymentHistory.api";
import {
  EditPaymentHistory,
  PaymentHistoryDetail,
} from "../../components/DetailPage";
import { Box, DefaultLayout, Flex } from "../../components/ui";

const DetailPage = () => {
  const { itemId } = useParams();

  const [isEditMode, setIsEditMode] = useState(false);

  const paymentHistoryItem = useLoaderData();

  const { data } = useQuery({
    queryKey: ["historyItem"],
    queryFn: () => paymentHistoryApi.getPaymentHistoryByItemId(itemId),
    initialData: paymentHistoryItem,
  });

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
                item={data[0]}
                setIsEditMode={setIsEditMode}
              />
            ) : (
              <PaymentHistoryDetail
                item={data[0]}
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

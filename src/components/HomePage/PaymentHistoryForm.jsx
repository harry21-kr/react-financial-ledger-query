import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useHistoryMutation from "../../hooks/mutate/useHistoryMutation";
import InputField from "../common/InputField";
import { Box, Button, Flex } from "../ui";

const initialPaymentHistoryItem = {
  id: 0,
  date: "2024-05-21",
  title: "",
  amount: 0,
  description: "",
};

export const PaymentHistoryForm = ({ selectedMonth }) => {
  const { user } = useParams();

  const [newItem, setNewItem] = useState(initialPaymentHistoryItem);

  const { postHistoryItem } = useHistoryMutation();

  const handleSubmitHistory = async () => {
    if (!newItem.title.length) {
      return toast.info("지출 항목을 입력해주세요");
    } else if (!Number.isInteger(newItem.amount)) {
      return toast.info("금액란에 소수점은 허용되지 않습니다.");
    } else if (!newItem.amount) {
      return toast.info("금액을 입력해주세요");
    } else if (!newItem.description) {
      return toast.info("지출 내용을 입력해주세요");
    }
    const newHistoryItemWithId = { ...newItem, user, id: uuidv4() };
    await postHistoryItem(newHistoryItemWithId);
    setNewItem({
      ...initialPaymentHistoryItem,
      date: newItem.date,
    });
  };

  useEffect(() => {
    if (selectedMonth) {
      setNewItem((prevItem) => ({
        ...prevItem,
        date: `2024-${
          selectedMonth > 9 ? selectedMonth : `0${selectedMonth}`
        }-21`,
      }));
    }
  }, [selectedMonth]);

  return (
    <Box>
      <Flex $justifyContent="center" $alignItems="flex-end" $gap="10px">
        <InputField
          label="날짜"
          type="date"
          value={newItem.date}
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              date: e.target.value,
            }))
          }
        />
        <InputField
          label="항목"
          type="text"
          value={newItem.title}
          placeholder="지출 항목"
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              title: e.target.value,
            }))
          }
        />
        <InputField
          label="금액"
          type="number"
          value={newItem.amount}
          placeholder="지출 금액"
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              amount: Number(e.target.value),
            }))
          }
        />
        <InputField
          label="내용"
          type="text"
          value={newItem.description}
          placeholder="지출 내용"
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              description: e.target.value,
            }))
          }
        />
        <SubmitButton onClick={handleSubmitHistory}>저장</SubmitButton>
      </Flex>
    </Box>
  );
};

const SubmitButton = styled(Button)`
  height: 34px;
  background-color: #007bff;
`;

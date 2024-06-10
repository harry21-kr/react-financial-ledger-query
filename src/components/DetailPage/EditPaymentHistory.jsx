import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editHistoryItem } from "../../store/paymentHistory/paymentHistorySlice";
import InputField from "../common/InputField";
import { Button, Flex } from "../ui";

export const EditPaymentHistory = ({ item, setIsEditMode }) => {
  const [newItem, setNewItem] = useState(item);

  const dispatch = useDispatch();

  const handleEditItem = () => {
    if (!newItem.title.length) {
      return alert("지출 항목을 입력해주세요");
    } else if (!newItem.amount) {
      return alert("금액을 입력해주세요");
    } else if (!Number.isInteger(newItem.amount)) {
      return alert("금액란에 소수점은 허용되지 않습니다.");
    } else if (!newItem.description) {
      return alert("지출 내용을 입력해주세요");
    }
    dispatch(editHistoryItem(newItem));
    setIsEditMode(false);
  };

  return (
    <>
      <Flex $gap="10px">
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
          maxLength={10}
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
      </Flex>
      <Flex $justifyContent="center" $gap="12px">
        <EditConfirmButton onClick={handleEditItem}>완료</EditConfirmButton>
        <EditCancelButton onClick={() => setIsEditMode(false)}>
          취소
        </EditCancelButton>
      </Flex>
    </>
  );
};

const EditConfirmButton = styled(Button)`
  background-color: #007bff;
`;

const EditCancelButton = styled(Button)`
  background-color: #ff4d4d;
`;

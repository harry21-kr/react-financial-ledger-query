import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useHistoryMutation from "../../hooks/mutate/useHistoryMutation";
import { numberWithCommas } from "../../utils";
import { Button, Flex, Text } from "../ui";

export const PaymentHistoryDetail = ({ item, setIsEditMode }) => {
  const { id, date, title, description, amount, userId } = item;

  const { deleteHistoryItem } = useHistoryMutation();

  const navigate = useNavigate();

  const handleDeleteItem = async () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      await deleteHistoryItem(id);
      navigate(`/home/${userId}`);
    }
  };

  return (
    <>
      <Text $fontSize="14px">날짜: {date}</Text>
      <Text $fontSize="18px">분야: {title}</Text>
      <Text $fontSize="24px" $fontWeight="bold">
        {description}에
      </Text>
      <Text $fontSize="24px" $fontWeight="bold" $color="#007bff">
        {numberWithCommas(amount)}
        {amount > 100000 ? "원이나 쓰셨네요! 참 대단해요!" : "원을 썻어요!"}
      </Text>
      <Flex $justifyContent="center" $gap="12px">
        <EditButton onClick={() => setIsEditMode(true)}>수정</EditButton>
        <DeleteButton onClick={handleDeleteItem}>삭제</DeleteButton>
        <BackButton onClick={() => navigate(`/home/${userId}`)}>
          뒤로 가기
        </BackButton>
      </Flex>
    </>
  );
};

const EditButton = styled(Button)`
  background-color: #007bff;
`;

const DeleteButton = styled(Button)`
  background-color: #ff4d4d;
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
`;

import { Flex, Input, Text } from "../../ui";

const InputField = ({ label, type, value, placeholder, onChange }) => {
  return (
    <Flex $flexDirection="column" $gap="5px">
      <Text fontSize="14px">{label}</Text>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Flex>
  );
};

export default InputField;

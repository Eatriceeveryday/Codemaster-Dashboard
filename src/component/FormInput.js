import { Box, Input, Text } from '@chakra-ui/react';

const FormInput = ({
  label,
  placeholder,
  size = 'md',
  type,
  onChange,
  value,
  name,
  readOnly,
}) => {
  return (
    <Box>
      <Text mb="6px">{label}</Text>
      <Input
        placeholder={placeholder}
        isDisabled={readOnly}
        readonly={readOnly}
        name={name}
        onChange={onChange}
        value={value}
        size={size}
        type={type}
      />
    </Box>
  );
};

export default FormInput;

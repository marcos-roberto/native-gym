import { Input as NInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NInput
      bg="gray.700"
      h={14}
      px={4}
      color="white"
      fontSize="md"
      fontFamily="body"
      borderWidth={0}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}

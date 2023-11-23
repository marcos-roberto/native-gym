import { Button as NButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <NButton
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderColor={variant === "outline" ? "green.500" : "transparent"}
      borderWidth={variant === "outline" ? 1 : 0}
      rounded="sm"
      h={14}
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NButton>
  );
}

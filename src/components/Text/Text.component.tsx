import { capitalize } from "@/utils/strings";
import { FC } from "react";

import { TextProps } from "./Text.types";

export const Text: FC<TextProps> = (props) => {
  const { renderAs, text } = props

  const TextComponent = renderAs

  return (
    <TextComponent>
      {capitalize(text)}
    </TextComponent>
  )
}
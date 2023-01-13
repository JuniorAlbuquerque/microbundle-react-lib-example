import { SomeType } from "@/types"

export type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

export type TextProps = {
  renderAs: TextType
  text: SomeType
}
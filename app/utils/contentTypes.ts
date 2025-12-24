export interface LocalizedText {
  id: string
  en: string
}

export interface ContentBlock {
  type: 'paragraph' | 'quote' | 'image'
  text?: LocalizedText
  cite?: LocalizedText
  src?: string
  alt?: LocalizedText
  caption?: LocalizedText
}

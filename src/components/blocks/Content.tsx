import { Text, Code } from '~/components/blocks'

import type { PickedBlock } from '~/types'

interface Props {
  block: PickedBlock
}

const Content = ({ block }: Props) => {
  const { type } = block

  switch (type) {
    case 'heading_1':
      return <Text as="h1">{block[type].text}</Text>
    case 'heading_2':
      return <Text as="h2">{block[type].text}</Text>
    case 'heading_3':
      return <Text as="h3">{block[type].text}</Text>
    case 'paragraph':
      return <Text as="p">{block[type].text}</Text>
    case 'code':
      const { text, language } = block[type]
      const code = text.map((t) => t.plain_text).join('')

      return <Code language={language}>{code}</Code>
    default:
      return (
        <code style={{ color: 'red', display: 'block' }}>..redacted..</code>
      )
    // return <pre>{JSON.stringify(block, null, 2)}</pre>
  }
}

export default Content
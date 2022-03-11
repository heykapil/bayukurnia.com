import { NextSeo } from 'next-seo'
import { attachMainLayout } from '~/layouts/Main.layout'
import { ChatBubble } from '~/components/chat'

import { container, stack } from '~/styles/primitives'

import { Page } from '~/types/page.type'
import { Message } from '~/types/chat.type'

const messages: Message[] = [
  {
    text: 'I have to do something to help that child.',
    time: new Date().getTime(),
    color: 'red'
  },
  {
    text: "But you said you didn't see your wife at all that day.",
    time: new Date().getTime(),
    color: 'green',
    host: true
  },
  {
    text: "Oh my God. You're in love with her.",
    time: new Date().getTime(),
    color: 'blue'
  },
  {
    text: "I'm not sure what to do.",
    time: new Date().getTime(),
    color: 'brown'
  },
  {
    text: 'I have to do something to help that child.',
    time: new Date().getTime(),
    color: 'red'
  },
  {
    text: "But you said you didn't see your wife at all that day.",
    time: new Date().getTime(),
    color: 'green'
  },
  {
    text: "Oh my God. You're in love with her.",
    time: new Date().getTime(),
    color: 'yellow'
  },
  {
    text: "I'm not sure what to do.",
    time: new Date().getTime(),
    color: 'blue'
  },
  {
    text: 'I have to do something to help that child.',
    time: new Date().getTime(),
    color: 'magenta'
  },
  {
    text: "But you said you didn't see your wife at all that day.",
    time: new Date().getTime(),
    color: 'cyan'
  }
]

const About: Page = () => {
  return (
    <div className={`${container({ size: 'small' })} ${stack({ grow: true })}`}>
      <NextSeo title="Guestchat" />
      <div className={stack({ dir: 'col', y: 'bottom', grow: true })}>
        {messages.map((message, i) => (
          <ChatBubble key={i} {...message} />
        ))}
      </div>
    </div>
  )
}

About.layout = attachMainLayout

export default About

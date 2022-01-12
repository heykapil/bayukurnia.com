import { attachMainLayout } from '~/layouts/Main.layout'

import container from '~/styles/container.style'

import { Page } from '~/types/page.type'

const About: Page = () => {
  return (
    <div className={container({ size: 'small' })}>
      Di sini juga ngga ada apa-apa.
    </div>
  )
}

About.layout = attachMainLayout

export default About

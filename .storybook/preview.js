import 'focus-visible'
import 'inter-ui/inter.css'
import '../src/fonts/jetbrains-mono/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

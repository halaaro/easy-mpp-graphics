import { render } from 'preact'
import { App } from './app'
import './index.css'

declare global {
  /* makes typescript happy */
  interface Window {
    /* should be provided by caller */
    arasArgs: {
      dialog: {
        close: () => void
      }
      search: () => void
      upload: (file: File) => { error?: boolean } | undefined
      errorMessage: (msg: string) => void
    }
    /* handlers used by our app */
    _handleSearch: () => void
    _handleUpload: (file: File) => void
    _handleInvalidType: (msg: string) => void
  }
}

if (window.arasArgs) {
  window._handleInvalidType = (msg: string) => {
    window.arasArgs.errorMessage(msg)
  }
  window._handleSearch = () => {
    window.arasArgs.dialog.close()
    window.arasArgs.search()
  }
  window._handleUpload = (file: File) => {
    const result = window.arasArgs.upload(file)
    if (result && !result.error) {
      window.arasArgs.dialog.close()
    } else {
      console.warn('error from aras:', result)
    }
  }
} else {
  console.warn('arasArgs not found, running outside innovator?')
}

render(<App />, document.getElementById('app')!)

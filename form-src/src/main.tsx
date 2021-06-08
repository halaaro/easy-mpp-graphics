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
  const args = window.arasArgs
  window._handleInvalidType = (msg: string) => {
    args.errorMessage(msg)
  }
  window._handleSearch = () => {
    args.dialog.close()
    args.search()
  }
  window._handleUpload = (file: File) => {
    const result = args.upload(file)
    if (result && !result.error) {
      args.dialog.close()
    } else {
      console.warn('error result from aras:', result)
    }
  }
} else {
  console.warn('Global arasArgs not found. Running outside innovator dialog?')
}

render(<App />, document.getElementById('app')!)

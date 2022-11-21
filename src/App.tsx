import { JSX } from 'solid-js/jsx-runtime'
import logo from './logo.svg'
import styles from './App.module.css'

function App (): JSX.Element {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Folks
        </a>
      </header>
    </div>
  )
}

export default App

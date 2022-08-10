
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css'




function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper} > 
        <Sidebar />
        <main>
          < Post />
        </main>
      </div>

    </div>
  )
}

export default App

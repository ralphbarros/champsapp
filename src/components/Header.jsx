import styles from './Header.module.css'

import champsLogo from '../assets/champs-logo.png';

console.log(champsLogo)

export function Header() {
    return (
        <header className={styles.header}>
            <img src={champsLogo} alt="Logotico do Champs" />

        </header>
     
        
    );
}
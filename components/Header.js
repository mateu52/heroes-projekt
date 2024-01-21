import Link from 'next/link'
import styled from 'styled-components'
import styles from '../styles/Header.module.css'
const StyledList = styled.ul`
    display: flex;
    list-style: none;
    height: 60px;
`;

export default function Layout(){
    return(
        <>
            <StyledList>
                <li><Link href={'/'} className={styles.listLI}>Home</Link></li>
                <li><Link href={'/Heroes'} className={styles.listLI}>Heroes</Link></li>
                <li><Link href={'/Contact'} className={styles.listLI}>Contact</Link></li>
            </StyledList>
        </>
    )
}
import axios from './axios';
import Link from 'next/link';
import styles from '../../styles/Heroes.module.scss'
import { Montserrat } from 'next/font/google'

const MontFont = Montserrat({ subsets: ['latin'] })
export default function Heroes({data}) {
    const { results } = data;
    const heroesList = results.map(hero => <HeroElement key={hero.id} {...hero} />)
    return (
        <div className={styles.container}>
            <p className={styles.title}>Heroes</p>
            <ul className={styles.ul_list}>
                {heroesList}
            </ul>
        </div>
    )
  }
  function HeroElement({id, name}){
    return(
        <li className={`${styles.li_list}  ${MontFont.className}`}>
            <Link href={`/Heroes/${id}`} className={styles.link}>
                <p>{name}</p>
            </Link>
        </li>
    )
  }
  export async function getStaticProps(){
    const { data } = await axios.get('/search/a')
    
    return {
        props: {
            data
        }
    }
 }
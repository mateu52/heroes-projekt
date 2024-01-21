import axios from './axios';
import Link from 'next/link';
import styles from '../../styles/Heroes.module.scss'
export default function Heroes({data}) {
    const { results } = data;
    const heroesList = results.map(hero => <HeroElement key={hero.id} {...hero} />)
    return (
        <div className={styles.container}>
            <p className={styles.title}>Heroes</p>
            <ul className={styles.listLI} >
                {heroesList}
            </ul>
        </div>
    )
  }
  function HeroElement({id, name, url}){
    return(
        <li >
            <Link href={`/Heroes/${id}`} className={styles.listLI}>
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
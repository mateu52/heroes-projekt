import axios from './axios';
import Link from 'next/link';
export default function Heroes({data}) {
    const { results } = data;
    const heroesList = results.map(hero => <HeroElement key={hero.id} {...hero} />)
    return (
        <>
            <p>Heroes</p>
            <ul>
                {heroesList}
            </ul>
        </>
    )
  }
  function HeroElement({id, name, url}){
    return(
        <li>
            <Link href={`/Heroes/${id}`}>
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
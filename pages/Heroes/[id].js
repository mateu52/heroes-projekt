import axios from "./axios";
import styles from '../../styles/HeroesID.module.css';
export default function Hero({id, name, image, powerstats} ){
    const { intelligence, strength, speed, durability, power, combat} = powerstats;
    console.log(intelligence, strength, speed, durability, power, combat)
    return(
        <div className={styles.container}>
            <p className={styles.container_p}>{name}</p>
            <div className={styles.data}>
                <img src={image.url} alt="image" className={styles.image}/>
                <div className={styles.powerstats}>
                    <p>intelligence: {intelligence}</p>
                    <p>strength: {strength}</p>
                    <p>speed: {speed}</p>
                    <p>durability: {durability}</p>
                    <p>power: {power}</p>
                    <p>combat: {combat}</p>
                </div>
            </div>
        </div>
    )
}
export async function getStaticPaths(){
    // const { data } = await axios.get('/search/a');
    // const { results } = data;
    // const paths = results.map(({id}) => ({params: {id: id.toString()}}));

    return {
        paths: [],
        fallback: true,
    }
}
export async function getStaticProps({params}){
    const { data } = await axios.get(`/${params.id}`);
    const { name } = data;
    console.log(data)
    return {
        props: {
            ...data
        }
    }
}
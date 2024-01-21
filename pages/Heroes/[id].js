import axios from "./axios";
//import style from './style/style.scss';
export default function Hero({id, name} ){
    console.log(id, name)
    return(
        <p>hero: {name}</p>
    )
}
export async function getStaticPaths(){
    const { data } = await axios.get('/search/a');
    const { results } = data;
    const paths = results.map(({id}) => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({params}){
    const { data } = await axios.get(`/${params.id}`);
    const { name } = data;
    console.log(name)
    return {
        props: {
            ...data
        }
    }
}
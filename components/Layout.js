import Header from './Header';
export default function Layout({children}){
    return(
        <>
            <Header />
            {children}
            <p>site by Mateusz W.</p>
        </>
    )
}
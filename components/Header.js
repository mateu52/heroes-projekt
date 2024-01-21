import Link from 'next/link'
//import styled from 'styled-components'
//import '../style/style.scss'
// const StyledList = styled.ul`
//     padding: 0px;
//     margin: 0px;
//     display: flex;
//     list-style: none;
// `;

export default function Layout(){
    return(
        <>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/Heroes'}>Heroes</Link></li>
                <li><Link href={'/Contact'}>Contact</Link></li>
            </ul>
        </>
    )
}
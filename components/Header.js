import Link from 'next/link'
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
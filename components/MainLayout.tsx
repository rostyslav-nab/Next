import Link from "next/link"
import classes from '../styles/mainLayout.module.scss'
import Head from "next/head"

export function MainLayout({children, title='Next | App'}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <nav className={classes.navigation}>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>

            <main>
                {children}
            </main>
        </div>
    )
}
import Link from "next/link"
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <>
            <h1 className={classes.errorTitle}>OOOPS, Error</h1>
            <p><Link href={'/'}><a>Go back</a></Link> to safety</p>
        </>
    )
}
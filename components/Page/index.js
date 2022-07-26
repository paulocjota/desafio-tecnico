import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import styles from './styles.module.css'

export default function Page({title, description, children}){
    return (
        <div className={`${styles.page} ${styles.container} mx-auto`}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header>
                <Header.Logo />
            </Header>
            {children}
            <Footer />
        </div>
    )
}
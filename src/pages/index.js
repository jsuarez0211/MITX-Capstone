import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <div>
                    <p>Welcome to my Blog!</p>
                    <p>
                        Check out my first post{" "}
                        <Link href="/posts/first-post">Here</Link>
                    </p>
                </div>
            </Head>
        </>
    );
}

import React from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';

type IndexProps = {
    query : {
        title: string
    }
}
export default function Make(props: IndexProps) {
    const { title } = props.query;
    return (
        <>
            <Head><title>{title}</title></Head>
            <div>
                타이틀은 {title} 입니다.
            </div>
        </>
    )
}
Make.getInitialProps = async function (context: NextPageContext) {
    const { query } = context;
    return { query }
}
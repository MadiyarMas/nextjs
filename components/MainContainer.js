import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"madiyar, next js, " + keywords}></meta>
                <title>Главная страница</title>
            </Head>

            <div className="navbar">
                <A href={'/'} text={'Главная страница'}/>
                <A href={'/users'} text={'Пользователи'}/>
            </div>

            <div>
                {children}
            </div>

            <style jsx>
                {`
                    .navbar {
                      background: orange;
                      padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
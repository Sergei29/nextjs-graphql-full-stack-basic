import Head from "next/head";
import { useQuery } from "@apollo/client";
import { GET_USERS_LIST } from "../queries/getUsers";
import UsersList from "../components/UsersList/UsersList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data, loading, error } = useQuery(GET_USERS_LIST);

  const renderUserList = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error occured:{error}</p>;
    }

    if (data) {
      return <UsersList arrUsers={data.getUsers} />;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Users GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Users list</h1>
        {renderUserList()}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

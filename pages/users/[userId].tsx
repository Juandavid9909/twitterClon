import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import Head from "next/head";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = () => {
    const router = useRouter();
    const { userId } = router.query;

    const { data: fetchedUser, isLoading } = useUser(userId as string);

    if(isLoading || !fetchedUser) {
        return (
            <div className="flex justify-center items-center h-full">
                <ClipLoader color="lightblue" size={ 80 } />
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{ `${ fetchedUser?.name } (@${ fetchedUser?.username })` }</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <Header showBackArrow label={ fetchedUser?.name } />

            <UserHero userId={ userId as string } />

            <UserBio userId={ userId as string } />
        </>
    );
}

export default UserView;
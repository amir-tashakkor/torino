import Head from "next/head";

import ProfilePage from "@/templates/ProfilePage";
import AuthProvider from "@/provider/AuthProvider";

function Profile() {
  return (
    <>
      <Head>
        <title>تورینو | پروفایل</title>
        <meta name="description" content="Torino is a travel agency" />
      </Head>
      <AuthProvider>
        <ProfilePage />
      </AuthProvider>
    </>
  );
}

export default Profile;

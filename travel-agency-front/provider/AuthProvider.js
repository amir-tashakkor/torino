import { useEffect } from "react";
import { useRouter } from "next/router";

import { useGetUserData } from "@/services/queries";
import Loading from "@/module/Loading";

function AuthProvider({ children }) {
  const router = useRouter();

  const { data, isPending } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data?.data) {
      router.push("/");
    }
  }, [isPending, data, router]);

  if (isPending) {
    return <Loading />;
  }

  return children;
}

export default AuthProvider;

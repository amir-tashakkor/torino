import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(String(searchParams));

  const addQuery = (key, value) => {
    value = String(value);
    params.set(key, value);
    router.replace(`?${params}`);
  };

  const removeQuery = (key) => {
    params.delete(key);
    router.replace(`?${params}`);
  };

  const removeAllQuery = () => {
    router.replace(pathname);
  };

  const getQuery = (key) => {
    return params.get(key);
  };

  return { addQuery, removeQuery, removeAllQuery, getQuery };
};

export default useQuery;

import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";

import api from "@/configs/api";

export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user"];

  return useQuery({ queryFn, queryKey });
};

export const useGetTours = (query) => {
  const endpoint = "/tour?" + QueryString.stringify(query);
  const queryFn = () => api.get(endpoint);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};

export const useGetUserBasket = () => {
  const queryFn = () => api.get("/basket");
  const queryKey = ["user-basket"];

  return useQuery({ queryFn, queryKey });
};

export const useGetUserTours = () => {
  const queryFn = () => api.get("/user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};

export const useGetUserTransactions = () => {
  const queryFn = () => api.get("/user/transactions");
  const queryKey = ["user-transactions"];

  return useQuery({ queryFn, queryKey });
};

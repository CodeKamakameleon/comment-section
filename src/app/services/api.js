import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "comments.json",
      transformResponse: (response) => response.comments,
    }),
    getUser: builder.query({
      query: () => "user.json",
      transformResponse: (response) => response.currentUser,
    }),
  }),
});

export const { useGetCommentsQuery, useGetUserQuery } = api;

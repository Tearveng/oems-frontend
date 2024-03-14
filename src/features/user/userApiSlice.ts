import { apiSlice } from '@/app/api/apiSlice';

export type ILoginBody = {
  userId: string;
  password: string;
}

export type ILoginResponse = {
  data: any;
  responseCode: number;
  responseMessage: string;
  status: string 
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.mutation({
      query: (body) => ({
        url: '/test/test',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<ILoginResponse, ILoginBody>({
      query: (body) => ({
        url: '/common/login',
        method: 'POST',
        body
      })
    })
  }),
});

export const { useTestMutation, useLoginMutation } = userApiSlice;

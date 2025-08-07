import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // when we post something using axios then we send the info through data✅ not body❌
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/user/login",
                method: "POST",
                data: userInfo,
                // body: userInfo,
            })
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
                // body: userInfo,
            })
        }),
    }),
})

export const { useRegisterMutation, useLoginMutation } = authApi;

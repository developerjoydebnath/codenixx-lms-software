"use client";

import { getAuthUser } from "@/app/actions";
import { userLogIn } from "@/redux/features/auth/authSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Children = ({ children }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        (async () => {
            const user = (await getAuthUser()) ?? null;
            dispatch(userLogIn({ user, loading: false }));
        })();
    }, []);

    return <div>{children}</div>;
};

export default Children;

"use server";

import { withOldPasswordResetSchema } from "@/schemas/passwordResetSchema";
import { profileUpdateFormSchema } from "@/schemas/profileUpdateFormSchema";
import { walletBalanceTransSchema } from "@/schemas/walletBalanceTransSchema";
import { createSafeActionClient } from "next-safe-action";
import { cookies } from "next/headers";

const action = createSafeActionClient();

// export const loginAction = action.schema(loginFormSchema).action(async ({ parsedInput: { email, password } }) => {
// try {
//     const resp = await fetch("http://127.0.0.1:8000/api/v1/login", {
//         method: "POST",
//         headers: {
//             accept: "application/json",
//             "content-type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//     });

//     const data = await resp.json();
//     if (data.status === "success") {
//         cookies().set("auth_token", data.token, { secure: true, maxAge: 60 * 60 * 24 });
//     }
//     return data;
// } catch (error) {
//     return { status: "error", message: "Something went wrong!" };
// }
// });

export const login = async (values) => {
    if (values.mobile_number && values.password) {
        if (values.mobile_number === "01700000000" && values.password === "123456") {
            cookies().set("auth_token", "aGVsbG8gdGhpcyBpcyBteSBzZWNyZXQgdG9rZW4=", {
                secure: true,
                maxAge: 60 * 60 * 24,
            });
            cookies().set("user", JSON.stringify({ mobile_number: values.mobile_number, base_role: "admin" }), {
                secure: true,
                maxAge: 60 * 60 * 24,
            });
            return { success: true, user: { mobile_number: values.mobile_number, base_role: "admin" } };
        } else if (values.mobile_number === "01700000001" && values.password === "123456") {
            cookies().set("auth_token", "aGVsbG8gdGhpcyBpcyBteSBzZWNyZXQgdG9rZW4=", {
                secure: true,
                maxAge: 60 * 60 * 24,
            });
            cookies().set("user", JSON.stringify({ mobile_number: values.mobile_number, base_role: "mentor" }), {
                secure: true,
                maxAge: 60 * 60 * 24,
            });
            return { success: true, user: { mobile_number: values.mobile_number, base_role: "mentor" } };
        } else if (values.mobile_number === "01700000002" && values.password === "123456") {
            cookies().set("auth_token", "aGVsbG8gdGhpcyBpcyBteSBzZWNyZXQgdG9rZW4=", {
                secure: true,
                maxAge: 60 * 60 * 24,
            });
            cookies().set("user", JSON.stringify({ mobile_number: values.mobile_number, base_role: "student" }), {
                secure: true,
                maxAge: 60 * 60 * 24,
            });
            return { success: true, user: { mobile_number: values.mobile_number, base_role: "student" } };
        } else {
            return { success: false, message: "Invalid Credentials!" };
        }
    } else return { success: false, message: "All fields are required!" };
};

export const getAuthUser = async () => {
    const user = cookies().get("user")?.value;
    return user ? await JSON.parse(user) : null;
};

export const getAuthSession = async (token) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/session", {
        method: "GET",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    const data = await res.json();
    if (data.status === "success" && data?.user_id) {
        return true;
    } else {
        return false;
    }
};

export const getUserPermission = async (token) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/permission", {
        method: "GET",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    const data = await res.json();
    return data;
};

export const http_get_request = async ({ endpoint }) => {
    const token = cookies().get("auth_token")?.value;

    const res = await fetch(`http://127.0.0.1:8000/api/v1${endpoint}`, {
        method: "GET",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
    });

    const data = await res.json();

    return data;
};

export const http_post_request = async ({ endpoint, body }) => {
    const token = cookies().get("auth_token")?.value;

    const resp = await fetch(`http://127.0.0.1:8000/api/v1${endpoint}`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: body,
    });

    const data = await resp.json();

    return data;
};

export const passwordResetAction = action.schema(withOldPasswordResetSchema).action(async ({ parsedInput }) => {
    return { data: parsedInput, status: "success" };
});

export const profileUpdateAction = action.schema(profileUpdateFormSchema).action(async ({ parsedInput }) => {
    return { data: parsedInput, status: "success" };
});

export const walletBalanceTransferAction = action.schema(walletBalanceTransSchema).action(async ({ parsedInput }) => {
    console.log(parsedInput);
    return { data: parsedInput, status: "success" };
});

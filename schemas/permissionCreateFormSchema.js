import { z } from "zod";

export const permissionCreateFormSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required.",
    }),
    group_name: z.string().min(1, {
        message: "Group name is required.",
    }),
    key_name: z.string().min(1, {
        message: "Key name is required.",
    }),
});

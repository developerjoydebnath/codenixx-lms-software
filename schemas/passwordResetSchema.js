import { z } from "zod";

export const passwordResetSchema = z
    .object({
        new_password: z.string().refine((val) => val.length >= 6),
        confirm_new_password: z.string().refine((val) => val.length >= 6),
    })
    .superRefine((schema, context) => {
        if (schema.new_password !== schema.confirm_new_password) {
            context.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Password does not matched.",
                path: ["confirm_new_password"],
            });
        }
    });

export const withOldPasswordResetSchema = z
    .object({
        new_password: z.string().refine((val) => val.length >= 6),
        confirm_new_password: z.string().refine((val) => val.length >= 6),
        old_password: z.string().refine((val) => val.length >= 6),
    })
    .superRefine((schema, context) => {
        if (schema.new_password !== schema.confirm_new_password) {
            context.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Password does not matched.",
                path: ["confirm_new_password"],
            });
        }
    });

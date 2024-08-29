import { z } from "zod";

export const loginFormSchema = z
    .object({
        mobile_number: z.string().min(1, { message: "Mobile no is required!" }),
        password: z.string().min(1, { message: "Password required!" }),
        ghost: z.string().optional(),
    })
    .superRefine((schema, context) => {
        if (schema.mobile_number.length !== 11) {
            context.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Mobile number must be 11 digits.",
                path: ["mobile_number"],
            });
        } else if (
            schema.mobile_number.length === 11 &&
            !/(^(\+8801|8801|01|008801))[3-9]{1}(\d){8}$/.test(schema.mobile_number)
        ) {
            context.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid mobile number.",
                path: ["mobile_number"],
            });
        }
    });

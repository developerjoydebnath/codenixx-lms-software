import { z } from "zod";

export const agentCreateFormSchema = z
    .object({
        full_name: z.string().min(1, {
            message: "Name is required.",
        }),
        email: z
            .string()
            .min(1, {
                message: "Email is required.",
            })
            .email({ message: "Invalid email address" }),
        mobile_number: z.string().min(1, {
            message: "Mobile number is required.",
        }),
        whatsapp_number: z.string().optional(),
        nid: z.string().min(1, {
            message: "NID no is required.",
        }),
        commission: z
            .string()
            .min(1, {
                message: "Commission rate is required",
            })
            .refine((val) => Number(val) <= 100, {
                message: "Commission cannot be greater than 100",
            })
            .refine((val) => Number(val) > -1, {
                message: "Commission cannot be less than 0",
            }),
        upazila: z.string().min(1, {
            message: "Select a Thana/Upazila.",
        }),
        union: z.string().min(1, {
            message: "Union name is required.",
        }),
        district: z.string().min(1, {
            message: "Select a District.",
        }),
        division: z.string().min(1, {
            message: "Select a Division.",
        }),
        village: z.string().min(1, {
            message: "Select a Division Village.",
        }),
        latitude: z.string().optional(),
        longitude: z.string().optional(),
        house: z.string().min(1, {
            message: "House no is required.",
        }),
        address_direction: z.string().optional(),
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

        if (schema.whatsapp_number.length > 0) {
            if (schema.whatsapp_number.length !== 11) {
                context.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Whatsapp number must be 11 digits.",
                    path: ["whatsapp_number"],
                });
            } else if (
                schema.whatsapp_number.length === 11 &&
                !/(^(\+8801|8801|01|008801))[3-9]{1}(\d){8}$/.test(schema.whatsapp_number)
            ) {
                context.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Invalid whatsapp number.",
                    path: ["whatsapp_number"],
                });
            }
        }
    });

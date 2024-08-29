import { z } from "zod";

export const broadbandUserCreateFormSchema = z
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
        profession: z.string().optional(),
        gender: z.string().min(1, {
            message: "Select a gender.",
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
        package: z.string().min(1, {
            message: "Select a package.",
        }),
        connection_media: z.string().min(1, {
            message: "Select a connection media.",
        }),
        user_type: z.string().min(1, {
            message: "Select a user type.",
        }),
        pop: z.string().min(1, {
            message: "POP name is required.",
        }),
        ins_cost: z.string().min(1, {
            message: "Initial cost is required.",
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

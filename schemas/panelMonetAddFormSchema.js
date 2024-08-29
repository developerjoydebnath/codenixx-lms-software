import { z } from "zod";

export const panelMoneyAddFormSchema = z.object({
    amount: z
        .string()
        .min(1, {
            message: "Amount is required.",
        })
        .refine((val) => val > 0, { message: "Amount value must be positive." }),
    remarks: z.string().optional(),
});

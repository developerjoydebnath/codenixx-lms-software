import { z } from "zod";

export const packageFormSchema = z.object({
    en_title: z.string().min(1, {
        message: "English title is required.",
    }),
    bn_title: z.string().min(1, {
        message: "Bangla title is required.",
    }),
    price: z.string().min(1, {
        message: "Price is required.",
    }),
    validity: z.string().min(1, {
        message: "Validation time is required.",
    }),
    upload_speed: z.string().min(1, {
        message: "Upload is required.",
    }),
    download_speed: z.string().min(1, {
        message: "Download is required.",
    }),
});

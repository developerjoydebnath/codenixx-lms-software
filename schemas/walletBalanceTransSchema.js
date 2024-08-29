import { z } from "zod";

export const walletBalanceTransSchema = z.object({
    balance: z.number(),
});

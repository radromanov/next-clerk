import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email().min(1),
});

export type FormValues = z.infer<typeof formSchema>;
export type FormInputsProps = {
  form: UseFormReturn<FormValues, any, undefined>;
  name: keyof FormValues;
  placeholder?: string;
};

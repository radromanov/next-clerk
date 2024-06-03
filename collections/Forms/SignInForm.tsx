"use client";

import { FormValues, formSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInputs } from "@/components/Inputs";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const SignInForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInputs form={form} name="email" placeholder="Email" />
        <Button type="submit">Sign in</Button>
      </form>
    </Form>
  );
};

export default SignInForm;

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginSchema, LoginSchemaType } from "@/schemas/login"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"

export default function Login() {

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <div className="flex justify-center h-full">

      <Card className="w-[400px] h-fit mt-20 scale-110">
        <CardHeader>
          <CardTitle>Faça login na sua conta.</CardTitle>
          <CardDescription>Insira seu email e senha para fazer login.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <FormField
              control={form.control}
              name="email"
              render={() => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={() => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Entrar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
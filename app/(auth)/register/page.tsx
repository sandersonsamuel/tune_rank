"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerSchema, RegisterSchemaType } from "@/schemas/register"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"

export default function Register() {

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  return (
    <div className="flex justify-center h-full">

      <Card className="w-[400px] h-fit mt-20 scale-110">
        <CardHeader>
          <CardTitle>Crie sua conta.</CardTitle>
          <CardDescription>Insira seu email, nome e senha para criar uma conta.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <FormField
              control={form.control}
              name="username"
              render={() => (
                <FormItem>
                  <FormLabel>Nome de usuário</FormLabel>
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
              name="email"
              render={() => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" />
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
                    <Input type="password" />
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
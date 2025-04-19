'use client'

import { faker } from '@faker-js/faker'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { login } from '@/services/auth'
import { Button } from '@/components/base/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/base/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/base/form'
import { Input } from '@/components/base/input'

export const loginValuesSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' })
})

export default function LoginPage() {
  const form = useForm<z.infer<typeof loginValuesSchema>>({
    resolver: zodResolver(loginValuesSchema),
    defaultValues: {
      username: faker.internet.username(),
      password: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof loginValuesSchema>) => {
    try {
      console.log(values)
      const user = await login(values)
      toast('Login successful', {
        description: `Logged in with ${user.name}.`,
        action: { label: 'OK', onClick: () => toast.dismiss() }
      })
    } catch (error) {
      error instanceof Error &&
        toast.error('Login failed', {
          description: error.message,
          action: { label: 'OK', onClick: () => toast.dismiss() }
        })
    }
  }

  return (
    <main className={'flex flex-1 flex-col items-center justify-center gap-y-4 p-4'}>
      <Form {...form}>
        <Card className={'mx-auto w-full max-w-sm'}>
          <CardHeader>
            <CardTitle>{'Create project'}</CardTitle>
            <CardDescription>{'Deploy your new project in one-click.'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={'grid w-full items-center gap-4'}>
              <FormField
                control={form.control}
                name={'username'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{'Username'}</FormLabel>
                    <FormControl>
                      <Input placeholder={'Username'} {...field} />
                    </FormControl>
                    <FormDescription>{'This is your public display name.'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={'password'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{'Password'}</FormLabel>
                    <FormControl>
                      <Input type={'password'} placeholder={'********'} {...field} />
                    </FormControl>
                    <FormDescription>{'This is your secret password.'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className={'flex justify-between'}>
            <Button variant={'outline'}>{'Cancel'}</Button>
            <Button onClick={form.handleSubmit(onSubmit)}>{'Submit'}</Button>
          </CardFooter>
        </Card>
      </Form>
    </main>
  )
}

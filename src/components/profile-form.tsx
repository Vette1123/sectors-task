import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { formDefaultValues, formSchema, FormValues } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AcceptTerms } from '@/components/accept-terms'
import { SectorsMenu } from '@/components/sectors-selector'

export function ProfileForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  })

  function onSubmit(data: FormValues) {
    console.log('data', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sector</FormLabel>
              <FormControl>
                <SectorsMenu {...field} />
              </FormControl>
              <FormDescription>
                This is the sector that will be displayed on your profile.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agreedToTerms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AcceptTerms
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="terms"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  )
}

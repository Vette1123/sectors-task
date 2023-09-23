import React from 'react'
import { ProfileInfoContext } from '@/context/infos-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LocalStorageKey } from '@/types/form'
import { formDefaultValues, formSchema, FormValues } from '@/lib/constants'
import { nanoid } from '@/lib/utils'
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

interface ProfileFormProps {
  setIsOpen: (value: boolean) => void
  isEditForm?: boolean
  info?: LocalStorageKey
}

export function ProfileForm({ setIsOpen, isEditForm, info }: ProfileFormProps) {
  const { infos, setInfos } = React.useContext(ProfileInfoContext)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: isEditForm ? info : formDefaultValues,
  })

  function onSubmit(data: FormValues) {
    if (isEditForm) {
      setInfos(
        infos.map((profile) =>
          profile.id === info?.id
            ? {
                ...profile,
                ...data,
              }
            : profile
        )
      )
      setIsOpen(false)
      toast.success('Profile updated successfully')
    } else {
      setInfos([
        ...infos,
        {
          ...data,
          id: nanoid(),
        },
      ])
      setIsOpen(false)
      toast.success('Profile added successfully')
    }
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

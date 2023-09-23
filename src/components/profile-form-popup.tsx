import React from 'react'

import { LocalStorageKey } from '@/types/form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { ProfileForm } from '@/components/profile-form'

interface FormPopupProps {
  isEditForm?: boolean
  info?: LocalStorageKey
}

export function FormPopup({ isEditForm = false, info }: FormPopupProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={isEditForm ? 'secondary' : 'outline'}>
          {isEditForm ? 'Edit Profile' : 'Add Profile'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-sm">
        <DialogHeader>
          <DialogTitle>
            {isEditForm ? 'Edit Profile' : 'Add Profile'}
          </DialogTitle>
          <DialogDescription>
            Please fill in the form below to
            {isEditForm ? ' edit ' : ' add '}
            your profile.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <ProfileForm
          setIsOpen={setIsOpen}
          isEditForm={isEditForm}
          info={info}
        />
      </DialogContent>
    </Dialog>
  )
}

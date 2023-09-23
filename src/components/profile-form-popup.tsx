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

export function FormPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-sm">
        <DialogHeader>
          <DialogTitle>Add Profile</DialogTitle>
          <DialogDescription>
            Please fill in the form below to add a new profile.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <ProfileForm />
      </DialogContent>
    </Dialog>
  )
}

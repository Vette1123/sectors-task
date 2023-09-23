import { Separator } from '@/components/ui/separator'
import { FormPopup } from '@/components/profile-form-popup'
import { ProfilesList } from '@/components/profiles-list'

export const HomePage = () => {
  return (
    <section className="container max-w-screen-md pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Profiles List</h2>
        <FormPopup />
      </div>
      <Separator className="mb-6 mt-2" />
      <ProfilesList />
    </section>
  )
}

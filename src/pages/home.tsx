import { Separator } from '@/components/ui/separator'
import { FormPopup } from '@/components/profile-form-popup'

export const HomePage = () => {
  return (
    <section className="container max-w-screen-md pb-8 pt-6 md:py-10">
      <h2 className="text-lg font-medium">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h2>
      <Separator className="mb-6 mt-2" />
      <FormPopup />
    </section>
  )
}

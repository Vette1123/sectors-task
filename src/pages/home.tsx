import { Separator } from '@/components/ui/separator'
import { AccountForm } from '@/components/form'
import { DropdownMenuDemo } from '@/components/sectors-selector'

export const HomePage = () => {
  return (
    <section className="container max-w-screen-md pb-8 pt-6 md:py-10">
      <h2 className="text-lg font-medium">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h2>
      <Separator className="mb-6 mt-2" />
      <AccountForm />
      <DropdownMenuDemo />
    </section>
  )
}

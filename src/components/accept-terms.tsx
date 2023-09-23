import { Checkbox } from '@/components/ui/checkbox'

interface AcceptTermsProps
  extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export const AcceptTerms = ({
  checked,
  onCheckedChange,
  ...props
}: AcceptTermsProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        {...props}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label
        htmlFor="terms"
        className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}

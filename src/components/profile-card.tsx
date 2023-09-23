import { LocalStorageKey } from '@/types/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormPopup } from '@/components/profile-form-popup'

interface ProfileCardProps {
  info: LocalStorageKey
}

export function ProfileCard({ info }: ProfileCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{info.name}</CardTitle>
          <CardDescription>{info.sector?.name}</CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md">
          <FormPopup isEditForm info={info} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            {info.agreedToTerms ? 'Agreed to terms' : 'Did not agree to terms'}
          </div>
          <div>
            {info.sector?.name ? `Sector: ${info.sector.name}` : 'No sector'}
          </div>
          <div className="flex items-center">{info.id}</div>
        </div>
      </CardContent>
    </Card>
  )
}

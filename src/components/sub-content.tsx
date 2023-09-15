import { UserPlus } from 'lucide-react'

import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'

interface SubMenuOptionsProps {
  menuItemTitle: string
  children: React.ReactNode
}

const SubMenuOptions = ({ menuItemTitle, children }: SubMenuOptionsProps) => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <UserPlus className="mr-2 h-4 w-4" />
        <span>{menuItemTitle}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>{children}</DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}

export default SubMenuOptions

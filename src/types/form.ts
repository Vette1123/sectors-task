import { ControllerRenderProps } from 'react-hook-form'

import { FormValues } from '@/lib/constants'

type FormProps<K extends 'sector' | 'agreedToTerms'> = ControllerRenderProps<
  {
    sector: {
      name: string
      value: string
    }
    name: string
    agreedToTerms: boolean
  },
  K
>

type LocalStorageItem = Partial<FormValues & { id: string }>

export type { FormProps, LocalStorageItem as LocalStorageKey }

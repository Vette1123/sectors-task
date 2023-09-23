import { ControllerRenderProps } from 'react-hook-form'

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

export type { FormProps }

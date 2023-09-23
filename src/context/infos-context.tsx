import React, { createContext } from 'react'

import { LocalStorageKey } from '@/types/form'
import { LOCAL_STORAGE_KEY } from '@/lib/constants'
import useLocalStorage from '@/hooks/use-local-storage'

export const ProfileInfoContext = createContext<{
  infos: LocalStorageKey[]
  setInfos: (value: LocalStorageKey[]) => void
}>({
  infos: [],
  setInfos: () => {},
})

export default function ProfileInfoProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [infos, setInfos] = useLocalStorage<LocalStorageKey[]>(
    LOCAL_STORAGE_KEY,
    []
  )

  const value = React.useMemo(() => ({ infos, setInfos }), [infos, setInfos])

  return (
    <ProfileInfoContext.Provider value={value}>
      {children}
    </ProfileInfoContext.Provider>
  )
}

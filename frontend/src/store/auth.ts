import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type User = {
  id: string
  username: string
  email: string
  name: string
  image?: string
}

interface AuthState {
  isHydrated: boolean
  user: null | User
}

export const useAuthStore = create<AuthState>()(
  persist(
    (_set) => ({
      isHydrated: false,
      user: null
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) state.isHydrated = true
      }
    }
  )
)

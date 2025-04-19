import { faker } from '@faker-js/faker'
import { z } from 'zod'

import { useAuthStore, type User } from '@/store/auth'
import type { loginValuesSchema } from '@/app/(guest)/login/page'

export const login = async (values: z.infer<typeof loginValuesSchema>) => {
  const user: User = {
    id: faker.string.uuid(),
    username: values.username,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    image: faker.image.avatar()
  }
  useAuthStore.setState({ user })
  return user
}

export const logout = async () => {
  useAuthStore.setState({ user: null })
}

import { faker } from '@faker-js/faker'

export type Post = {
  id: string
  title: string
  content: string
  imageUrl: string
  createdAt: Date
}

export const POSTS: Post[] = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(20),
  imageUrl: faker.image.url(),
  createdAt: faker.date.past()
}))

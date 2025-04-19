import { POSTS } from '@/constants/mock'
import { delay } from '@/utils/timing'

export const getPosts = async ([_key]: ['posts']) => {
  await delay(1000)
  return POSTS
}

export const getPost = async ([_key, id]: ['post', string]) => {
  await delay(1000)
  return POSTS.find((post) => post.id === id)
}

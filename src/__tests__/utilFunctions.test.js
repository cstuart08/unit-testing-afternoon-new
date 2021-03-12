import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, users, posts } from './__data__/testData'


test('shortenText should not alter a string under 100 characters in length', () => {
  expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText should cut off extra characters after 100 and add three periods', () => {
  const shortened = shortenText(longText)
  expect(shortened).not.toHaveLength(longText.length)
  expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should return the correct number of words in the given posts', () => {
  expect(wordCount(posts)).toBe(233)
})

test('attachUserName should attach a users name to its correlating post', () => {
  const newPosts = attachUserName(users, posts)
  expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName should remove any post with no matching user', () => {
  const newPosts = attachUserName(users, posts)
  const deletedPost = posts[5]
  expect(newPosts).not.toContainEqual(deletedPost)
});
import React from 'react'
import { render, act } from '@testing-library/react'
import Post from '../views/Post'
import axios from 'axios'
import { MemoryRouter } from 'react-router-dom'
import { posts } from './__data__/testData'

it('Renders a Post element', async () => {
  let container
  jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: posts[0] }))
  await act(async () => {
    let postObject = render(
      <MemoryRouter>
        <Post match={{ params: { postId: 1 } }} />
      </MemoryRouter>,
    )
    container = postObject.container;
  })

  expect(container.textContent).toContain(posts[0].text)
})
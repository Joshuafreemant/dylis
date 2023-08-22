import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'


const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const postsFields = `
  _id,
  title,
  content,
  'slug': slug.current,
  'image': image,
`

export async function fetchBooks() {
  return client.fetch(
    groq`*[_type=="books"]{
    _id,
    _createdAt,
    title,
    short_description,
    amazon_link,
    "image":image.asset->url,
    author

  }`
  )
}
export async function fetchBook(slug) {
  return client.fetch(
    groq`*[_type=="books" && _id==$_id][0]{
      _id,
      _createdAt,
      title,
      short_description,
      amazon_link,
      "image":image.asset->url,
      author
  
    }`, { _id: slug }

  )
}
export async function fetchMessages() {
  return client.fetch(
    groq`*[_type=="messages"]{
      _id,
      _createdAt,
      url,
  
    }`
  )
}
export async function fetchEvents() {
  return client.fetch(
    groq`*[_type=="events"]{
      title,
      "image":image.asset->url,
      description,
      reg_link
    
      }`
  )
}


// export async function fetchPosts() {
//   return client.fetch(
//     groq`*[_type=="posts"]{
//       title,
//       content,
//       "image": image.asset->url,
//       comments
//     }`
//   );
// }
// export async function fetchComments() {
//   return client.fetch(
//     groq`*[_type=="comments" && post._ref == ^._id]{
//       name,
//       comment,
//       posts
//     }`
//   );
// }
// export async function fetchComments() {
//   return client.fetch(
//     groq`*[_type == "posts"]{
//       ${postsFields}
      
//       'comments': *[_type == "comments" && posts._ref == ^._id]{
//           _id, 
//           name, 
//           comment, 
//           _createdAt
//       }
//   }`
//   )
// .then((res) => res?.[0])

// }



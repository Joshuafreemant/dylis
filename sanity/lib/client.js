import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'


const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
})



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
export async function fetchGifts() {
  return client.fetch(
    groq`*[_type=="gifts"]{
    _id,
    _createdAt,
    title,
    pdfFile
  }`
  )
}


export async function fetchCommunities() {
  return client.fetch(
    groq`*[_type=="community"]{
    _id,
    _createdAt,
    title,
    

  }`
  )
}


export async function fetchCommunity(slug) {
  return client.fetch(
    groq`*[_type=="community" && _id==$_id][0]{
      _id,
      _createdAt,
      title,
      content,
      community_link,
      "image":image.asset->url
  
    }`, { _id: slug }

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


export async function fetchPosts() {
  return client.fetch(
    groq`*[_type=="posts"]{
      title,
      content,
      _createdAt,
      author,
      comments,
      slug,
      "image": image.asset->url
      
    }`
  );
}



const postFields = `
  _id,
  name,
  title,
  content,
  author,
  
  'slug': slug.current,
  "image": image.asset->url
`;

export async function fetchSingleBlog(slug) {
  return client.fetch(
    groq`*[_type == "posts" && slug.current == $slug] | order(_updatedAt desc) {
      ${postFields},
      'comments': *[_type == "comments" && references(^._id)]{
          _id, 
          name, 
          comment, 
          _createdAt
      }
    }`,
    { slug } // Pass the slug as a parameter
  );
}


export async function createComment(data) {
  const mutations = [{
    createOrReplace: {
      _type: 'comments',
      posts: {
        _type: 'reference',
        _ref: data._id,
      },
      name: data.name,
      comment: data.comment
    }
  }]
  fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ mutations })
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
}
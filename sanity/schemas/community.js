import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'community',
  title: 'Community',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of Community',
      type: 'string',
      validation: (Rule) => Rule.required(),

    }),
    defineField({
      name: 'content',
      title: 'Content Texts',
      type: 'text',
    }),

    
    defineField({
      name: 'community_link',
      title: 'Link to the Community(Facebook or any platform)',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Community(Not Compulsory)',
      type: 'image',
    }),

   
  ]
})

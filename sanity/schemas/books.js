import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'books',
  title: 'Books',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name of Book',
      type: 'string',
      validation: (Rule) => Rule.required(),

    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),

    
    defineField({
      name: 'amazon_link',
      title: 'Link to the Amazon store',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Book',
      type: 'image',
    }),

    defineField({
        name: 'author',
        title: 'Author of the Book',
        type: 'string',
      }),
  ]
})

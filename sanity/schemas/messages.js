import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'messages',
  title: 'Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'Youtube Link',
      type: 'url',
      validation: (Rule) => Rule.required(),

    }),
  
  ]
})

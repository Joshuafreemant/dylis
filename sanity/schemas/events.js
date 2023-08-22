import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name of Event',
      type: 'string',
      validation: (Rule) => Rule.required(),

    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.max(400),
    }),

    
    defineField({
      name: 'reg_link',
      title: 'Event Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Event',
      type: 'image',
    }),

   
  ]
})

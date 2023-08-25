
import { defineField, defineType } from 'sanity'


export default defineType({
    name: 'gifts',
    title: 'Gifts',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title of Gift',
            type: 'string',
            validation: (Rule) => Rule.required(),

        }),
        defineField({
            name: 'pdfFile',
            title: 'PDF File',
            type: 'file',
            options: {
                accept: '.pdf', // Specify accepted file format
            },
        },),


    ]
})

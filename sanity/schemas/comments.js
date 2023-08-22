




import { defineField, defineType } from 'sanity'


export default defineType({
    name: 'comments',
    title: 'Comments',
    type: 'document',
    fields: [

        defineField({
            name: 'name',
            title: 'Name of User',

            type: 'string',
            validation: (Rule) => Rule.max(50),
        }),


        defineField({
            name: 'comment',
            title: 'User Comment',
            type: 'text',
        }),
        defineField({
            name: 'posts',
            type: 'reference',
            to: [
                { type: 'posts' }
            ]
        }),


    ],
    preview: {
        select: {
            name: 'name',
            comment: 'comments',
            post: 'posts.title'
        },
        prepare({ name, comment, post }) {
            return {
                title: `${name} on ${post}`,
                subtitle: comment
            }
        }
    }

})

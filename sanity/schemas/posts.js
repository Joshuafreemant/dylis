import { defineField, defineType } from 'sanity'


export default defineType({
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title of Post',
            type: 'string',
            validation: (Rule) => Rule.required(),

        }),
        defineField(
            {

                name: 'slug',
                title: 'Post Slug',
                type: 'slug',
                options: {
                    source: 'title',
                    maxLength: 96
                }
            }

        ),
        defineField({
            name: 'content',
            title: 'Post Content',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),



        defineField({
            name: 'image',
            title: 'Image of the Post',
            type: 'image',
            options: {
                hotspot: true
            }
        }),

        defineField({
            name: 'author',
            title: 'Author of the Post',
            type: 'string',
        }),

        defineField({
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'comments' }] }],
        }),
    ]
})



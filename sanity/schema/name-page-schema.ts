const namePageSchema = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Page Title",
            type: "string",
            // validation: (Rule) => Rule.required(),
        },
        {
            name: "key",
            title: "Keyword",
            type: "string",
        },
        {
            name: "slug",
            title: "Page URL (slug)",
            type: "slug",
            // options: {
            //     source: "title",
            //     maxLength: 96,
            // },
            // validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Short Description",
            type: "text",
        },
        {
            name: "content",
            title: "Page Content",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        }
    ]
}
export default namePageSchema
const staticPageSchema = {
    name: "staticPages",
    title: "Static pages",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Page Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Page URL (slug)",
            type: "slug",
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
        },
    ]
}
export default staticPageSchema
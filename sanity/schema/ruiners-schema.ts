const ruinersSchema = {
    name: "ruiners",
    title: "المهلكات",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "description",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
        {
            name: "sources",
            title: "Sources",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "soures",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "url", title: "URL", type: "url" },
                    ],
                },
            ],
        },
    ],
};

export default ruinersSchema;

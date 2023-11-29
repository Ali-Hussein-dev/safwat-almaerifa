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
        }
    ]
}

export default ruinersSchema
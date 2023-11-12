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
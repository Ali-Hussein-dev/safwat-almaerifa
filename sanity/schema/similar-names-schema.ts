const SimilarNamesSchema = {
    name: "SimilarNamesSchema",
    title: "أسماء متشابهة",
    type: "document",
    fields: [
        {
            name: "title",
            title: "العنوان",
            type: "string",
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
    ]
}

export default SimilarNamesSchema

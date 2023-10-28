const QuranTopicsSchema = {
    name: "quranTopics",
    title: "Quran Topics",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Topic Title",
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
        {
            name: "order",
            title: "ترتيب",
            type: "number",
        },
        {
            name: "isMakki",
            title: "مكية",
            type: "boolean",
        }
    ]
}

export default QuranTopicsSchema

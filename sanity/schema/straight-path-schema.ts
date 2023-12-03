
const straightPathSchema = {
    name: "straightPath",
    title: "Straight Path",
    type: "document",
    fields: [
        {
            name: "mainTitle",
            title: "Main Title",
            type: "string",

        },
        //------------------------------LEFT
        {
            name: "leftContent",
            title: "Left content",
            require: true,
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
        //------------------------------MIDDLE
        {
            name: "middleContent",
            title: "Middle content",
            require: true,
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
        //------------------------------RIGHT
        {
            name: "rightContent",
            title: "Right content",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
    ]
}

export default straightPathSchema
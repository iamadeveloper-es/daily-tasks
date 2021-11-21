import {randomId} from "./utils"
export const board = [
    {
        column: {
            title: 'col 1',
            id: randomId(),
            tasks: [
                {
                    name: 'task 1',
                    id: randomId(),
                },
                {
                    name: 'task 2',
                    id: randomId(),
                }
            ]
        }
    },
    {
        column: {
            title: 'col 2',
            id: randomId(),
            tasks: [
                {
                    name: 'task 1',
                    id: randomId(),
                },
                {
                    name: 'task 2',
                    id: randomId(),
                }
            ]
        }
    }
]
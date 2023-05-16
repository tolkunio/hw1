import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    const sortByNameUpCallback = (name1: string, name2: string) => {
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        // names must be equal
        return 0;
    }
    const sortByNameDownCallback = (name1: string, name2: string) => {
        if (name1 > name2) {
            return -1;
        }
        if (name1 < name2) {
            return 1;
        }
        // names must be equal
        return 0;
    }
    switch (action.type) {
        case 'sort': { // by name
            let sortedUsers:UserType[]=[];
            if (action.payload == 'up') {
                sortedUsers = state.sort((a,b)=>sortByNameUpCallback(a.name,b.name));
            }
            if (action.payload == 'down') {
                sortedUsers = state.sort((a, b)=>sortByNameDownCallback(a.name,b.name));
            }

            return sortedUsers // need to fix
        }
        case 'check': {
           return state.filter(u=>u.age>action.payload)
        }
        default:
            return state
    }
}

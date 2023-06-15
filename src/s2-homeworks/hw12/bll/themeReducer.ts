
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState,
                             action: ChangeThemeIdType): typeof state=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return{
                ...state,
                themeId:Number(action.id)
            }

        default:
            return state
    }
}

export type ChangeThemeIdType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

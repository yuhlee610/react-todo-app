import * as actionTypes from './actionTypes'

const initialState = {
    list: [],
    loading: false,
    isEditing: false,
    idIsEditing: null,
    error: false,
    process: 'All'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                loading: true,
                error: false
            }

        case actionTypes.FETCH_DATA_SUCCESS:
            let arr = []
            for (const key in action.data) {
                arr.push({
                    ...action.data[key],
                    id: key
                })
            }
            return {
                ...state,
                list: arr,
                loading: false
            }

        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                error: true,
                loading: false
            }

        case actionTypes.ADD_ITEM_START:
            return {
                ...state,
                loading: true,
                error: false
            }

        case actionTypes.ADD_ITEM_SUCCESS:
            let newItem = {
                ...action.item,
                id: action.id
            }
            return {
                ...state,
                loading: false,
                list: state.list.concat(newItem)
            }

        case actionTypes.ADD_ITEM_FAIL:
            return {
                ...state,
                error: true,
                loading: false
            }

        case actionTypes.REMOVE_ITEM_START:
            return {
                ...state,
                loading: true,
                error: false
            }
            
        case actionTypes.REMOVE_ITEM_SUCCESS:
            return {
                ...state,
                list: state.list.filter(ele => ele.id !== action.id),
                loading: false
            }

        case actionTypes.REMOVE_ITEM_FAIL:
            return {
                ...state,
                error: true,
                loading: false
            }

        case actionTypes.SWITCH_TO_EDIT:
            return {
                ...state,
                isEditing: !state.isEditing,
                idIsEditing: !state.isEditing ? action.id : null
            }

        case actionTypes.EDIT_ITEM_START:
            return {
                ...state,
                loading: true,
                error: false
            }

        case actionTypes.EDIT_ITEM_SUCCESS:
            return {
                ...state,
                isEditing: false,
                list: state.list.map(ele => {
                    if(ele.id === action.item.id) {
                        return action.item
                    }
                    return ele
                }),
                loading: false
            }

        case actionTypes.EDIT_ITEM_FAIL:
            return {
                ...state,
                error: true,
                isEditing: false,
                loading: false
            }

        case actionTypes.CHANGE_PROCESS:
            return {
                ...state,
                process: action.value
            }

        default:
            return state
    }
}

export default reducer

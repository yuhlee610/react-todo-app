import * as actionTypes from './actionTypes'
import axios from '../axios'

// ------------ FETCH DATA -------------------

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get('/todo.json')
            .then(data => {
                dispatch(fetchDataSuccess(data.data))
            })
            .catch(error => {
                console.log(error.message)
                dispatch(fetchDataFail(true))
            })
    }
}

const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    }
}

const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    }
}

// ------------ ADD ITEM -------------------

export const addItem = (item) => {
    return dispatch => {
        dispatch(addItemStart())
        axios.post('/todo.json', item)
            .then(response => {
                dispatch(addItemSuccess(response.data.name, item))
            })
            .catch(err => {
                dispatch(addItemFail(true))
            })
    }
}

const addItemStart = () => {
    return {
        type: actionTypes.ADD_ITEM_START
    }
}

const addItemSuccess = (id, item) => {
    return {
        type: actionTypes.ADD_ITEM_SUCCESS,
        id: id,
        item: item
    }
}

const addItemFail = () => {
    return {
        type: actionTypes.ADD_ITEM_FAIL
    }
}

// ------------ REMOVE ITEM -------------------
export const removeItem = id => {
    return dispatch => {
        dispatch(removeItemStart())
        axios.delete(`/todo/${id}.json`)
            .then(response => {
                dispatch(removeItemSuccess(id))
            })
            .catch(err => {
                dispatch(removeItemFail(true))
            })
    }
}

const removeItemStart = () => {
    return {
        type: actionTypes.REMOVE_ITEM_START
    }
}

const removeItemSuccess = id => {
    return {
        type: actionTypes.REMOVE_ITEM_SUCCESS,
        id: id
    }
}

const removeItemFail = () => {
    return {
        type: actionTypes.ADD_ITEM_FAIL
    }
}

// ------------ EDIT ITEM -------------------
export const editItem = (item) => {
    return dispatch => {
        dispatch(editItemStart())
        axios.put(`/todo/${item.id}.json`, {msg: item.msg, state: item.state})
            .then(reponse => {
                console.log('success')
                dispatch(editItemSuccess(item))
            })
            .catch(error => {
                console.log('fail')
                dispatch(editItemFail())
            })
    }
}

const editItemStart = () => {
    return {
        type: actionTypes.EDIT_ITEM_START
    }
}

const editItemSuccess = item => {
    return {
        type: actionTypes.EDIT_ITEM_SUCCESS,
        item: item
    }
}

const editItemFail = () => {
    return {
        type: actionTypes.EDIT_ITEM_FAIL
    }
}

export const switchToEdit = (id) => {
    return {
        type: actionTypes.SWITCH_TO_EDIT,
        id: id
    }
}

// ------------ CHANGE PROCESS -------------------
export const changeProcess = (value) => {
    return {
        type: actionTypes.CHANGE_PROCESS,
        value: value
    }
}
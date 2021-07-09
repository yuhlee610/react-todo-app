import React from 'react'
import { FiCheckCircle, FiTrash2, FiEdit3 } from "react-icons/fi";

import { connect } from 'react-redux';
import * as actions from './store/index'

const List = ({list, process, onRemoveItem, onChangeState, onSwitchToEdit}) => {
    
    const changeStateHandler = (item) => {
        let newItem = {
            ...item,
            state: item.state === 'Complete' ? 'Uncomplete' : 'Complete'
        }

        onChangeState(newItem);
    }


    if(process === 'All') {
        return (
            list.map(item => {
                return (
                    <div className="item__content" key={item.id}>
                        <h3 className={item.state === 'Complete' ? 'fulfill' : null}>{item.msg}</h3>
                        <button className='finish' onClick={() => changeStateHandler(item)}>
                            <FiCheckCircle />
                        </button>
                        <button className='edit' onClick={() => onSwitchToEdit(item.id)}>
                            <FiEdit3 />
                        </button>
                        <button className='remove' onClick={() => onRemoveItem(item.id)}>
                            <FiTrash2 />
                        </button>
                    </div>
                )
            })
        )
    }

    

    if(process === 'Complete') {
        return (
            list.filter(ele => ele.state === 'Complete').map(item => {
                return (
                    <div className="item__content" key={item.id}>
                        <h3 className={item.state === 'Complete' ? 'fulfill' : null}>{item.msg}</h3>
                        <button className='finish' onClick={() => changeStateHandler(item)}>
                            <FiCheckCircle />
                        </button>
                        <button className='edit' onClick={() => onSwitchToEdit(item.id)}>
                            <FiEdit3 />
                        </button>
                        <button className='remove' onClick={() => onRemoveItem(item.id)}>
                            <FiTrash2 />
                        </button>
                    </div>
                )
            })
        )
    }

    if(process === 'Uncomplete') {
        return (
            list.filter(ele => ele.state === 'Uncomplete').map(item => {
                return (
                    <div className="item__content" key={item.id}>
                        <h3 className={item.state === 'Complete' ? 'fulfill' : null}>{item.msg}</h3>
                        <button className='finish' onClick={() => changeStateHandler(item)}>
                            <FiCheckCircle />
                        </button>
                        <button className='edit' onClick={() => onSwitchToEdit(item.id)}>
                            <FiEdit3 />
                        </button>
                        <button className='remove' onClick={() => onRemoveItem(item.id)}>
                            <FiTrash2 />
                        </button>
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        isEditing: state.isEditing,
        process: state.process
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItem : (id) => dispatch(actions.removeItem(id)),
        onChangeState: (item) => dispatch(actions.editItem(item)),
        onSwitchToEdit: (id) => dispatch(actions.switchToEdit(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
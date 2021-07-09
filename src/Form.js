import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/index'

const Form = ({isEditing, idIsEditing, onAddItem, onEditItem, onChangeProcess}) => {
    const inputValue = useRef();
    const processValue = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        let msg = inputValue.current.value;
        if(!isEditing) {
            onAddItem({msg: msg, state: 'Uncomplete'})
        }

        console.log(isEditing, idIsEditing)

        if(isEditing && idIsEditing) {
            
            onEditItem({msg: msg, state: 'Uncomplete', id: idIsEditing})
        }
    }

    const processHandler = () => {
        onChangeProcess(processValue.current.value)
    }
    
    return (
        <div className='form-input'>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Text here' ref={inputValue} />
                <button type='submit'>{isEditing ? 'Edit' : 'Add'}</button>
            </form>

            <select className="process" ref={processValue} onChange={processHandler}>
                <option value="All">All</option>
                <option value="Complete">Complete</option>
                <option value="Uncomplete">Uncomplete</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        idIsEditing: state.idIsEditing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (item) => dispatch(actions.addItem(item)),
        onEditItem: (item) => dispatch(actions.editItem(item)),
        onChangeProcess: (value) => dispatch(actions.changeProcess(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
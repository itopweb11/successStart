import React, {useReducer, useState} from 'react';
import {reducer, init} from './helpers';
import DataFormEdit from "./DataFormEdit";
import DataFormView from "./DataFormView";

const DataForm = ({dataForm, formTitle}) => {
    const [editFormStatus, setEditFormStatus] = useState(false);
    const [state, dispatch] = useReducer(reducer, dataForm, init);

    return (
        <div className='dataForm'>
            <p className='dataForm__title'>{formTitle}</p>
            {
                editFormStatus
                    ? <DataFormEdit state={state} setEditFormStatus={setEditFormStatus} dispatch={dispatch}/>
                    : <DataFormView data={dataForm} setEditFormStatus={setEditFormStatus} />
            }
        </div>
    )

}

export default DataForm;
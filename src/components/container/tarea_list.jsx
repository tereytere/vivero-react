// renderiza a tarea.jsx
// contiene los datos o la logica que queremos pasar a los hijos

import React from 'react';
import { Tarea } from '../../models/tarea.class.js'

const ComponenteTareaList = () => {
    
    defaultTarea = new Tarea(/* las props de la tarea */)
    
    return (
        <div>
            <ComponenteTarea tarea={defaultTarea}></ComponenteTarea>
        </div>
    );
};

export default ComponenteTareaList;

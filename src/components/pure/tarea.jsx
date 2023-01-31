//aqui se pasa la tarea en forma de props

import React from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../models/tarea.class';


const ComponenteTarea = ({tarea}) => {
    return (
        <div>
            //pintamos cosas
            //Propiedad: {tarea.propiedad}
        </div>
    );
};


ComponenteTarea.propTypes = {
    tarea: PropTypes.instanceOf(Tarea)
};


export default ComponenteTarea;

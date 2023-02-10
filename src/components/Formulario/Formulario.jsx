import './Formulario.css'
import React, {useState, useRef} from 'react';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  
  // funciones para el captcha
  // const [captchaValido, cambiarCaptchaValido] = useState(null);
  // const [usuarioValido, cambiarUsuariValido] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if(captcha.current.getValue()){
      console.log('que pasa')
      
    }
  }

	return (
		<>

    <Formik
      initialValues={{
        nombre: '',
        correo: '',
        mensaje: ''
      }}
      validate={(valores) => {
        let errores = {};

        //validación nombre
        if(!valores.nombre){
          errores.nombre = 'Por favor ingresa un nombre'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
          errores.nombre = 'El nombre sólo puede contener letras y espacios'
        }

        //validacion correo
        if(!valores.correo){
          errores.correo = 'Por favor ingresa un correo electrónico'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
          errores.correo = 'El correo sólo puede contener letras y espacios y debe mantener el formato correo@correo.com'
        }

        //validacion mensaje
        if(!valores.mensaje){
          errores.mensaje = 'Por favor escriba un mensaje'
        } else if(!/[a-zA-Z0-9]/.test(valores.mensaje)){
          errores.mensaje = 'El mensaje sólo puede contener letras y espacios'
        }

        // // validacion captcha
        // if(!valores.recaptcha){
        //   (captcha.current.getValue())
        //     // console.log('que pasa')
            
        //   }
        

        return errores;

      }}
       //al darle al boton enviar
      onSubmit={(valores, {resetForm}) =>{

        resetForm();
        // console.log('Formulario enviado');
        cambiarFormularioEnviado(true);
        setTimeout(() => cambiarFormularioEnviado(false), 5000);
      }}
    >
      {( { errors } ) => (
        <div className="h-100 p-5 text-bg-dark rounded-3">
        <h1>Contacta con Nosotras</h1>
        <Form className="mb-3">
          <div>
            <label htmlFor="nombre">Nombre</label>
            <Field
              className="form-control" 
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Pepita Pérez"
            />
            <ErrorMessage name="nombre" component={() => (
              <div className='error'>{errors.nombre}</div>
            )} />
          </div>

          <div>
            <label htmlFor="correo">Correo</label>
            <Field
              type="email" 
              className="form-control" 
              id="correo"
              name="correo"
              placeholder="Correo@corrreo.com"
            />
            <ErrorMessage name="correo" component={() => (
              <div className='error'>{errors.correo}</div>
            )} />
          </div>

          <div>
            <label htmlFor="mensaje" for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
            <Field
            className="form-control" 
            id="mensaje" 
            rows="3" 
            name="mensaje"
            as="textarea"
            placeholder="Hola! Quisiera ponerme en contacto para/por..."
            />
            <ErrorMessage name="mensaje" component={() => (
              <div className='error'>{errors.mensaje}</div>
            )} />
          </div>

          <div className="recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LfiyUAkAAAAAGdcXP7HtQFmb-zXp6HuPNBJXgjb"
                onChange={onChange}
                badge="inline"
                size='compact'
              />
          </div>

          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">Enviar</button>
            {formularioEnviado && <p className='exito'>Mensaje enviado correctamente, gracias!</p>}
          </div>
        </Form>
      </div>
      )}   

      {/* antes de usar funcionalidades de libreria Formik */}

      {/* {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
        <div className="h-100 p-5 text-bg-dark rounded-3">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              className="form-control" 
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Pepita Pérez"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
          </div>

          <div>
            <label htmlFor="correo">Correo</label>
            <input
              type="email" 
              className="form-control" 
              id="correo"
              name="correo"
              placeholder="Correo@corrreo.com"
              value={values.correo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
          </div>

          <div>
            <label htmlFor="mensaje" for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
            <textarea 
            className="form-control" 
            id="mensaje" 
            rows="3" 
            name="mensaje"
            placeholder="Hola! Quisiera ponerme en contacto para/por..."
            value={values.mensaje}
            onChange={handleChange}
            onBlur={handleBlur} >
            </textarea>
            {touched.mensaje && errors.mensaje && <div className='error'>{errors.mensaje}</div>}
          </div>

          <div className="recaptcha"></div>

          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">Enviar</button>
            {formularioEnviado && <p className='exito'>Mensaje enviado correctamente, gracias!</p>}
          </div>
        </form>
      </div>
      )}       */}
    </Formik>
		</>
	);
}

export default Formulario;

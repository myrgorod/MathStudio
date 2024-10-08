import React from "react";
import "./Contact.css";
import images from "../../constants/images";
import { Formik } from "formik";
import emailjs from "emailjs-com";

import Map from "./Map";
import ContactInform from "./ContactInform";

const Contact = () => {
  const formValues = {
    name: "",
    email: "",
    message: "",
  };
  return (
    <section className="contact section-p-top bg-black" id="contact">
      <div className="container">
        <div className="contact-content grid text-center">
          <div className="contact-left">
            <div className="section-t">
              <h3>напиши мені</h3>
              <p className="text">
                Запрошую всіх учнів на цікаве та продуктивне навчання! Якщо у
                вас є питання або бажаєте приєднатися до занять, напишіть мені
                на email. Разом досягнемо нових знань та успіхів у навчанні!
              </p>
            </div>
            <Formik
              initialValues={formValues}
              validate={(values) => {
                const errors = {};

                if (!values.name) {
                  errors.name = "Name is required";
                } else if (!/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]*$/.test(values.name)) {
                  errors.name = "Invalid name format";
                }

                if (!values.email) {
                  errors.email = " Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                emailjs
                  .send(
                    "service_5ee9o34",
                    "template_56tg1dd",
                    values,
                    "sF8JriGNcUsse5kwW"
                  )
                  .then((response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSubmitting(false);
                    resetForm(); // Очищення форми
                  })
                  .catch((error) => {
                    console.log("FAILED...", error);
                    setSubmitting(false);
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="form-control"
                      placeholder="Name"
                    />
                    <span className="form-control-text">
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="form-control"
                      placeholder="Email"
                    />
                    <span className="form-control-text">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      className="form-control"
                      placeholder="Хочу навчатись!"
                    />
                    <span className="form-control-text">
                      {errors.message && touched.message && errors.message}
                    </span>
                  </div>
                  <div className="flex-flex-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn"
                    >
                      напишіть мені
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="contact-right">
            <img src={images.contact_img} alt="" />
          </div>
        </div>
      </div>
      <Map />
      <ContactInform />
    </section>
  );
};

export default Contact;
// import React from 'react';
// import "./Contact.css";
// import images from '../../constants/images';
// import { Formik } from 'formik';
// import ContactInform from './ContactInform';
// import Map from './Map';

// const Contact = () => {
//   return (
//     <section className='contact section-p-top bg-black' id = "contact">
//         <div className='container'>
//             <div className='contact-content grid text-center'>
//                 <div className='contact-left'>
//                     <div className='section-t'>
//                         <h3>Let's Talk?</h3>
//                         <p className='text'>Запрошую всіх учнів на цікаве та продуктивне навчання! Якщо у
//                  вас є питання або бажаєте приєднатися до занять, напишіть мені
//                 на email. Разом досягнемо нових знань та успіхів у навчанні!</p>
//                     </div>

//                     <Formik
//                         initialValues={{ name: "", email: '', address: '' }}
//                         validate={values => {
//                             const errors = {};

//                             if(!values.name){
//                                 errors.name = "Name is required";
//                             } else if(!/^[A-Za-z\s]*$/.test(values.name)){
//                                 errors.name = "Invalid name format";
//                             }

//                             if (!values.email) {
//                                 errors.email = 'Email is required';
//                             } else if (
//                             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                             ) {
//                                 errors.email = 'Invalid email address';
//                             }

//                             if(!values.address){
//                                 errors.address = "Address is required";
//                             }
//                             return errors;
//                         }}
//                         onSubmit={(values, { setSubmitting }) => {
//                             setTimeout(() => {
//                             alert(JSON.stringify(values, null, 2));
//                             setSubmitting(false);
//                             }, 400);
//                         }}
//                         >
//                         {({
//                             values,
//                             errors,
//                             touched,
//                             handleChange,
//                             handleBlur,
//                             handleSubmit,
//                             isSubmitting,
//                             /* and other goodies */
//                         }) => (
//                             <form onSubmit={handleSubmit}>
//                                 <div className='form-elem'>
//                                     <input type = "text" name = "name" onChange = {handleChange} onBlur = {handleBlur} value = {values.name} className = "form-control" />
//                                     <span className='form-control-text'>{errors.name && touched.name && errors.name}</span>
//                                 </div>

//                                 <div className='form-elem'>
//                                     <input type = "email" name = "email" onChange = {handleChange} onBlur = {handleBlur} value = {values.email} className = "form-control" />
//                                     <span className='form-control-text'>{errors.email && touched.email && errors.email}</span>
//                                 </div>

//                                 <div className='form-elem'>
//                                     <input type = "text" name = "address" onChange = {handleChange} onBlur = {handleBlur} value = {values.address} className = "form-control" />
//                                     <span className='form-control-text'>{errors.address && touched.address && errors.address}</span>
//                                 </div>

//                                 <div className='flex flex-start'>
//                                     <button type = "submit" disabled = {isSubmitting} className = "submit-btn">contact us</button>
//                                 </div>
//                             </form>
//                         )}
//                         </Formik>
//                 </div>

//                 <div className='contact-right'>
//                     <img src = {images.form_main_img} alt = "" />
//                 </div>
//             </div>
//         </div>

//         <Map />
//         <ContactInform />
//     </section>
//   )
// }

// export default Contact

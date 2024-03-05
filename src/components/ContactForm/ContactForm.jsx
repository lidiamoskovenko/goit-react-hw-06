import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from './ContactForm.module.css';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(/^\+?[0-9\s-]+$/, "Invalid phone number"),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm () {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={css.contactListContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleAddContact}
      >
        <Form autoComplete="off" className={css.contactForm}>
          <div className={css.fieldContainer}>
            <label htmlFor={nameId} className={css.contactLabel}>Name</label>
            <Field className={css.contactField}
              type="text"
              name="name"
              id={nameId}
            />
             <ErrorMessage
              name="name"
              component="span"
              />
           </div>

          <div className={css.fieldContainer}>
            <label htmlFor={numberId} className={css.contactLabel}>Number</label>
            <Field  className={css.contactField}
              type="number"
              name="number"
              id={numberId}
            />       
            <ErrorMessage
              name="number"
              component="span"
            />
          </div>

          <button type="submit" className={css.formButton}>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
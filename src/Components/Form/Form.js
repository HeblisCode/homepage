import React from "react";
import { useState } from "react/cjs/react.development";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Form({ fields, submit, close, id, title }) {
  const [formFields, setFormFields] = useState(fields);

  const handleChange = (e) => {
    const indexToUpdate = formFields.findIndex(
      (field) => field.name === e.target.name
    );
    setFormFields(
      formFields.map((field, index) => {
        if (index === indexToUpdate) {
          return {
            ...field,
            value: e.target.value,
          };
        }
        return field;
      })
    );
  };

  const submitForm = () => {
    submit(formFields);
  };

  return (
    <Modal handleClose={close} title={title}>
      <div>
        {formFields.map((field) => {
          const { name, placeholder, type, value } = field;
          return (
            <div key={id + name}>
              <label for={id + name}>{name}</label>
              <input
                type={type}
                id={id + name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
              ></input>
            </div>
          );
        })}
        <Button text={"Submit"} handleClick={submitForm}></Button>
        <Button text={"Cancel"} handleClick={close}></Button>
      </div>
    </Modal>
  );
}

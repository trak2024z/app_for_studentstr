import React from "react";
import * as Styles from "./styles";

const Field = ({ type, name, watch, errors, register, required, validate }) => {
  const ref = !validate
    ? { required }
    : {
        required: required,
        validate: (value) => value === validate || "The passwords do not match",
      };
  return (
    <Styles.Wrapper>
      <Styles.Input
        type={type}
        id={name}
        {...register(name, ref)}
        empty={!watch(name)}
        error={errors}
      />
      <Styles.Label htmlFor={name} empty={!watch(name)} error={errors}>
        {name}
      </Styles.Label>
    </Styles.Wrapper>
  );
};

export default Field;

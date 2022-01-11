import React from "react";
import { Sigup,Form, Title, InputContainer, ButtonContainer, ToLogin } from "./styled";
import { CustomInput, Button } from "../index";

const Component = () => {
  return (
    <Sigup>
      <Form>
        <Title>Sign in</Title>
        <InputContainer>
          <CustomInput
            label={'First Name'}
            placeholder={'John'}
          />
        </InputContainer>
        <InputContainer>
          <CustomInput
            label={'Last Name'}
            placeholder={'Green'}
          />
        </InputContainer>
        <InputContainer>
          <CustomInput
            label={'Username'}
            placeholder={'@example'}
          />
        </InputContainer>
        <InputContainer>
          <CustomInput
            label={'Password'}
            placeholder={'******'}
          />
        </InputContainer>
        <ButtonContainer>
          <Button text={"Sign up"}/>
        </ButtonContainer>
      </Form>
      <ToLogin>
        Login
      </ToLogin>
    </Sigup>
  );
};

export { Component as Signup };
export default Component;


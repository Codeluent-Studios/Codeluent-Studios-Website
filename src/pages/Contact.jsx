import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Container>
        <h1 className="text-center">Contact Us</h1>
        <div className="contact-form">
          <Form
            action="https://getform.io/f/685dbd5a-c47f-4aaf-998a-77ab2ae57bb1"
            method="POST"
            enctype="multipart/form-data"
          >
            <label htmlFor="email">
              <input
                className="form-item"
                type="email"
                name="email"
                id=""
                placeholder="Enter Email here..."
                required
              />
            </label>
            <label htmlFor="subject">
              <input
                className="form-item"
                type="text"
                name="subject"
                id=""
                placeholder="Enter Subject here..."
                required
              />
            </label>
            <label htmlFor="message">
              <textarea
                className="form-item"
                name="message"
                id=""
                cols="30"
                rows="18"
                placeholder="Enter Message here..."
                required
              ></textarea>
            </label>
            <label className="btn-group" htmlFor="buttons">
              <button className="btn btn-submit" type="submit">
                Submit
              </button>
              <button className="btn btn-reset" type="reset">
                Reset
              </button>
            </label>
          </Form>
        </div>
      </Container>
    </>
  );
};
export default Contact;

const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
  .text-center {
    margin: 1.2rem 0 1rem 0;
    display: flex;
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    margin: auto;
  }
  input {
    height: 5vh;
  }
  .form-item {
    margin: 1em auto;
    width: 45vw;
    padding: 1rem;
    font-weight: 700;
    border: 0;
  }

  .btn-group {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
  }
  .btn {
    height: 2rem;
  }
  .btn-submit {
    width: 7rem;
    background-color: #00fd00;
    border-radius: 1rem;
    border: none;
    font-weight: 600;
  }
  .btn-reset {
    width: 5rem;
    color: white;
    background-color: #f33b3b;
    border-radius: 1rem;
    border: none;
    font-weight: 700;
  }
`;

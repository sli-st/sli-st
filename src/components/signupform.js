import * as React from "react"
import { useState } from 'react';

import { Link } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'



const SignUpForm = () => {
  const [email, setEmail] = useState('your@email.xoxo');
  const [username, setUsername] = useState('@socialhandle');
  const [result, setResult] = useState('');

  var listFields = {
    "username": username
  }

  const _handleSubmit = async (e) => {
    const chimpResult = await addToMailchimp(email, listFields)
    result.setResult(chimpResult)
  };



  return (
    <>
      <form onSubmit={event => {
        event.preventDefault()
        _handleSubmit(email, { listFields })
      }
      }>
        <div className="form-group d-flex">
          <input
            type="email"
            name="email"
            className="form-control bg-primary border-danger text-danger border-end-0 rounded-0 text-center"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={event => setEmail(event.currentTarget.value)}
          />
          <input
            type="text"
            name="username"
            className="form-control bg-primary border-danger text-danger rounded-0 text-center" id="exampleInputEmail1"
            value={username}
            onChange={event => setUsername(event.currentTarget.value)}
          />
        </div>
        <div className="d-grid gap-2 col-12 mx-auto ">
          <button type="submit" className="btn text-soft btn-outline-danger border-top-0 rounded-0">
            get on the S List
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
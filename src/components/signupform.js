import * as React from "react"
import { useState } from 'react';

import { Link } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'



const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [result, setResult] = useState('');

  var listFields = {
    "username": username
  }

  const _handleSubmit = async (e) => {
    const chimpResult = await addToMailchimp(email, listFields);
    setResult(chimpResult);
    console.log(result);
  };



  return (

    <form onSubmit={event => {
      event.preventDefault()
      _handleSubmit(email, { listFields })
    }
    }>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control bg-black border-primary text-soft border-bottom-0 rounded-0 text-center"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="your@email.xoxo"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <input
          type="text"
          name="username"
          className="form-control bg-black border-primary text-soft rounded-0 text-center" id="exampleInputEmail1"
          placeholder="IG.username"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
      </div>
      <div className="d-grid gap-2 col-12 mx-auto pt-2">
        <button type="submit" className="btn text-primary btn-outline-primary rounded-0">
          Put me on the S list
        </button>
      </div>
      <p>{result.result}</p>
      <p>{result.msg}</p>
    </form>

  );
}

export default SignUpForm;
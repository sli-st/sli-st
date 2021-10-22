import * as React from "react"
import { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"

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
    setResult(chimpResult.msg);
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
          className="form-control bg-dark border-light rounded-0 text-center py-3 my-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="EMAIL"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <input
          type="text"
          name="username"
          className="form-control bg-dark border border-light rounded-0 rounded-0 text-center py-3 my-2" id="exampleInputEmail1"
          placeholder="INSTAGRAM USUARIO | USERNAME"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
      </div>
      <div className="d-grid gap-2 col-12 mx-auto mt-2">
        <button type="submit" className="bg-dark btn btn-outline-primary rounded-0">
          <div className="lead">⇩</div>
          <div className="lead">list</div>
        </button>
      </div>
      <p>{result.result}</p>
      <p>{result.msg}</p>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </form>

  );
}

export default SignUpForm;
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
          className="form-control bg-dark border border-light rounded-0 rounded-0 text-center py-sm-3 my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="EMAIL | CORREO ELECTRÓNICO"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text text-light bg-dark border border-light rounded-0 rounded-0 text-center py-sm-3 my-2" id="basic-addon1">@</span>
          </div>
          <input
            type="text"
            name="username"
            className="form-control bg-dark border border-light rounded-0 rounded-0 text-center py-sm-3 my-2" id="exampleInputEmail1"
            placeholder="IG - USERNAME | USUARIO"
            value={username}
            onChange={event => setUsername(event.currentTarget.value)}
          />
        </div>

      </div>
      <div className="d-grid col-12 mx-auto mt-1">
        <button type="submit" className="bg-dark btn btn-outline-secondary border-2 text-primary rounded-0">
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
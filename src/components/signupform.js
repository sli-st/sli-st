import * as React from "react"
import { useState } from 'react'


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
          className="form-control bg-dark border border-light border-bottom-0 rounded-0 rounded-0 text-center py-sm-3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="EMAIL"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text text-light bg-dark border border-light border-end-0 rounded-0 text-center py-sm-3" id="basic-addon1">@</span>
          </div>
          <input
            type="text"
            name="username"
            className="form-control bg-dark border border-light rounded-0 text-center py-sm-3" id="exampleInputEmail1"
            placeholder="INSTAGRAM USERNAME"
            value={username}
            onChange={event => setUsername(event.currentTarget.value)}
          />
        </div>

      </div>
      <div className="d-grid col-12 mx-auto">
        <button type="submit" className="bg-dark btn btn-outline-secondary border-1 text-primary rounded-0">
          <div className="d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
            </svg>
            <span className="mx-1 lead">{" "}list</span>

          </div>
        </button>
      </div>
      <p>{result.result}</p>
      <p>{result.msg}</p>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </form>

  );
}

export default SignUpForm;
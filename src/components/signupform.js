import * as React from "react"
import { useState } from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [result, setResult] = useState("")

  var listFields = {
    username: username,
  }

  const _handleSubmit = async e => {
    const chimpResult = await addToMailchimp(email, listFields)
    setResult(chimpResult.msg)
    console.log(result)
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        _handleSubmit(email, { listFields })
      }}
      className="xl:px-96 xl:pt-24 pb-56"
    >
      <div className="relative">
        <input
          id="email"
          name="email"
          type="email"
          className="peer h-10 w-full text-black placeholder-transparent focus:outline-none "
          placeholder="john@doe.com"
          aria-describedby="emailHelp"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <label
          htmlFor="email"
          class="absolute left-2 -top-7 text-primary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-primary peer-focus:text-sm"
        >
          Email Address
        </label>
      </div>
      <div class="mt-10 relative">
        <input
          id="username"
          type="text"
          name="username"
          className="peer h-10 w-full text-black placeholder-transparent focus:outline-none "
          placeholder="INSTAGRAM USERNAME"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
        <label
          htmlFor="username"
          class="absolute left-2 -top-7 text-primary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-primary peer-focus:text-sm"
        >
          Instagram Username
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 px-4 py-2 rounded bg-primary hover:bg-primary text-background font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 cursor-pointer"
      >
        SIGN UP
      </button>

      <div dangerouslySetInnerHTML={{ __html: result }} />
    </form>
  )
}

export default SignUpForm

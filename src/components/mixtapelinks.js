import * as React from "react"

const MixtapeLinks = ({ number, date, description, aiff, mp3 }) => {
  return (
    <div className="relative group my-8 not-prose">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt text-xs "></div>
      <div className="relative px-5 px-md-7 py-4 bg-background rounded-lg leading-none mx-0">
        <p className="">
          <span className="text-primary pr-2">{number}.</span>
          <span className="text-secondary group-hover:text-primary transition duration-200">
            {date}
          </span>
        </p>

        <p className="py-7">{description}</p>
        <p className="flex justify-end gap-8">
          <a
            className="p-1.5 border-secondary text-secondary border rounded"
            href={mp3}
          >
            MP3
          </a>
          <a
            className="p-1.5 border-primary text-primary border rounded"
            href={aiff}
          >
            AIFF
          </a>
        </p>
      </div>
    </div>
  )
}

export default MixtapeLinks

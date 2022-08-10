import * as React from "react"

const MixtapeLink = ({ number, date, description, aiff, mp3 }) => {
  return (
    <div className="not-prose group relative my-8">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-primary text-xs opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>
      <div className="px-md-7 relative mx-0 rounded-lg bg-background px-5 py-4 leading-none">
        <p className="text-lg">
          <span className="pr-2 text-primary">{number}.</span>
          <span className="text-primary transition duration-200 group-hover:text-primary">
            {date}
          </span>
        </p>

        <p className="py-7">{description}</p>
        <p className="flex justify-end gap-8">
          <a
            className="rounded border border-primary p-1.5 text-primary"
            href={mp3}
          >
            MP3
          </a>
          <a
            className="rounded border border-primary p-1.5 text-primary"
            href={aiff}
          >
            AIFF
          </a>
        </p>
      </div>
    </div>
  )
}

export default MixtapeLink

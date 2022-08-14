import * as React from "react"

const MixtapeLink = ({ number, date, description, aiff, mp3 }) => {
  return (
    <div className="not-prose group relative my-8">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-primary text-xs opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>
      <div className="px-md-7 relative mx-0  grid grid-cols-12 rounded-lg bg-background px-5 py-4 leading-none">
        <div class="col-span-8">
          {number}. {description}
        </div>
        <div class="col-span-4 flex justify-end gap-8">
          <a className="text-rose-600" href={mp3}>
            MP3
          </a>
          <a className="text-primary" href={aiff}>
            AIFF
          </a>
        </div>
      </div>
    </div>
  )
}

export default MixtapeLink

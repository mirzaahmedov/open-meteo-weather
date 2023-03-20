import { HTMLAttributes } from 'react'

const Loader = (props: HTMLAttributes<HTMLSpanElement>) => (
  <span className="loader" {...props}></span>
)

export default Loader

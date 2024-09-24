import { Link, useRouteError } from "react-router-dom"

function Error() {

  const error = useRouteError()

  return (
    <div>
      <h1>OOps! An error occurred</h1>
      { error && <h2>{error.data}</h2>}

      <Link to='/'><button>Go Home</button></Link>

    </div>
  )
}

export default Error

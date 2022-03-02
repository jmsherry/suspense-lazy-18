import React, { Suspense } from "react";
import ErrorBoundary from "./Containers/ErrorBoundary.jsx";
const Users = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() =>
      resolve(import('./Containers/User.container.jsx')),
      10000)
  })
});

const People = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() =>
      resolve(import('./Containers/User.container.jsx')),
      8000)
  })
});

function App() {
  return (
    <>
      <ErrorBoundary>

        <Suspense fallback={
          <div> <img className="center"
            src="https://c.tenor.com/28DFFVtvNqYAAAAC/loading.gif"
            alt="...Loading"
          />
          </div>
        }>
          <Users />
        </Suspense>


        <Suspense fallback={<div> <img className="center" src="https://c.tenor.com/28DFFVtvNqYAAAAC/loading.gif" alt="...Loading" /></div>}>
          <People />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App

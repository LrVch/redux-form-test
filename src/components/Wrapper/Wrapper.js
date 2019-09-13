import React from 'react'

function Wrapper({ children, title }) {
  return (
    <div className="mb-3 mt-3">
      <div className="border px-2 py-2">
        <div className="alert alert-secondary mt-2" role="alert">
          {title}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Wrapper
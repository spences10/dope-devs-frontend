import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => setIsBrowser(true))

  const handleClose = e => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div>
      <div>
        <div>
          <a href="#" onClick={handleClose}>
            x
          </a>
        </div>
        {title && <div>{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

// https://devrecipes.net/modal-component-with-next-js/

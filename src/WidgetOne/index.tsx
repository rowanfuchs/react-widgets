import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

const widgets = document.querySelectorAll('widget-one')

widgets.forEach((widget) => {
    ReactDOM.createRoot(widget).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
})

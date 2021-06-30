import React, { useState, useEffect } from "react"
import { Router, Route, Redirect } from "@reach/router"

const Edytuj = () => {
  const loadWordpressAdmin = () =>
    (window.location.href = "https://yoga.jakubpiskorz.dev/wp-admin")

  return (
    <button
      className="yoga-button"
      style={{ marginLeft: "40px" }}
      onClick={loadWordpressAdmin}
    >
      Click to login
    </button>
  )
}

export default Edytuj

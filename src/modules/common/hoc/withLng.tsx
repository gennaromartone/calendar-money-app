import React, { useState } from 'react'

interface VisibilityProps {
  isVisible?: boolean
}

/**
 * HOC that adds an `isVisible` prop that stops a component from rendering if
 * `isVisible===false`
 * @param WrappedComponent component to be selectively hidden
 * @returns null if `isVisible` is false
 */
export function withVisibility<P>(WrappedComponent: React.ComponentType<P>) {
  const VisibityControlled = (props: P & { params: { lng: any } }) => {

    return <WrappedComponent {...props} />
  }

  return VisibityControlled
}

/* TO BE DONE --- NO PURPOSE */
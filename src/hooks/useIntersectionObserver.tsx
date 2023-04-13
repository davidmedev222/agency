import { useEffect, useRef, useState } from 'react'

type IntersectionTuple = [React.MutableRefObject<null>, boolean]
type IntersectionHook = (options: IntersectionObserverInit, unobserve: boolean) => IntersectionTuple

const useIntersectionObserver: IntersectionHook = (options, unobserve) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  const callback: IntersectionObserverCallback = (entries) => entries.forEach((entry) => {
    const element = entry.target
    const isVisible = entry.isIntersecting
    setIsIntersecting(isVisible)

    if (isVisible && unobserve) return observer.unobserve(element)
  })

  const observer = new IntersectionObserver(callback, options)

  useEffect(() => {
    const element = ref.current

    if (element != null) {
      observer.observe(element)
      return () => observer.unobserve(element)
    }
  }, [])

  return [ref, isIntersecting]
}

export { useIntersectionObserver }

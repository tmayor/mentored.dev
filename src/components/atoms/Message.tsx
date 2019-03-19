import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.p`
  font-size: 2.2rem;
  white-space: pre-line;
  width: 500px;
  min-height: 100px;
`

const Message = ({ message, isTalking, setTalking }) => {
  const [charCount, setCharCount] = useState(0)
  const [text, setText] = useState('')
  const [timer, setTimer] = useState('')
  let speed = 50

  function typeWriter() {
    if (charCount < message.length) {
      setText(text + message.charAt(charCount))
      setCharCount(charCount + 1)
    } else {
      setTalking(!isTalking)
    }
  }

  // Reset everything if message changes
  useEffect(() => {
    setTalking(!isTalking)
    setText('')
    clearTimeout(timer)
    setCharCount(0)
  }, [message])

  useEffect(() => {
    // setTimeout returns a timer Id, this allows us to clear the timeout
    // if the user clicks next before the message finishes typing out.
    setTimer(
      setTimeout(() => {
        typeWriter()
      }, speed)
    )
  }, [charCount])

  return <Container>{text}</Container>
}

export default Message
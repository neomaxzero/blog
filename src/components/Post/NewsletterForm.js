import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import MailchimpSubscribe from 'react-mailchimp-subscribe'
import mq from '../Utils/mq'

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.primary16};
  padding: 1rem;
  border-radius: 2px;
  border: none;
  flex-grow: 1;
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${mq.tablet} {
    margin-right: 0.8rem;
  }
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 3rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  flex-shrink: 0;
  transition: all 0.3s ease-out;
  color: white;
  cursor: pointer;

  margin-top: 1rem;
  width: 100%;

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${mq.tablet} {
    margin-top: 0;
    width: auto;
  }
`
const NewsForm = styled.form`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  ${mq.tablet} {
    flex-wrap: nowrap;
    width: auto;
  }
`

const Message = styled.p`
  margin-top: 0.8rem;
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.primary};
`

const SectionTitle = styled.div`
  margin-bottom: 1.2rem;
`

const PlaceholderForm = styled.div`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text};
`

const SimpleForm = ({ onSubmitted, email, setEmail, state, setState }) => {
  const sendEmail = e => {
    e.preventDefault()
    if (/^\S+@\S+\.\S+$/.test(email)) {
      return onSubmitted({ EMAIL: email })
    }

    setState('invalid')
  }
  return (
    <>
      <SectionTitle>Join the Newsletter</SectionTitle>
      <NewsForm>
        <label id="lbl-email" style={{ display: 'none' }} for="emailEntry">
          Email address
        </label>

        <Input
          type="text"
          aria-labelledby="lbl-email"
          aria-label="Email Address:"
          placeholder="Enter email address"
          value={email}
          onChange={({ target: { value } }) => {
            setEmail(value)
            setState('')
          }}
          required
        />
        <Button type="submit" onClick={sendEmail}>
          Subscribe
        </Button>
      </NewsForm>
      {state === 'invalid' && <Message error>Insert a valid email</Message>}
    </>
  )
}

const MsgSuccessBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary16};
  border-radius: 2px;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`

const PBlock = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`

const Sign = styled.div`
  text-align: right;
`
const Success = ({ email }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('subscribed', 'true')
    }
  }, [])

  return (
    <MsgSuccessBox>
      <PBlock>
        <strong>{email}</strong> thanks for subscribing!
      </PBlock>
      <PBlock>I’d love to hear what you want to know about. </PBlock>
      <PBlock>
        Leave a comment, you have 100% chances to hear back from me{' '}
      </PBlock>
      <Sign>Maxi</Sign>
    </MsgSuccessBox>
  )
}

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')

  if (typeof window !== 'undefined' && localStorage.getItem('subscribed')) {
    return null
  }

  const url =
    'https://m4x.us3.list-manage.com/subscribe/post?u=2bf66eacf7ab01b4b4930e813&amp;id=5a763ca08e'

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <PlaceholderForm>
          {status !== 'success' && (
            <SimpleForm
              onSubmitted={formData => subscribe(formData)}
              email={email}
              setEmail={setEmail}
              state={state}
              setState={setState}
            />
          )}
          {status === 'sending' && <Message>Sending...</Message>}
          {status === 'error' && (
            <Message error>
              <div dangerouslySetInnerHTML={{ __html: message }} />
            </Message>
          )}
          {status === 'success' && <Success email={email} />}
        </PlaceholderForm>
      )}
    />
  )
}
export default NewsletterForm

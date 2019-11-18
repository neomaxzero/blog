import React, { useState} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const SimpleForm = ({ onSubmitted }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const sendEmail = () => {
    
  }
  return (
    <form>
      <input
        placeholder="name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        required
      />
      <button type="submit" onClick={sendEmail}>Subscribe</button>
    </form>
  )
};

const NewsletterForm = () => {
  const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

  return (
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />    
  )
}
export default NewsletterForm

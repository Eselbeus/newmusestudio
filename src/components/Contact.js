import React from 'react'
import '../App.css';

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    sent: false
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    let name = e.target.name.value
    let email = e.target.email.value
    let phone = e.target.phone.value
    let message = e.target.message.value
    this.setState({sent: !this.state.sent})

    fetch(`https://newmuseapi.herokuapp.com/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message
      })
    }).then(res => res.json())
    .then(res => {console.log(res, "console")})
  }

  render() {
    return (
      <div className="Contact">
        <h1 className="headers">New Muse Studio</h1>
        <h3>Welcome to New Muse Studio</h3>
        <h2 className='headers-smaller'>Touch Base</h2>
        <br/><br/><br/><br/>
        <span className="contact-container">
          <div className="contact-form contact-side">
          { !this.state.sent ?
            <form onSubmit={this.submitHandler}>
              <input className="contact-item" placeholder="Name" name="name" type="text" value={this.state.name} onChange={this.changeHandler}/>
              <input className="contact-item" placeholder="Email" name="email" type="text" value={this.state.email} onChange={this.changeHandler}/>
              <input className="contact-item" placeholder="Phone" name="phone" type="text" value={this.state.phone} onChange={this.changeHandler}/>
              <input className="contact-item" placeholder="Message" name="message" type="text" value={this.state.message} onChange={this.changeHandler}/>
              <input className="submit" type="submit" value="SEND"/>
            </form>
             : <h2>Thank you for your message!</h2>
          }
          </div>

          <div className="contact-side">
            <h4>CONNECT WITH US</h4>
            <p>We love meeting new artists and raising them to new heights in their music career. Reach out to see what we can do for you.
            </p>
            <h4>NEW MUSE STUDIO</h4>
            <h4>HOURS</h4>
            <p>Monday - Friday: 11am - 11pm
            </p>
            <p>Saturday - Sunday: 10am - 6.30pm
            </p>
          </div>
        </span>
      </div>
    )
  }
}

export default Contact;

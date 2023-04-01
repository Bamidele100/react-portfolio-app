import React from "react";

function Contact() {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
      </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}

export default Contact;


// import React from 'react'

// function Contact() {
//   return (
//     <div className="formContainer">
//     <form className='form'>
//       <ul>
//         <li className="half">
//           <input type="text" name="name" placeholder="Name" required/>
//         </li>
//         <li className="half">
//           <input type="email" name="name" placeholder="Name" required/>
//         </li>
//         <li className="half">
//           <input type="text" name="email" placeholder="Email Address:" required/>
//         </li>
//         <li  className="half">
//           <textarea placeholder="Message" name="message" ></textarea>
//         </li>
//         {/* <li className="half">
//         typeof="sumbit" className="flat-button" value="Submit"</li> */}
//         <li className="half">
//         <button type='submit' name='submit'>Submit</button>
//         </li>
       

      
//       </ul>
//     </form>
      
//     </div>
//   )
// }

// export default Contact

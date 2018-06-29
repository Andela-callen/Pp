import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

/**
 * @class Contact
 * @extends {React.Component}
 * @render {render()}
 */
class Contact extends React.Component {
    state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  /**
     *
     * @param {*} event
     * @returns {function} - setState
     */
    onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }

    /**
     *
     * @param {*} event
     * @returns {function} - setState
     */
     onSubmit = async (event) => {
       event.preventDefault();
       const { name, email, subject, message } = this.state;
       await axios.post('/api/form/sendmessage', {
         name,
         email,
         subject,
         message
       }).then((res) => {
         const emailResponse = res.data;
         swal(`${emailResponse.message}`);
       });
     }

  /**
   * Renders component
   * @return {XML} JSX
   */
     render() {
       return (
        <div>
          <section id="contact">
              <div className="section-header">
                  <div>
                      <h2>Contact Me</h2>

                      <p>Please fill the form below. I will contact you as soon as possible.</p>
                  </div>
              </div>
              <div className="container">
                  <div className="form-wrap">
                      <form id="contact-form">
                          <div className="row">
                              <div className="col-12 col-sm-6">
                                  <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    autoComplete='name'
                                    required
                                  />
                                  <input
                                    id="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="E-mail"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    autoComplete='email'
                                    required
                                  />
                                  <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    value={this.state.subject}
                                    onChange={this.onChange}
                                    required
                                  />
                              </div>
                              <div className="col-12 col-sm-6">
                                  <textarea
                                    id="message"
                                    className="form-control"
                                    rows="7"
                                    placeholder="Your Message"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.onChange}
                                    required>
                                  </textarea>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-12">
                                  <button className="btn btn-primary" onClick={this.onSubmit}>SEND MESSAGE</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </section>
        </div>
       );
     }
}

export default Contact;

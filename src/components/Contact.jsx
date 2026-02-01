import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('D_pvMJm-am2vl8C3g'); // Your Public Key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSending(true);

    // EmailJS Configuration
    const serviceId = 'service_nskfvqa';
    const templateId = 'template_g01ruis';
    const publicKey = 'D_pvMJm-am2vl8C3g';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'vkachanta9346@gmail.com',
      message: formData.message,
      reply_to: formData.email,
      date: new Date().toLocaleString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Send email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('✅ Email sent successfully!', response.status, response.text);
        alert(`✅ Thank you ${formData.name}! Your message has been sent successfully. I'll reply to ${formData.email} soon.`);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('❌ Failed to send email:', error);
        let errorMessage = 'Failed to send message. ';
        if (error.text) {
          errorMessage += `Error: ${error.text}`;
        }
        alert(`❌ ${errorMessage}\n\nAlternatively, you can email me directly at vkachanta9346@gmail.com`);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'vkachanta9346@gmail.com',
      link: 'mailto:vkachanta9346@gmail.com'
    },
    {
      icon: 'fab fa-github',
      title: 'Github',
      value: 'github.com/veerakumari810',
      link: 'https://github.com/veerakumari810'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/Veera Kumari Achanta',
      link: 'https://linkedin.com/Veera Kumari Achanta'
    }
  ];

  return (
    <section className="contact dark-theme" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <p className="section-subtitle">Let's Connect</p>
        
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-description">
              <h3>I'm always open to discussing new opportunities, projects, or just having a chat about technology!</h3>
            </div>
            
            <div className="contact-info-cards">
              {contactInfo.map((item, index) => (
                <div className="contact-info-card" key={index}>
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Message</h3>
              
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  disabled={isSending}
                />
              </div>
              
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  disabled={isSending}
                />
              </div>
              
              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows="6"
                  disabled={isSending}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
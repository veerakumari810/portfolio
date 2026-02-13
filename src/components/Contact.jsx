import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      date: new Date().toLocaleString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };

    // Send email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('✅ Email sent successfully!', response.status, response.text);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('❌ Failed to send email:', error);
        alert(`❌ Failed to send message. Please email me directly at vkachanta9346@gmail.com`);
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
      title: 'GitHub',
      value: 'github.com/veerakumari810',
      link: 'https://github.com/veerakumari810',
      color: '#333'
    },
    {
      icon: 'fab fa-linkedin-in',
      title: 'LinkedIn',
      value: 'linkedin.com/in/veera-kumari-achanta',
      link: 'https://linkedin.com/in/veera-kumari-achanta',
      color: '#0077B5'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Andhra Pradesh, India',
      link: '#',
      color: '#FF6B6B'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <p className="section-subtitle">Let's work together and bring your ideas to life</p>
          <div className="underline"></div>
        </div>
        
        <div className="contact-content">
          {/* Left Side - Contact Information */}
          <div className="contact-info-section">
            <div className="contact-intro">
              <h3>Contact Me</h3>
              <p className="intro-text">
                I'm currently looking for new opportunities in AI, Data Science, and Full Stack Development. 
                Whether you have a question, project idea, or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <a 
                  href={item.link} 
                  className="contact-card" 
                  key={index}
                  target={item.link !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon" style={{ backgroundColor: item.color ? `${item.color}15` : 'var(--primary-light)' }}>
                    <i className={item.icon} style={{ color: item.color || 'var(--primary)' }}></i>
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                  <div className="contact-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible</p>
            </div>
            
            {isSubmitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name <span className="required">*</span>
                  </label>
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
                
                <div className="form-group">
                  <label htmlFor="email">
                    Your Email <span className="required">*</span>
                  </label>
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
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Veera, I'd like to discuss..."
                  rows="5"
                  disabled={isSending}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
              
              <p className="form-note">
                <i className="fas fa-info-circle"></i> I typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
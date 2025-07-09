'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary opacity-10 rounded-bl-full"></div>
      
      <div className="mb-8 relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-2">Send Us A Message</h2>
            <div className="w-16 h-1 bg-gradient-secondary rounded-full"></div>
          </div>
        </div>
        <p className="text-dark-gray font-medium leading-relaxed">
          Ready to collaborate or learn more about our services? Send us a message and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Name Field */}
        <div className="group">
          <label htmlFor="name" className="flex items-center space-x-2 text-sm font-bold text-navy mb-3">
            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 border-2 border-gray/30 rounded-xl focus:ring-4 focus:ring-yellow/20 focus:border-yellow transition-all duration-300 outline-none bg-white group-hover:border-yellow/50 text-navy font-medium"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="group">
          <label htmlFor="email" className="flex items-center space-x-2 text-sm font-bold text-navy mb-3">
            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email Address *</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 border-2 border-gray/30 rounded-xl focus:ring-4 focus:ring-yellow/20 focus:border-yellow transition-all duration-300 outline-none bg-white group-hover:border-yellow/50 text-navy font-medium"
            placeholder="Enter your email address"
          />
        </div>

        {/* Subject Field */}
        <div className="group">
          <label htmlFor="subject" className="flex items-center space-x-2 text-sm font-bold text-navy mb-3">
            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>Subject *</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 border-2 border-gray/30 rounded-xl focus:ring-4 focus:ring-yellow/20 focus:border-yellow transition-all duration-300 outline-none bg-white group-hover:border-yellow/50 text-navy font-medium"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="services">Service Request</option>
            <option value="media">Media & Press</option>
            <option value="careers">Career Opportunities</option>
            <option value="investment">Investment Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="group">
          <label htmlFor="message" className="flex items-center space-x-2 text-sm font-bold text-navy mb-3">
            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Message *</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-4 border-2 border-gray/30 rounded-xl focus:ring-4 focus:ring-yellow/20 focus:border-yellow transition-all duration-300 outline-none resize-vertical bg-white group-hover:border-yellow/50 text-navy font-medium"
            placeholder="Tell us about your inquiry or how we can help you..."
          ></textarea>
        </div>

        {/* Enhanced Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </div>

        {/* Enhanced Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl animate-fade-in-up">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Message Sent Successfully!</h4>
                <p className="text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl animate-fade-in-up">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Error Sending Message</h4>
                <p className="text-sm">Sorry, there was an error. Please try again or contact us directly.</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

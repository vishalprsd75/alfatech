import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  Tag,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Building,
  User,
  Mail,
  Phone,
  HelpCircle,
  MapPin,
  Printer,
} from 'lucide-react';
import Layout from '../components/Layout';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { services } from '../data/services';
import './PageStyles.css';
import './QueryForm.css';

const Query = () => {
  const location = useLocation();
  const state = location.state || {};
  const { productName, categoryName, isService } = state;

  // Form fields state (aligned with reference screenshot 3 fields)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    address: '',
    city: '',
    stateName: '',
    country: '',
    email: '',
    phone: '',
    fax: '',
    selectedItem: productName || (categoryName ? `Category: ${categoryName}` : ''),
    subject: productName
      ? `Inquiry regarding ${productName}`
      : categoryName
      ? `Inquiry regarding ${categoryName} solutions`
      : '',
    message: '',
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  // Pre-fill state if navigated with state
  useEffect(() => {
    if (productName || categoryName) {
      setFormData((prev) => ({
        ...prev,
        selectedItem: productName || `Category: ${categoryName}`,
        subject: prev.subject || (productName ? `Inquiry regarding ${productName}` : `Inquiry regarding ${categoryName}`),
      }));
    }
  }, [productName, categoryName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your requirement.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const randomRef = `ALT-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryRef(randomRef);
      setSubmitted(true);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      address: '',
      city: '',
      stateName: '',
      country: '',
      email: '',
      phone: '',
      fax: '',
      selectedItem: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  // Combine items for select dropdown
  const allSelectableItems = [
    { group: 'Categories', items: categories.map((c) => ({ label: `Category: ${c.name}`, value: `Category: ${c.name}` })) },
    { group: 'Products', items: products.map((p) => ({ label: p.name, value: p.name })) },
    { group: 'Services', items: services.map((s) => ({ label: s.name, value: s.name })) },
  ];

  return (
    <Layout>
      <div className="page">
        <div className="page__container container">
          {/* Header */}
          <div className="page__header">
            <span className="page__label">Get in Touch</span>
            <h1 className="page__title">Send a Query</h1>
            <p className="page__description">
              Have a question about our products, networking racks, or structured cabling?
              Fill out the inquiry form below and our team will get back to you.
            </p>
          </div>

          {/* Preselected Product/Service Banner */}
          {(productName || categoryName) && !submitted && (
            <div className="page__preselected-banner">
              <Tag size={18} />
              <span>
                Preselected Requirement:{' '}
                <strong>
                  {productName || categoryName}
                  {categoryName && productName ? ` (${categoryName})` : ''}
                </strong>
                {isService ? ' [Service]' : ''}
              </span>
            </div>
          )}

          {/* Info Cards */}
          <div className="page__highlights page__highlights--3col">
            <div className="highlight-card highlight-card--compact">
              <MessageSquare size={24} className="highlight-card__icon" />
              <h3 className="highlight-card__title">Product Inquiries</h3>
              <p className="highlight-card__text">
                Ask about comRACK sizes, PALCOM cables, Antec chassis, and CCTV pricing.
              </p>
            </div>

            <div className="highlight-card highlight-card--compact">
              <Clock size={24} className="highlight-card__icon" />
              <h3 className="highlight-card__title">Fast Response</h3>
              <p className="highlight-card__text">
                Our sales team responds to all queries within 24 business hours.
              </p>
            </div>

            <div className="highlight-card highlight-card--compact">
              <CheckCircle size={24} className="highlight-card__icon" />
              <h3 className="highlight-card__title">Expert Guidance</h3>
              <p className="highlight-card__text">
                Get technical advice on structured cabling layout and server rack planning.
              </p>
            </div>
          </div>

          {/* Form / Confirmation Box */}
          <div className="query-form-wrapper">
            {submitted ? (
              <div className="query-success-card">
                <div className="query-success-card__icon">
                  <CheckCircle2 size={56} />
                </div>
                <h2 className="query-success-card__title">Query Submitted Successfully!</h2>
                <p className="query-success-card__message">
                  Thank you, <strong>{formData.fullName}</strong>. We have received your requirement regarding{' '}
                  <strong>{formData.selectedItem || formData.subject || 'AlfaTech Products/Services'}</strong>.
                </p>
                <div className="query-success-card__details">
                  <div className="query-success-card__row">
                    <span>Reference No:</span>
                    <strong>{inquiryRef}</strong>
                  </div>
                  <div className="query-success-card__row">
                    <span>e-Mail:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="query-success-card__row">
                    <span>Phone:</span>
                    <span>{formData.phone}</span>
                  </div>
                  {formData.city && (
                    <div className="query-success-card__row">
                      <span>Location:</span>
                      <span>{formData.city}{formData.stateName ? `, ${formData.stateName}` : ''}</span>
                    </div>
                  )}
                </div>
                <p className="query-success-card__note">
                  Your requirement has been recorded for sample review. An AlfaTech executive will contact you.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="query-success-card__btn"
                >
                  <RefreshCw size={16} />
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form className="query-form" onSubmit={handleSubmit} noValidate>
                <div className="query-form__header">
                  <h2>Requirement Inquiry Form</h2>
                  <p>Please enter your contact details and project requirements below.</p>
                </div>

                <div className="query-form__grid">
                  {/* Name */}
                  <div className={`query-form__field ${errors.fullName ? 'query-form__field--error' : ''}`}>
                    <label htmlFor="fullName">
                      <User size={14} /> Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                    />
                    {errors.fullName && (
                      <span className="query-form__error-text">
                        <AlertCircle size={12} /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="query-form__field">
                    <label htmlFor="companyName">
                      <Building size={14} /> Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Alfa IT Systems"
                    />
                  </div>

                  {/* Address */}
                  <div className="query-form__field query-form__field--full">
                    <label htmlFor="address">
                      <MapPin size={14} /> Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address or office location..."
                    />
                  </div>

                  {/* City */}
                  <div className="query-form__field">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Kolkata"
                    />
                  </div>

                  {/* State */}
                  <div className="query-form__field">
                    <label htmlFor="stateName">State</label>
                    <input
                      type="text"
                      id="stateName"
                      name="stateName"
                      value={formData.stateName}
                      onChange={handleChange}
                      placeholder="e.g. West Bengal"
                    />
                  </div>

                  {/* Country */}
                  <div className="query-form__field">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. India"
                    />
                  </div>

                  {/* Phone */}
                  <div className={`query-form__field ${errors.phone ? 'query-form__field--error' : ''}`}>
                    <label htmlFor="phone">
                      <Phone size={14} /> Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91-98308-85322"
                    />
                    {errors.phone && (
                      <span className="query-form__error-text">
                        <AlertCircle size={12} /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Fax */}
                  <div className="query-form__field">
                    <label htmlFor="fax">
                      <Printer size={14} /> Fax
                    </label>
                    <input
                      type="text"
                      id="fax"
                      name="fax"
                      value={formData.fax}
                      onChange={handleChange}
                      placeholder="Fax number (if applicable)"
                    />
                  </div>

                  {/* e-Mail */}
                  <div className={`query-form__field ${errors.email ? 'query-form__field--error' : ''}`}>
                    <label htmlFor="email">
                      <Mail size={14} /> e-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alfatech1@gmail.com"
                    />
                    {errors.email && (
                      <span className="query-form__error-text">
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Product / Service Select */}
                  <div className="query-form__field query-form__field--full">
                    <label htmlFor="selectedItem">
                      <HelpCircle size={14} /> Select Product / Service (Optional)
                    </label>
                    <select
                      id="selectedItem"
                      name="selectedItem"
                      value={formData.selectedItem}
                      onChange={handleChange}
                    >
                      <option value="">-- Select a Category, Product, or Service --</option>
                      {allSelectableItems.map((group) => (
                        <optgroup key={group.group} label={group.group}>
                          {group.items.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Details about requirement */}
                  <div className={`query-form__field query-form__field--full ${errors.message ? 'query-form__field--error' : ''}`}>
                    <label htmlFor="message">Details about your requirement *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify rack dimensions, quantity, cable lengths, CCTV camera count, or technical requirements..."
                    />
                    {errors.message && (
                      <span className="query-form__error-text">
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="query-form__actions">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="query-form__reset-btn"
                  >
                    Reset
                  </button>
                  <button type="submit" className="query-form__submit-btn">
                    <Send size={18} />
                    Submit Requirement
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Query;

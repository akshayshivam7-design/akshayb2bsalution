import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  RotateCw, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  ShieldCheck, 
  Sparkles,
  Search,
  X
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  INDIAN_STATES_AND_UTS, 
  BUSINESS_TYPES, 
  BUSINESS_ACTIVITIES, 
  ALL_SERVICES_LIST 
} from '../data/servicesData';

export const ContactAndMultiStepLeadForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    state: "Uttar Pradesh",
    businessType: "Private Limited Company (Pvt Ltd)",
    businessActivity: "Services",
    selectedServices: ["Private Limited Company", "GST Registration"],
    fullName: "",
    phone: "",
    email: "",
    panNumber: "",
    captchaInput: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [captchaCode, setCaptchaCode] = useState<string>("7X9K2");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [serviceSearch, setServiceSearch] = useState<string>("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleServiceToggle = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceName);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== serviceName),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, serviceName],
        };
      }
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.state) newErrors.state = "Please select your state or union territory";
    }

    if (step === 2) {
      if (!formData.businessType) newErrors.businessType = "Please select a business type";
      if (!formData.businessActivity) newErrors.businessActivity = "Please select a business activity";
    }

    if (step === 3) {
      if (formData.selectedServices.length === 0) {
        newErrors.selectedServices = "Please select at least 1 service required";
      }
    }

    if (step === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }
      if (!formData.phone.trim() || !/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = "Valid 10-digit mobile number is required";
      }
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Valid email address is required";
      }
      if (formData.panNumber.trim() && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber.toUpperCase())) {
        newErrors.panNumber = "Invalid PAN format (e.g. ABCDE1234F)";
      }
      if (formData.captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
        newErrors.captchaInput = "Incorrect captcha code. Please try again.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      state: "Uttar Pradesh",
      businessType: "Private Limited Company (Pvt Ltd)",
      businessActivity: "Services",
      selectedServices: ["Private Limited Company", "GST Registration"],
      fullName: "",
      phone: "",
      email: "",
      panNumber: "",
      captchaInput: "",
    });
    generateCaptcha();
  };

  const filteredServicesList = ALL_SERVICES_LIST.filter(
    (s) =>
      serviceSearch === "" ||
      s.name.toLowerCase().includes(serviceSearch.toLowerCase()) ||
      s.category.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  return (
    <section id="contact-and-lead-form-section" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Info Blocks */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                GET IN TOUCH
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight mt-2">
                Connect With Our Compliance Bureau
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Have specific compliance questions or need an on-site CA audit? Visit our registered office or talk directly to our desk.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div id="contact-email-card" className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 hover:border-[#0B3D91] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0B3D91] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs font-bold text-slate-800 hover:text-[#0B3D91] transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <span className="text-[9px] text-slate-400">Response within 2 hours</span>
                </div>
              </div>

              {/* Call Us */}
              <div id="contact-phone-card" className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 hover:border-[#0B3D91] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Call Us
                  </h4>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-bold text-slate-800 hover:text-[#0B3D91] transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                  <span className="text-[9px] text-slate-400">Toll-free advisory support</span>
                </div>
              </div>

              {/* Registered Address */}
              <div id="contact-address-card" className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 hover:border-[#0B3D91] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Registered Address
                  </h4>
                  <p className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                    {COMPANY_INFO.address}
                  </p>
                  <span className="text-[9px] text-slate-400">Kanpur Nagar, Uttar Pradesh</span>
                </div>
              </div>

              {/* Working Hours */}
              <div id="contact-hours-card" className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 hover:border-[#0B3D91] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Working Hours
                  </h4>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </p>
                  <span className="text-[9px] text-slate-400">Sunday closed for offline visits (Online AI active 24x7)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Multi-Step Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-md">
              
              {/* Form Title & Step Progress Indicator */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#0B3D91] block">
                    FAST ONBOARDING WIZARD
                  </span>
                  <h3 className="text-base font-black text-slate-900">
                    Get Expert Consultation
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-white bg-[#0B3D91] px-2.5 py-1 rounded-md">
                    Step {currentStep}/4
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#F5A623] h-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>

              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 uppercase">
                    Consultation Request Confirmed!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Our senior compliance officer for <strong>{formData.state}</strong> has received your request for <strong>{formData.selectedServices.join(", ")}</strong>. We will call you on <strong>{formData.phone}</strong> within 15 minutes.
                  </p>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg max-w-sm mx-auto text-left text-[11px] text-slate-700 space-y-1">
                    <p><strong>Tracking Ticket:</strong> #AB2B-{Math.floor(100000 + Math.random() * 900000)}</p>
                    <p><strong>Assigned Desk:</strong> Corporate & Legal Advisory Wing</p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="bg-[#0B3D91] text-white text-xs font-black px-5 py-2.5 rounded-lg shadow-sm hover:bg-[#07265D] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Active Form Steps */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* STEP 1: Select State (all 36 states/UTs) */}
                  {currentStep === 1 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <label className="text-xs font-black uppercase text-slate-700 block">
                        Step 1: Select State / Union Territory of Business
                      </label>
                      <p className="text-[11px] text-slate-500">
                        Select where your registered office or manufacturing unit is situated:
                      </p>
                      <select
                        id="lead-step1-state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0B3D91] shadow-xs"
                      >
                        {INDIAN_STATES_AND_UTS.map((st, idx) => (
                          <option key={idx} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="text-[10px] text-red-600 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.state}
                        </p>
                      )}
                      <div className="p-3 bg-blue-50/60 rounded-lg text-[10px] text-slate-600 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                        <span>Stamp duty calculations and ROC jurisdictions will automatically adjust for {formData.state}.</span>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Business Type & Activity */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div>
                        <label className="text-xs font-black uppercase text-slate-700 block mb-1">
                          Select Proposed Business Structure
                        </label>
                        <select
                          id="lead-step2-business-type"
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0B3D91]"
                        >
                          {BUSINESS_TYPES.map((bt, idx) => (
                            <option key={idx} value={bt}>
                              {bt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-black uppercase text-slate-700 block mb-1">
                          Select Primary Business Activity
                        </label>
                        <select
                          id="lead-step2-business-activity"
                          value={formData.businessActivity}
                          onChange={(e) => setFormData({ ...formData, businessActivity: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0B3D91]"
                        >
                          {BUSINESS_ACTIVITIES.map((ba, idx) => (
                            <option key={idx} value={ba}>
                              {ba}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Multi-Select Services Required */}
                  {currentStep === 3 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div>
                        <label className="text-xs font-black uppercase text-slate-700 block">
                          Step 3: Select Required Services (Multi-Select)
                        </label>
                        <p className="text-[11px] text-slate-500">
                          Select one or more services from our 80+ regulatory catalogue:
                        </p>
                      </div>

                      {/* Filter in multi-select */}
                      <div className="relative">
                        <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Search service to add..."
                          value={serviceSearch}
                          onChange={(e) => setServiceSearch(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none"
                        />
                      </div>

                      {/* Selected Chips */}
                      <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto custom-scrollbar p-1 bg-white border border-slate-200 rounded-lg">
                        {formData.selectedServices.map((svc) => (
                          <span
                            key={svc}
                            className="bg-[#0B3D91] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                          >
                            <span>{svc}</span>
                            <button
                              type="button"
                              onClick={() => handleServiceToggle(svc)}
                              className="hover:text-[#F5A623]"
                            >
                              <X className="w-2.5 h-2.5" />
                            </button>
                          </span>
                        ))}
                      </div>

                      {/* Services Picker List */}
                      <div className="max-h-48 overflow-y-auto custom-scrollbar space-y-1 bg-white border border-slate-200 rounded-lg p-2">
                        {filteredServicesList.map((svc) => {
                          const isChecked = formData.selectedServices.includes(svc.name);
                          return (
                            <label
                              key={svc.id}
                              className={`flex items-center justify-between p-1.5 rounded text-xs cursor-pointer transition-colors ${
                                isChecked ? 'bg-blue-50 text-[#0B3D91] font-bold' : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span className="truncate pr-2">{svc.name}</span>
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleServiceToggle(svc.name)}
                                className="rounded text-[#0B3D91] focus:ring-0 cursor-pointer"
                              />
                            </label>
                          );
                        })}
                      </div>
                      {errors.selectedServices && (
                        <p className="text-[10px] text-red-600 font-bold">
                          {errors.selectedServices}
                        </p>
                      )}
                    </div>
                  )}

                  {/* STEP 4: Contact details & Captcha */}
                  {currentStep === 4 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <label className="text-xs font-black uppercase text-slate-700 block">
                        Step 4: Contact Details & Verification
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                            Full Name *
                          </label>
                          <input
                            id="lead-fullname"
                            type="text"
                            placeholder="e.g. Akshay Kumar"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:border-[#0B3D91]"
                          />
                          {errors.fullName && <p className="text-[9px] text-red-600 font-bold">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                            Mobile Number *
                          </label>
                          <input
                            id="lead-phone"
                            type="tel"
                            placeholder="e.g. +91 97180 04839"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:border-[#0B3D91]"
                          />
                          {errors.phone && <p className="text-[9px] text-red-600 font-bold">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                            Email Address *
                          </label>
                          <input
                            id="lead-email"
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:border-[#0B3D91]"
                          />
                          {errors.email && <p className="text-[9px] text-red-600 font-bold">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                            PAN Number (Optional)
                          </label>
                          <input
                            id="lead-pan"
                            type="text"
                            placeholder="e.g. ABCDE1234F"
                            value={formData.panNumber}
                            onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                            className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:border-[#0B3D91] uppercase font-mono"
                          />
                          {errors.panNumber && <p className="text-[9px] text-red-600 font-bold">{errors.panNumber}</p>}
                        </div>
                      </div>

                      {/* Captcha Block */}
                      <div className="p-3 bg-white border border-slate-300 rounded-lg space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 block">
                          Security Verification *
                        </label>
                        <div className="flex items-center gap-3">
                          {/* Captcha Image Mock Canvas */}
                          <div className="bg-slate-900 text-[#F5A623] px-3 py-1.5 rounded font-mono font-black tracking-widest text-sm select-none border border-slate-700 shadow-inner flex items-center gap-2">
                            <span>{captchaCode}</span>
                          </div>
                          <button
                            type="button"
                            onClick={generateCaptcha}
                            className="p-1.5 text-slate-500 hover:text-[#0B3D91] transition-colors"
                            title="Reload Captcha"
                          >
                            <RotateCw className="w-4 h-4" />
                          </button>
                          <input
                            id="lead-captcha-input"
                            type="text"
                            placeholder="Enter Code"
                            value={formData.captchaInput}
                            onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                            className="flex-1 bg-slate-50 border border-slate-300 rounded p-1.5 text-xs text-slate-800 focus:outline-none uppercase font-mono font-bold"
                          />
                        </div>
                        {errors.captchaInput && <p className="text-[9px] text-red-600 font-bold">{errors.captchaInput}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        id="lead-step-back-btn"
                        onClick={handleBack}
                        className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        id="lead-step-next-btn"
                        onClick={handleNext}
                        className="px-5 py-2.5 bg-[#0B3D91] hover:bg-[#07265D] text-white text-xs font-black rounded-lg flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        id="lead-step-submit-btn"
                        className="px-6 py-2.5 bg-[#F5A623] hover:bg-[#d98c12] text-blue-950 text-xs font-black rounded-lg flex items-center gap-1.5 shadow-md transition-colors cursor-pointer uppercase"
                      >
                        <Send className="w-3.5 h-3.5 text-blue-950" />
                        <span>Submit Consultation Request</span>
                      </button>
                    )}
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

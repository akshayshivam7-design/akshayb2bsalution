import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles, X, Send, Bot, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface FloatingElementsProps {
  onOpenConsultation: () => void;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ onOpenConsultation }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiChatMessages, setAiChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: 'Namaste! I am the Akshay B2B Solutions AI Compliance Assistant. How can I help you today? (e.g. "Documents for Pvt Ltd", "FSSAI eligibility", or "GST registration timeline")'
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAiSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    const userText = aiQuery.trim();
    const newChat = [...aiChatMessages, { sender: 'user' as const, text: userText }];
    setAiChatMessages(newChat);
    setAiQuery('');

    // Instant intelligent simulated compliance response
    setTimeout(() => {
      let botReply = "Thank you for reaching out! Our team of CA/CS professionals can guide you through this filing step-by-step. Would you like to schedule a free 10-minute consultation call?";
      const lower = userText.toLowerCase();

      if (lower.includes('pvt ltd') || lower.includes('private limited') || lower.includes('company')) {
        botReply = "For Private Limited Company registration: You need PAN & Aadhaar of minimum 2 directors, latest bank statement, electricity bill of office & property NOC. The process takes 5-7 business days with zero MCA government fee up to ₹15 Lakhs capital!";
      } else if (lower.includes('gst')) {
        botReply = "GST Registration requires Business PAN, Aadhaar of signatories, Office Electricity bill with rent deed/NOC, and a cancelled cheque. It takes 3-5 days for approval on the GST portal.";
      } else if (lower.includes('fssai') || lower.includes('food')) {
        botReply = "FSSAI registration depends on annual turnover: Basic registration (up to ₹12L turnover), State License (₹12L - ₹20Cr), Central License (>₹20Cr or export/import). Approval turnaround is 3-7 days.";
      } else if (lower.includes('iec') || lower.includes('import') || lower.includes('export')) {
        botReply = "IEC (Import Export Code) is a 10-digit code issued by DGFT with lifetime validity. We process IEC registration in 24-48 hours along with bank AD code registration.";
      } else if (lower.includes('trademark') || lower.includes('brand') || lower.includes('tm')) {
        botReply = "Trademark filing gives you the right to use ™ in 24 hours! We perform a 45-class AI conflict search before filing to avoid objections. Startups and MSMEs get a 50% government fee waiver.";
      }

      setAiChatMessages([...newChat, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div id="floating-action-widgets" className="fixed bottom-4 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2.5 max-w-[calc(100vw-1rem)]">
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0B3D91] hover:bg-[#07265D] text-white shadow-lg flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating AI Compliance Assistant Toggle */}
      <button
        id="floating-ai-assistant-btn"
        onClick={() => setIsAiAssistantOpen(!isAiAssistantOpen)}
        className="px-3.5 py-2.5 rounded-full bg-gradient-to-r from-blue-700 to-[#0B3D91] text-white shadow-xl flex items-center gap-2 border border-blue-400/40 hover:scale-105 transition-all cursor-pointer"
      >
        <Bot className="w-4 h-4 text-[#F5A623] animate-pulse" />
        <span className="text-xs font-black uppercase tracking-tight">AI Compliance Bot</span>
      </button>

      {/* Floating Action Button: WhatsApp */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}?text=Hello%20Akshay%20B2B%20Solutions,%20I%20need%20assistance%20with%20business%20registration%20and%20compliance.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 97180 04839)"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

      {/* Floating Action Button: Call Now */}
      <a
        id="floating-call-now-btn"
        href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
        className="w-12 h-12 rounded-full bg-[#0B3D91] hover:bg-[#07265D] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer border-2 border-[#F5A623]"
        aria-label="Direct Call Us"
        title="Call Hotline: +91 97180 04839"
      >
        <Phone className="w-5 h-5 text-[#F5A623]" />
      </a>

      {/* AI Assistant Chat Drawer Dialog */}
      {isAiAssistantOpen && (
        <div 
          id="ai-assistant-popup"
          className="fixed bottom-20 right-3 sm:right-5 w-[calc(100vw-1.5rem)] sm:w-96 max-w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-50 animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-[#0B3D91] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#F5A623]" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-tight">AI Compliance Desk</h4>
                <span className="text-[9px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active 24x7 • MCA & GST Verified
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsAiAssistantOpen(false)}
              className="p-1 rounded hover:bg-white/10 text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-3.5 h-64 overflow-y-auto custom-scrollbar space-y-2.5 bg-slate-50 text-xs">
            {aiChatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-2.5 text-[11px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0B3D91] text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-2xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Prompt / Input */}
          <form onSubmit={handleAiSend} className="p-2 bg-white border-t border-slate-200 flex items-center gap-1.5">
            <input
              type="text"
              placeholder="Ask any compliance question..."
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0B3D91]"
            />
            <button
              type="submit"
              className="bg-[#0B3D91] hover:bg-[#07265D] text-white p-2 rounded-lg transition-colors shrink-0 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#F5A623]" />
            </button>
          </form>

          {/* Quick CTA inside bot */}
          <div className="bg-slate-100 p-2 text-center border-t border-slate-200">
            <button
              onClick={() => {
                setIsAiAssistantOpen(false);
                onOpenConsultation();
              }}
              className="text-[10px] font-black text-[#0B3D91] hover:underline"
            >
              Prefer human call? Book Free CA Consultation →
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

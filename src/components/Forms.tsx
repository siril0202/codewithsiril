import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz30B5exDF-Im9htD5A4dY1QIRh32gPodNTnpvfcCHOdYL8SeMJJ4nAMKnHDB58QxF0/exec';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export async function submitToGoogleSheet(formId: string, data: Record<string, string>): Promise<void> {
  const payload = { formId, ...data, timestamp: new Date().toISOString() };
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' }, // text/plain avoids CORS preflight
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Server error: ${response.status}`);
  const result = await response.json();
  if (result.status !== 'success') throw new Error(result.message || 'Submission failed');
}

export const FormMessage = ({ status, successMsg = 'Submitted successfully! We\'ll be in touch soon.' }: { status: FormStatus; successMsg?: string }) => {
  if (status === 'idle') return null;
  if (status === 'loading') return (
    <div className="flex items-center gap-2 text-brand-blue font-medium text-sm mt-3">
      <Loader2 size={16} className="animate-spin" /> Sending…
    </div>
  );
  if (status === 'success') return (
    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mt-3">
      <CheckCircle size={16} /> {successMsg}
    </div>
  );
  return (
    <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mt-3">
      <AlertCircle size={16} /> Something went wrong. Please try again.
    </div>
  );
};

export const FormMessageLight = ({ status, successMsg = 'Message sent! We\'ll respond shortly.' }: { status: FormStatus; successMsg?: string }) => {
  if (status === 'idle') return null;
  if (status === 'loading') return (
    <div className="flex items-center gap-2 text-brand-blue font-medium text-sm mt-3">
      <Loader2 size={16} className="animate-spin" /> Sending…
    </div>
  );
  if (status === 'success') return (
    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm mt-3">
      <CheckCircle size={16} /> {successMsg}
    </div>
  );
  return (
    <div className="flex items-center gap-2 text-red-500 font-semibold text-sm mt-3">
      <AlertCircle size={16} /> Something went wrong. Please try again.
    </div>
  );
};

export const InitiateProjectForm: React.FC<{ defaultService?: string }> = ({ defaultService = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus('loading');
    try {
      await submitToGoogleSheet('inquiries', { name, email, service: service || 'Web Development Madurai' });
      setStatus('success');
      setName(''); setEmail(''); setService('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-800"
      />
      <input
        type="email"
        placeholder="Work Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-800"
      />
      <select
        value={service}
        onChange={e => setService(e.target.value)}
        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-700 appearance-none cursor-pointer"
      >
        <option value="">Interested Service</option>
        <option value="Business Website Development">Business Website Development</option>
        <option value="Ecommerce Website Development">Ecommerce Website Development</option>
        <option value="Custom Web Applications">Custom Web Applications</option>
        <option value="Corporate Branding">Corporate Branding</option>
        <option value="Enterprise Software">Enterprise Software</option>
        <option value="Revenue Optimization">Revenue Optimization</option>
      </select>
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full bg-brand-dark hover:bg-brand-blue text-white font-bold py-5 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === 'loading' ? 'Sending…' : status === 'success' ? '✓ Sent!' : 'Send Inquiry'}
      </button>
      <FormMessageLight status={status} successMsg="Inquiry received! We'll reach out soon." />
      <p className="text-xs text-slate-400 text-center font-medium">Strict confidentiality maintained.</p>
    </form>
  );
};

export const ContactForm: React.FC<{ defaultMessage?: string; buttonText?: string }> = ({
  defaultMessage = '',
  buttonText = 'IGNITE THE PROJECT'
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    setStatus('loading');
    try {
      await submitToGoogleSheet('contact', { fullName, email, phone, message });
      setStatus('success');
      setFullName(''); setEmail(''); setPhone(''); setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit} noValidate>
      <div className="space-y-3">
        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Identity</label>
        <input
          type="text"
          placeholder="e.g. John Doe"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20"
        />
      </div>
      <div className="space-y-3">
        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
        <input
          type="email"
          placeholder="e.g. john@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20"
        />
      </div>
      <div className="md:col-span-2 space-y-3">
        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Number</label>
        <input
          type="tel"
          placeholder="e.g. +91 93630 21664"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20"
        />
      </div>
      <div className="md:col-span-2 space-y-3">
        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Project Brief</label>
        <textarea
          placeholder="Briefly describe your objectives and requirements..."
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20 resize-none"
        />
      </div>
      <div className="md:col-span-2 space-y-3">
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full md:w-auto bg-brand-blue hover:bg-white hover:text-brand-dark text-white px-16 py-6 rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all shadow-glow hover:shadow-white/10 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === 'loading' ? 'SENDING…' : status === 'success' ? '✓ SENT!' : buttonText}
        </button>
        <FormMessage status={status} successMsg="Project brief received! We'll ignite things shortly." />
      </div>
    </form>
  );
};

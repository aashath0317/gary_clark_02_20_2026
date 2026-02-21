import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDPDxsLHrC63QqJ4zyChGl9NmFBit_fFnLLFTTv7G_R_7lsZ6xtnwloSxs4zeNchtOWg/exec';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({ ...formData, formType: 'contact' }),
            });

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully! We will get back to you soon.' });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'There was an error sending your message. Please try again later.' });
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary z-10"></div>
                </div>

                <div className="container-custom relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-medium tracking-wide text-sm mb-6 animate-fade-in">
                        <MessageSquare size={16} className="fill-current" />
                        <span>Get In Touch</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in fade-in-delay-1 max-w-4xl mx-auto">
                        Contact The <span className="text-gradient">NFL Legend Experience</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in fade-in-delay-2">
                        For media, partnerships, bookings, fan stories, or general inquiries, we’d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="section-padding relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-accent-primary/5 blur-[100px] z-0 pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                        {/* Contact Info */}
                        <div className="lg:col-span-4 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Reach Out</h2>
                                <p className="text-text-secondary mb-8 leading-relaxed">
                                    Have a question or want to get involved? Send us a message and our team will get back to you as soon as possible.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="glass p-6 rounded-2xl flex items-start border border-white/5 group hover:border-accent-primary/50 transition-colors">
                                    <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary mr-4 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">General Inquiries</h3>
                                        <p className="text-sm text-text-secondary">hello@nfllegendexperience.com</p>
                                    </div>
                                </div>

                                <div className="glass p-6 rounded-2xl flex items-start border border-white/5 group hover:border-gold-level/50 transition-colors">
                                    <div className="p-3 rounded-lg bg-gold-level/10 text-gold-level mr-4 group-hover:scale-110 transition-transform">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Business & Partnerships</h3>
                                        <p className="text-sm text-text-secondary">partners@nfllegendexperience.com</p>
                                    </div>
                                </div>

                                <div className="glass p-6 rounded-2xl flex items-start border border-white/5 group hover:border-accent-secondary/50 transition-colors">
                                    <div className="p-3 rounded-lg bg-accent-secondary/10 text-accent-secondary mr-4 group-hover:scale-110 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Studio</h3>
                                        <p className="text-sm text-text-secondary">Los Angeles, CA<br />(By appointment only)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-8">
                            <div className="glass p-8 md:p-12 rounded-3xl border border-glass-border">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {submitStatus.type === 'error' && (
                                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                                            {submitStatus.message}
                                        </div>
                                    )}
                                    {submitStatus.type === 'success' && (
                                        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-400">Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-400">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-400">Mobile Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-400">Subject *</label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors appearance-none"
                                                >
                                                    <option value="" disabled>Select a subject...</option>
                                                    <option value="partnership">Partnership</option>
                                                    <option value="media">Media</option>
                                                    <option value="fan_story">Fan Story</option>
                                                    <option value="booking">Booking</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Message *</label>
                                        <textarea
                                            required
                                            rows="6"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full py-4 text-lg inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                                        <Send size={20} className="mr-2" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

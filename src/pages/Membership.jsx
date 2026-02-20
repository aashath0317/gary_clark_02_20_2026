import React from 'react';
import { Star, Shield, Play, Gift, Users, Ticket, Check } from 'lucide-react';

const Membership = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0 bg-zinc-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-bg-primary z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gold-level/10 blur-[100px] z-0 pointer-events-none"></div>
                </div>

                <div className="container-custom relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-level/10 border border-gold-level/20 text-gold-level font-medium tracking-wide text-sm mb-6 animate-fade-in">
                        <Star size={16} className="fill-current" />
                        <span>Exclusive Access</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in fade-in-delay-1 max-w-4xl mx-auto">
                        Join <span className="text-gold-level">Legends Circle</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in fade-in-delay-2">
                        Legends Circle is the inner circle of The NFL Legend Experience—a community of fans, leaders, and game lovers who want deeper access, more connection, and more opportunities to be part of the story.
                    </p>
                </div>
            </section>

            {/* What You Get Section */}
            <section className="section-padding relative bg-bg-primary">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">What You <span className="text-gradient">Get</span></h2>
                        <p className="text-text-secondary text-lg">Unlock the ultimate fan experience.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
                        {/* Benefit 1 */}
                        <div className="glass p-8 rounded-2xl border border-gold-level/20 hover:border-gold-level/40 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Play size={80} className="text-gold-level transform rotate-12" />
                            </div>
                            <div className="w-12 h-12 bg-gold-level/10 rounded-xl flex items-center justify-center text-gold-level mb-6 relative z-10">
                                <Play size={24} className="fill-current" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 relative z-10">Early access to episodes</h3>
                            <p className="text-text-secondary relative z-10">Watch every new episode before it premieres to the public.</p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="glass p-8 rounded-2xl border border-gold-level/20 hover:border-gold-level/40 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Shield size={80} className="text-gold-level transform rotate-12" />
                            </div>
                            <div className="w-12 h-12 bg-gold-level/10 rounded-xl flex items-center justify-center text-gold-level mb-6 relative z-10">
                                <Shield size={24} className="fill-current" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 relative z-10">Exclusive behind-the-scenes content</h3>
                            <p className="text-text-secondary relative z-10">Uncut footage, locker room stories, and unscripted moments.</p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="glass p-8 rounded-2xl border border-gold-level/20 hover:border-gold-level/40 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Star size={80} className="text-gold-level transform rotate-12 fill-current" />
                            </div>
                            <div className="w-12 h-12 bg-gold-level/10 rounded-xl flex items-center justify-center text-gold-level mb-6 relative z-10">
                                <Star size={24} className="fill-current" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 relative z-10">Priority consideration for fan experiences</h3>
                            <p className="text-text-secondary relative z-10">Jump to the front of the line when we select fan stories.</p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="glass p-8 rounded-2xl border border-gold-level/20 hover:border-gold-level/40 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Users size={80} className="text-gold-level transform rotate-12" />
                            </div>
                            <div className="w-12 h-12 bg-gold-level/10 rounded-xl flex items-center justify-center text-gold-level mb-6 relative z-10">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 relative z-10">Members-only Q&A sessions</h3>
                            <p className="text-text-secondary relative z-10">Direct access to ask Gary, Chad, and guests your questions.</p>
                        </div>

                        {/* Benefit 5 */}
                        <div className="glass p-8 rounded-2xl border border-gold-level/20 hover:border-gold-level/40 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Ticket size={80} className="text-gold-level transform rotate-12" />
                            </div>
                            <div className="w-12 h-12 bg-gold-level/10 rounded-xl flex items-center justify-center text-gold-level mb-6 relative z-10">
                                <Ticket size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 relative z-10">Discounts on merch and events</h3>
                            <p className="text-text-secondary relative z-10">Exclusive pricing on ALL The NFL Legend Experience gear and live show tickets.</p>
                        </div>

                        {/* Benefit 6 */}
                        <div className="glass p-8 rounded-2xl border border-gold-level/20 hover:border-gold-level/40 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Gift size={80} className="text-gold-level transform rotate-12" />
                            </div>
                            <div className="w-12 h-12 bg-gold-level/10 rounded-xl flex items-center justify-center text-gold-level mb-6 relative z-10">
                                <Gift size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 relative z-10">Special recognition on the show</h3>
                            <p className="text-text-secondary relative z-10">Your name featured as a Legends Circle member in episode credits.</p>
                        </div>
                    </div>

                    {/* Pricing / Join Box */}
                    <div className="max-w-xl mx-auto glass p-8 md:p-12 rounded-3xl border border-gold-level/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.1)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-level to-transparent"></div>

                        <h3 className="text-3xl font-bold mb-2">Legends Circle Membership</h3>
                        <p className="text-text-secondary mb-8">Join the inner circle today.</p>

                        <div className="flex flex-col items-center justify-center gap-2 mb-8">
                            {/* Mock Price, adjust as needed */}
                            <span className="text-5xl font-black text-white">$19.99</span>
                            <span className="text-zinc-500 text-sm">per month</span>
                        </div>

                        <ul className="text-left space-y-4 mb-10 text-white/90">
                            {[
                                'Early Episode Access',
                                'Behind-the-Scenes Content',
                                'Priority Fan Experiences',
                                'Members-Only Q&A',
                                'Merch & Event Discounts',
                                'Show Recognition'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-gold-level/20 flex items-center justify-center mr-3 flex-shrink-0">
                                        <Check size={14} className="text-gold-level font-bold" />
                                    </div>
                                    <span className="font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="btn w-full bg-gold-level text-black hover:bg-yellow-400 py-4 text-xl font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all">
                            Join Legends Circle Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Membership;

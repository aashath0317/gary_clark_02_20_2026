import React from 'react';
import { Briefcase, TrendingUp, Handshake, Target, Users, Shield, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partner = () => {
    const sponsorshipLevels = [
        {
            name: "BLACK LEVEL",
            price: "$50,000",
            subtitle: "The Premier, Top-Tier Partnership / Brand Visibility & Integration",
            features: [
                "“Black Level Presenting Sponsor” designation",
                "Logo on all episode openings & closings (full season)",
                "Logo on set backdrop (premium placement)",
                "Verbal mention in every episode by Gary or Chad",
                "Logo on all YouTube thumbnails for sponsored episodes",
                "Logo on all social media promotional graphics",
                "2 dedicated branded segments per season",
                "1 custom commercial (30–60 seconds) produced by your team",
                "1 exclusive interview or feature segment with sponsor executive",
                "Sponsor-branded NFL Legend Experience giveaway",
                "Sponsor name included in fan reward announcements",
                "Sponsor logo on fan experience certificates",
                "Logo on website homepage (top tier placement)",
                "Inclusion in email newsletters",
                "Co-branded social media posts (minimum 6)",
                "4 VIP passes to any live taping",
                "Sponsor booth or activation at live events",
                "First right of renewal & Category exclusivity"
            ],
            color: "border-zinc-500",
            bg: "bg-zinc-900"
        },
        {
            name: "PLATINUM LEVEL",
            price: "$35,000",
            subtitle: "Premium Brand Visibility & Integration",
            features: [
                "Logo in episode closing credits (full season)",
                "Logo on set backdrop (secondary placement)",
                "Verbal mention in 50% of episodes",
                "Logo on 50% of YouTube thumbnails",
                "1 branded segment per season",
                "1 sponsor-provided commercial (15–30 seconds)",
                "Sponsor logo included in 1 fan reward experience",
                "Logo on website sponsor page",
                "4 co-branded social media posts",
                "2 VIP passes to a live taping"
            ],
            color: "border-slate-300",
            bg: "bg-slate-900/50"
        },
        {
            name: "GOLD LEVEL",
            price: "$25,000",
            subtitle: "High Impact Visibility",
            features: [
                "Logo in episode closing credits (half-season)",
                "Verbal mention in 25% of episodes",
                "1 sponsor shout-out segment",
                "Logo included in 1 fan spotlight graphic",
                "Logo on website sponsor page",
                "2 co-branded social media posts",
                "2 general admission passes to a live taping"
            ],
            color: "border-gold-level",
            bg: "bg-yellow-900/20"
        },
        {
            name: "SILVER LEVEL",
            price: "$15,000",
            subtitle: "Targeted Audience Reach",
            features: [
                "Logo in closing credits (quarter-season)",
                "1 sponsor shout-out (verbal)",
                "Logo included in 1 fan highlight reel",
                "Logo on website sponsor page",
                "1 co-branded social media post"
            ],
            color: "border-zinc-400",
            bg: "bg-zinc-800/50"
        },
        {
            name: "BRONZE LEVEL",
            price: "$7,500",
            subtitle: "Entry Level Visibility",
            features: [
                "Logo in closing credits (single episode)",
                "1 verbal thank-you mention",
                "Logo on website sponsor page"
            ],
            color: "border-orange-600",
            bg: "bg-orange-900/20"
        },
        {
            name: "ALL-MADDEN LEVEL",
            price: "$5,000",
            subtitle: "Supporting Sponsor",
            features: [
                "Logo on website sponsor page",
                "Listed as “Supporting Sponsor”",
                "1 verbal thank-you in a selected episode"
            ],
            color: "border-accent-primary",
            bg: "bg-red-900/20"
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary z-10"></div>
                </div>

                <div className="container-custom relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-medium tracking-wide text-sm mb-6 animate-fade-in">
                        <Handshake size={16} className="fill-current" />
                        <span>Partnerships</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in fade-in-delay-1 max-w-4xl mx-auto">
                        Partner With <span className="text-gradient">The NFL Legend Experience</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in fade-in-delay-2">
                        The NFL Legend Experience connects brands with a passionate, loyal, and legacy-driven audience of NFL fans, leaders, and decision-makers.
                    </p>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="section-padding bg-bg-secondary relative border-y border-border-color">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">Why Partner <span className="text-accent-primary">With Us</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="glass p-6 rounded-2xl text-center group hover:-translate-y-2 transition-transform">
                            <Shield size={32} className="mx-auto text-accent-primary mb-4" />
                            <h3 className="font-bold mb-2">Trusted NFL Legacy</h3>
                            <p className="text-sm text-text-secondary">Authentic credibility built on years of real NFL experience.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl text-center group hover:-translate-y-2 transition-transform">
                            <Users size={32} className="mx-auto text-accent-secondary mb-4" />
                            <h3 className="font-bold mb-2">Authentic Storytelling</h3>
                            <p className="text-sm text-text-secondary">Real conversations that resonate with fans on a deeper level.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl text-center group hover:-translate-y-2 transition-transform">
                            <Target size={32} className="mx-auto text-gold-level mb-4" />
                            <h3 className="font-bold mb-2">Deep Fan Engagement</h3>
                            <p className="text-sm text-text-secondary">A highly interactive and invested community of core fans.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl text-center group hover:-translate-y-2 transition-transform">
                            <TrendingUp size={32} className="mx-auto text-green-500 mb-4" />
                            <h3 className="font-bold mb-2">Multi-Platform Reach</h3>
                            <p className="text-sm text-text-secondary">Exposure across YouTube, live events, social, and membership.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl text-center group hover:-translate-y-2 transition-transform">
                            <Briefcase size={32} className="mx-auto text-purple-500 mb-4" />
                            <h3 className="font-bold mb-2">Value Alignment</h3>
                            <p className="text-sm text-text-secondary">Perfect for brands valuing leadership, loyalty, and community.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Levels */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">Sponsorship <span className="text-gradient">Levels</span></h2>
                        <p className="text-lg text-text-secondary">Choose the partnership tier that aligns with your brand's goals.</p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        {sponsorshipLevels.map((tier, index) => (
                            <div key={index} className={`glass p-8 rounded-3xl border-t-4 ${tier.color} ${tier.bg} hover:shadow-2xl transition-all flex flex-col h-full`}>
                                <div className="mb-6 border-b border-white/10 pb-6">
                                    <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                                    <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                                    <p className="text-sm text-zinc-400 font-medium">{tier.subtitle}</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start text-sm">
                                            <Check size={16} className={`mr-3 mt-0.5 flex-shrink-0 opacity-80`} />
                                            <span className="text-zinc-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn bg-white/10 hover:bg-white/20 text-white w-full py-3 mt-auto">Select Tier</button>
                            </div>
                        ))}
                    </div>

                    {/* Add-ons */}
                    <div className="mt-16 glass p-8 md:p-12 rounded-3xl border border-glass-border">
                        <h3 className="text-2xl font-bold mb-6 text-center">Bonus: Optional Add-Ons</h3>
                        <p className="text-center text-text-secondary mb-8">Increase engagement and tailor your partnership with these flexible options (available to any tier).</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                <span className="font-medium">Custom branded fan experience</span>
                                <span className="text-accent-primary font-bold">$5K–$15K</span>
                            </div>
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                <span className="font-medium">Sponsored giveaway</span>
                                <span className="text-accent-primary font-bold">$2.5K–$10K</span>
                            </div>
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                <span className="font-medium">Sponsored live event segment</span>
                                <span className="text-accent-primary font-bold">$7.5K</span>
                            </div>
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                <span className="font-medium">Sponsored leadership message</span>
                                <span className="text-accent-primary font-bold">$3.5K</span>
                            </div>
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                <span className="font-medium">Sponsored Selling Maverick crossover</span>
                                <span className="text-accent-primary font-bold">$5.0K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-accent-primary">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Ready to Build a Legendary Partnership?</h2>
                    <Link to="/contact" className="btn bg-black text-white hover:bg-zinc-900 border border-white/20 whitespace-nowrap px-10 py-4 text-lg inline-flex items-center">
                        Request Sponsorship Deck <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Partner;

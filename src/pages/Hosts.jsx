import React from 'react';
import { Star, Trophy, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hosts = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary z-10"></div>
                </div>

                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in fade-in-delay-1 max-w-4xl mx-auto">
                        Meet The <span className="text-gradient">Hosts</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in fade-in-delay-2">
                        The legends bringing the stories to life.
                    </p>
                </div>
            </section>

            {/* Gary Clark Section */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-3xl overflow-hidden glass border border-glass-border shadow-2xl group animate-fade-in">
                            <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center overflow-hidden">
                                <img src="/gary_clark.webp" alt="Gary Clark - Super Bowl Champion & Host" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>

                        <div className="animate-fade-in fade-in-delay-1">
                            <h2 className="text-4xl md:text-5xl mb-2">Gary Clark</h2>
                            <h3 className="text-2xl text-accent-primary font-medium mb-6">SBXXII - SBXXVI Winner & Host</h3>
                            <div className="text-lg text-text-secondary mb-8 leading-relaxed space-y-4">
                                <p className="font-semibold text-white/90">
                                    Winner SBXXII - SBXXVI
                                </p>
                                <p className="font-semibold text-white/90">
                                    2X Super Bowl Champion, 2X Team MVP, 3X All Pro, 4X Pro Bowler, 8X All Madden Team, Member of The All-Madden All-Time Super Bowl Team, Member of The 70 Greatest Redskins of All-Time, Member of The Washington Redskins Ring of Fame, Member of The Washington DC Sports Hall of Fame and a Pro-Football Hall of Fame Nominee.
                                </p>
                                <p>
                                    This 10,000+ yards receiver was one of the most highlighted wide receivers of his era. Known for his toughness, heart and leadership, Clark brings the same type of intensity, motivation and authenticity to his show, The NFL Legend Experience.
                                </p>
                                <p>
                                    For this show and all of the other shows on the horizon; Gary brings his on-field legacy and off-field leadership to each and every episode with a true appreciation for every fan who watches the game he loves! You will find that the 4X Pro-Bowler is a storyteller who uses his platform to honor the game, honor the fans and celebrate the legends who helped shape football history.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass p-4 rounded-xl flex items-center">
                                    <Trophy size={24} className="text-gold-level mr-3 text-shrink-0 min-w-max" />
                                    <span className="font-bold">2X Super Bowl Champion</span>
                                </div>
                                <div className="glass p-4 rounded-xl flex items-center">
                                    <Star size={24} className="text-accent-secondary mr-3 text-shrink-0 min-w-max" />
                                    <span className="font-bold">2X Team Offensive MVP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chad Morton Section */}
            <section className="section-padding bg-bg-secondary relative border-t border-border-color">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 animate-fade-in fade-in-delay-2">
                            <h2 className="text-4xl md:text-5xl mb-2">Chad Morton</h2>
                            <h3 className="text-2xl text-accent-secondary font-medium mb-6">Entrepreneur • Filmmaker • Real Estate Advisor • CEO, SMASH Entertainment</h3>
                            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                Chad Morton is a multifaceted creator shaping the future of entertainment and real estate. From top‑tier real estate advisor and co‑founder of Maverick Realty, to award‑winning filmmaker behind What Death Leaves Behind (Sundance) and The Realtor (Apple TV), Chad brings a rare blend of business, storytelling, and vision.
                            </p>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                Now, as co‑host of The NFL Legend Experience and host of Selling Maverick, he’s redefining what it means to serve fans—on screen and at the settlement table.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass p-4 rounded-xl flex items-center col-span-2 sm:col-span-1">
                                    <Shield size={24} className="text-accent-primary mr-3 text-shrink-0 min-w-max" />
                                    <span className="font-bold">Multifaceted Creator</span>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden glass border border-glass-border shadow-2xl group animate-fade-in fade-in-delay-1">
                            <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center overflow-hidden">
                                <img src="/chad.webp" alt="Chad Morton - Co-Host, Coach & Connector" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-accent-primary">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Catch the Hosts in Action</h2>
                    <Link to="/watch" className="btn bg-black text-white hover:bg-zinc-900 border border-white/20 whitespace-nowrap px-10 py-4 text-lg inline-flex items-center">
                        Watch The NFL Legend Experience <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Hosts;

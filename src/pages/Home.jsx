import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Star, Heart, Trophy, Users, Video } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-bg-primary/90 to-bg-primary z-10"></div>
                    {/* Cinematic Image: Gary + Chad on set */}
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center opacity-50 relative">
                        {/* Subtle NFL Visual Background Element */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                        <span className="text-zinc-500 font-bold uppercase tracking-widest z-10">[Cinematic Image: Gary + Chad on set]</span>
                    </div>
                </div>

                <div className="container-custom relative z-20 pt-20 text-center">
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
                            The NFL Legend Experience – Where NFL Legends congregate together while also <span className="text-gradient">Rewarding and thanking NFL Fans</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            Hosted by 2X Super Bowl Champion Gary Clark and co-host Chad Morton, The NFL Legend Experience brings NFL Legends, unforgettable stories, and once-in-a-lifetime fan experiences together in one powerful show.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="#" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                                <Play size={24} className="mr-2 inline" /> Watch on YouTube
                            </a>
                            <Link to="/membership" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                                <Star size={24} className="mr-2 inline text-gold-level" /> Join Legends Circle
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is the NFL Legend Experience */}
            <section className="section-padding bg-bg-secondary relative border-y border-border-color">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in fade-in-delay-1">
                            <h2 className="text-4xl md:text-5xl mb-6">More Than a Show. It’s an Experience.! <br /><span className="text-accent-primary">An NFL Legend Experience</span></h2>
                            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                The NFL Legend Experience – With Gary Clark is a fan-first, story-driven show where NFL Legends sit down to share the moments that defined their careers—and then turn those moments into real rewards for real fans.
                            </p>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                From exclusive interviews and behind-the-scenes stories to surprise appearances and VIP experiences, this is where the love of the game meets the people who live it.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-white hover:text-accent-primary font-bold transition-colors group">
                                Discover the Show <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden aspect-video border border-glass-border shadow-2xl group animate-fade-in fade-in-delay-2">
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-colors group-hover:bg-black/20">
                                <button className="w-20 h-20 rounded-full bg-accent-primary/90 flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-transform group-hover:scale-110">
                                    <Play size={32} className="ml-2" />
                                </button>
                            </div>
                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                <span className="text-zinc-600 font-bold">[Intro Video Thumbnail]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Watch the Latest Episode */}
            <section className="section-padding bg-black relative border-b border-border-color">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl mb-6">Watch the Latest <span className="text-accent-primary">Episode</span></h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
                        Catch the newest stories and fan moments directly from the studio.
                    </p>
                    <div className="relative rounded-2xl overflow-hidden aspect-video border border-glass-border shadow-2xl max-w-4xl mx-auto mb-10 group">
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 transition-colors group-hover:bg-transparent">
                            <button className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-transform group-hover:scale-110">
                                <Play size={40} className="ml-2" />
                            </button>
                        </div>
                        <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
                            <Video size={48} className="mb-4 opacity-50" />
                            <span className="font-bold">[Embed Latest YouTube Episode Here]</span>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary text-lg px-8 py-4 inline-flex items-center">
                        <Play size={24} className="mr-2" /> Subscribe on YouTube
                    </a>
                </div>
            </section>

            {/* How Fans Get Rewarded */}
            <section className="section-padding relative">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl mb-4">NFL Legends. Rewarding Real Fans. <span className="text-gradient">with Real Rewards.</span></h2>
                    <p className="subtext mb-16">Turning incredible stories into once-in-a-lifetime real rewards.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="card text-center group flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-accent-secondary group-hover:scale-110 transition-transform duration-300">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl mb-4">Fan Stories</h3>
                            <p className="text-text-secondary mb-6">Share your story, your passion, your connection to the game.</p>
                            {/* Mock Video Placeholder */}
                            <div className="w-full aspect-video bg-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden mt-auto border border-zinc-700">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500">
                                    <Video size={24} className="mb-2" />
                                    <span className="text-xs text-center px-4">[Mock fan story video placeholder]</span>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center group flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 text-accent-primary group-hover:scale-110 transition-transform duration-300">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl mb-4">Legend Moments</h3>
                            <p className="text-text-secondary">Legends choose fans whose stories move them.</p>
                        </div>

                        <div className="card text-center group flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 text-gold-level group-hover:scale-110 transition-transform duration-300">
                                <Trophy size={32} />
                            </div>
                            <h3 className="text-2xl mb-4">Unforgettable Experiences</h3>
                            <p className="text-text-secondary">Signed memorabilia, surprise calls, VIP invites, and more.</p>
                        </div>
                    </div>

                    <Link to="/rewards" className="btn btn-primary text-lg inline-flex items-center">
                        Submit Your Fan Story <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>

            {/* Meet Your Hosts */}
            <section className="section-padding bg-bg-secondary border-y border-border-color">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">Meet Your <span className="text-gradient">Hosts</span></h2>
                        <p className="subtext">The legends bringing the stories to life.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-accent-primary/10"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl font-black mb-2">Gary Clark</h3>
                                <p className="text-accent-primary font-bold tracking-wide uppercase text-sm mb-6">2X Super Bowl Champion</p>
                                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                                    Two-time Super Bowl Champion, four-time Pro Bowler, and one of the toughest wide receivers to ever play the game, Gary Clark brings his on-field legacy and off-field leadership to every episode.
                                </p>
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-accent-secondary/10"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl font-black mb-2">Chad Morton</h3>
                                <p className="text-accent-secondary font-bold tracking-wide uppercase text-sm mb-6">Former NFL RB & Coach</p>
                                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                                    Former NFL running back, return specialist, and seasoned coach, Chad Morton brings sharp insight, humor, and a deep understanding of the game and the people who play it.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/hosts" className="btn btn-secondary inline-flex items-center">
                            Learn More About Gary & Chad <ArrowRight className="ml-2" size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Join Legends Circle (Membership CTA) */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-900 -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-white/5 rounded-full -z-10 bg-gold-level/5 blur-3xl"></div>

                <div className="container-custom text-center relative z-10">
                    <Star size={48} className="mx-auto text-gold-level mb-6" />
                    <h2 className="text-4xl md:text-6xl font-black mb-6">Go From Viewer to <span className="text-gold-level">Insider</span></h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                        Legends Circle is the inner community of fans, leaders, and game lovers who want more—more access, more stories, more experiences. Get early access to episodes, exclusive content, priority for fan experiences, and special invites.
                    </p>
                    <Link to="/membership" className="btn bg-gold-level text-black hover:bg-yellow-400 hover:-translate-y-1 shadow-[0_4px_14px_rgba(251,191,36,0.3)] transition-all text-lg font-bold px-10 py-4 inline-flex items-center">
                        Join Legends Circle <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>

            {/* Partner With the NFL Legend Experience */}
            <section className="py-20 bg-accent-primary">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Brands, Let's Build Legendary Experiences Together</h2>
                            <p className="text-white/90 text-lg">
                                From real estate and financial services to sports, leadership, and lifestyle brands, The NFL Legend Experience offers powerful partnership opportunities that connect your brand with passionate, loyal fans and a legacy-driven audience.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-end w-full">
                            <Link to="/partner" className="btn bg-black text-white hover:bg-zinc-900 border border-white/20 whitespace-nowrap w-full md:w-auto text-lg px-8 py-4">
                                Explore Sponsorships
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import { Play, Heart, Users, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary z-10"></div>
                </div>

                <div className="container-custom relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-medium tracking-wide text-sm mb-6 animate-fade-in">
                        <Play size={16} className="fill-current" />
                        <span>About The Show</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in fade-in-delay-1 max-w-4xl mx-auto">
                        About The <span className="text-gradient">NFL Legend Experience</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in fade-in-delay-2">
                        The NFL Legend Experience – With Gary Clark is built on a simple belief: the game belongs to the fans, and the stories belong to the legends. Our mission is to bring them together in a way that’s real, emotional, and unforgettable.
                    </p>
                </div>
            </section>

            {/* The Heart of the Show Section */}
            <section className="section-padding bg-bg-secondary relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-square rounded-full border border-glass-border overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-colors group-hover:bg-black/20">
                                </div>
                                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                    <span className="text-zinc-500 font-bold uppercase text-center p-8">[Image: Legends interacting with fans]</span>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-primary/10 rounded-full blur-3xl"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl mb-8">The <span className="text-gradient">Heart</span> of the Show</h2>
                            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                Every episode features NFL Legends sharing the stories you never heard—the moments in the locker room, on the sideline, and in life that shaped who they are. But we don’t stop at storytelling.
                            </p>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                We turn those stories into experiences: surprise fan interactions, signed memorabilia, VIP invites, and more. The fans who have lived, loved, and supported this game for decades finally get their moment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Experience Section */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">What You’ll <span className="text-gradient">Experience</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Box 1 */}
                        <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent-primary/20 transition-colors"></div>
                            <div className="w-14 h-14 bg-bg-secondary rounded-xl flex items-center justify-center mb-6 text-accent-primary shadow-inner border border-white/5">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Legend Interviews</h3>
                            <p className="text-text-secondary">
                                Deep, honest, unfiltered conversations.
                            </p>
                        </div>
                        {/* Box 2 */}
                        <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent-secondary/20 transition-colors"></div>
                            <div className="w-14 h-14 bg-bg-secondary rounded-xl flex items-center justify-center mb-6 text-accent-secondary shadow-inner border border-white/5">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Fan Spotlights</h3>
                            <p className="text-text-secondary">
                                Real fans, real stories, real recognition.
                            </p>
                        </div>
                        {/* Box 3 */}
                        <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-level/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-gold-level/20 transition-colors"></div>
                            <div className="w-14 h-14 bg-bg-secondary rounded-xl flex items-center justify-center mb-6 text-gold-level shadow-inner border border-white/5">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Leadership & Life Lessons</h3>
                            <p className="text-text-secondary">
                                What the game teaches about resilience, teamwork, and purpose.
                            </p>
                        </div>
                        {/* Box 4 */}
                        <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors"></div>
                            <div className="w-14 h-14 bg-bg-secondary rounded-xl flex items-center justify-center mb-6 text-green-500 shadow-inner border border-white/5">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Behind the Scenes</h3>
                            <p className="text-text-secondary">
                                The culture, the grind, the relationships.
                            </p>
                        </div>
                        {/* Box 5 */}
                        <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden lg:col-start-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-colors"></div>
                            <div className="w-14 h-14 bg-bg-secondary rounded-xl flex items-center justify-center mb-6 text-purple-500 shadow-inner border border-white/5">
                                <Play size={28} className="fill-current" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">NFL Legend Experiences</h3>
                            <p className="text-text-secondary">
                                The rewards that make it all unforgettable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who It's For Section */}
            <section className="section-padding bg-bg-secondary border-t border-border-color">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto bg-black border border-glass-border rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <h2 className="text-4xl font-bold mb-10 relative z-10">Who It's For</h2>

                        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
                            {['NFL fans', 'Pro-football lovers', 'Former players and families', 'Leaders who love sports', 'Anyone who believes in legacy, loyalty, and heart'].map((item, index) => (
                                <span key={index} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 font-medium whitespace-nowrap">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <Link to="/watch" className="btn btn-primary text-lg px-8 py-4 inline-flex items-center relative z-10">
                            Watch the Show <Play size={20} className="ml-2 fill-current" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

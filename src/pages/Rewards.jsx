import React from 'react';
import { Heart, Trophy, Star, Gift, Video, Mic, Calendar, Medal, ArrowRight } from 'lucide-react';

const Rewards = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary z-10"></div>
                </div>

                <div className="container-custom relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary font-medium tracking-wide text-sm mb-6 animate-fade-in">
                        <Heart size={16} className="fill-current" />
                        <span>Fan Rewards</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in fade-in-delay-1 max-w-5xl mx-auto">
                        NFL Legend Experiences – <span className="text-gradient">For the Fans Who Live the Game</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in fade-in-delay-2">
                        This show is built around you—the fans. The people who wore the jerseys, screamed at the TV, froze in the stands, and never stopped believing. The NFL Legend Experience is our way of giving something back.
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section-padding bg-bg-secondary relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">How It <span className="text-accent-primary">Works</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-accent-primary/20 via-white/20 to-gold-level/20 -z-10"></div>

                        {/* Step 1 */}
                        <div className="relative group text-center">
                            <div className="w-32 h-32 mx-auto bg-black rounded-full border-4 border-accent-primary flex flex-col items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                                <span className="text-4xl font-black text-accent-primary">1</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
                            <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                                Tell us your NFL story—your favorite moment, your connection to a team, a player, or a game.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group text-center mt-12 md:mt-0">
                            <div className="w-32 h-32 mx-auto bg-black rounded-full border-4 border-white flex flex-col items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <span className="text-4xl font-black text-white">2</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Get Selected</h3>
                            <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                                Our team and our legends review fan stories and select fans to feature and reward.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group text-center mt-12 md:mt-0">
                            <div className="w-32 h-32 mx-auto bg-black rounded-full border-4 border-gold-level flex flex-col items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                                <span className="text-4xl font-black text-gold-level">3</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Experience the Moment</h3>
                            <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                                From signed memorabilia to surprise calls and VIP invites, your story can turn into a once-in-a-lifetime NFL Legend Experience.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-20">
                        <a href="#submit" className="btn btn-primary text-lg px-8 py-4 inline-flex items-center">
                            Submit Your Fan Story <ArrowRight className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Types of Experiences Section */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">Types of <span className="text-gradient">Experiences</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="glass p-8 rounded-2xl flex items-start group hover:-translate-y-2 transition-transform border border-white/5">
                            <div className="p-4 rounded-xl bg-accent-primary/10 text-accent-primary mr-6 group-hover:scale-110 transition-transform">
                                <Medal size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Signed memorabilia</h3>
                                <p className="text-text-secondary text-sm">Footballs, jerseys, helmets, and exclusive show items directly from the legends.</p>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex items-start group hover:-translate-y-2 transition-transform border border-white/5">
                            <div className="p-4 rounded-xl bg-accent-secondary/10 text-accent-secondary mr-6 group-hover:scale-110 transition-transform">
                                <Video size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Personalized video messages</h3>
                                <p className="text-text-secondary text-sm">Custom shoutouts and messages from your favorite players.</p>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex items-start group hover:-translate-y-2 transition-transform border border-white/5">
                            <div className="p-4 rounded-xl bg-green-500/10 text-green-500 mr-6 group-hover:scale-110 transition-transform">
                                <Mic size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Surprise live calls</h3>
                                <p className="text-text-secondary text-sm">The phone rings, you pick it up, and an NFL Legend is on the line.</p>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex items-start group hover:-translate-y-2 transition-transform border border-white/5">
                            <div className="p-4 rounded-xl bg-gold-level/10 text-gold-level mr-6 group-hover:scale-110 transition-transform">
                                <Calendar size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">VIP event invitations</h3>
                                <p className="text-text-secondary text-sm">Exclusive access to viewing parties, meet & greets, and legendary gatherings.</p>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex items-start group hover:-translate-y-2 transition-transform border border-white/5">
                            <div className="p-4 rounded-xl bg-purple-500/10 text-purple-500 mr-6 group-hover:scale-110 transition-transform">
                                <Trophy size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Live taping appearances</h3>
                                <p className="text-text-secondary text-sm">Be in the room where it happens for an upcoming episode.</p>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex items-start group hover:-translate-y-2 transition-transform border border-white/5">
                            <div className="p-4 rounded-xl bg-zinc-300/10 text-zinc-300 mr-6 group-hover:scale-110 transition-transform">
                                <Star size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Special recognition on the show</h3>
                                <p className="text-text-secondary text-sm">Your story, featured directly on an episode of The NFL Legend Experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Submission Form Placeholder */}
            {/* Note: In a real app, this would be a proper form component */}
            <section id="submit" className="section-padding bg-black border-t border-border-color">
                <div className="container-custom max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Story</h2>
                        <p className="text-text-secondary">Fill out the form below to be considered for an NFL Legend Experience.</p>
                    </div>

                    <div className="glass p-8 md:p-12 rounded-3xl">
                        <form className="space-y-6 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">First Name</label>
                                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Last Name</label>
                                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Email Address</label>
                                <input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Your NFL Story</label>
                                <textarea rows="6" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none" placeholder="Tell us about your favorite memory, connection to the game..."></textarea>
                            </div>

                            <button type="button" className="btn btn-primary w-full py-4 text-lg">
                                Submit Story
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rewards;

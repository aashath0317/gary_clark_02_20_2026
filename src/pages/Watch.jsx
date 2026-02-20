import React from 'react';
import { Play, Youtube, Video, ExternalLink } from 'lucide-react';

const Watch = () => {
    // Dummy Data
    const episodes = [
        { id: 1, title: 'Ep 1: The Rookie Year', desc: 'Gary Clark talks about his first year in the league.', img: 'Thum 1' },
        { id: 2, title: 'Ep 2: Super Bowl Stories', desc: 'Behind the scenes of the biggest game.', img: 'Thum 2' },
        { id: 3, title: 'Ep 3: The Toughest Opponents', desc: 'Facing off against Hall of Fame defenders.', img: 'Thum 3' },
        { id: 4, title: 'Ep 4: Fan Rewards Unveiled', desc: 'A special fan gets the surprise of a lifetime.', img: 'Thum 4' },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary z-10"></div>
                </div>

                <div className="container-custom relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-medium tracking-wide text-sm mb-6 animate-fade-in">
                        <Youtube size={16} className="fill-current" />
                        <span>Watch Now</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in fade-in-delay-1 max-w-4xl mx-auto">
                        Watch The <span className="text-gradient">NFL Legend Experience</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in fade-in-delay-2">
                        Catch every episode, every story, and every fan moment from The NFL Legend Experience – With Gary Clark.
                    </p>
                </div>
            </section>

            {/* Featured Episode Section */}
            <section className="section-padding bg-black relative">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl mb-12">Featured <span className="text-accent-primary">Episode</span></h2>

                    <div className="relative rounded-2xl overflow-hidden aspect-video border border-glass-border shadow-2xl max-w-5xl mx-auto mb-10 group bg-zinc-900">
                        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center z-10 transition-colors group-hover:bg-black/40">
                            <button className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-transform group-hover:scale-110 mb-4">
                                <Play size={40} className="ml-2 fill-current" />
                            </button>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600">
                            <Video size={64} className="mb-4 opacity-50" />
                            <span className="font-bold text-xl uppercase tracking-widest">[Embed Latest YouTube Episode Here]</span>
                        </div>
                    </div>

                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-4 inline-flex items-center">
                        <Youtube size={24} className="mr-2" /> Subscribe on YouTube
                    </a>
                </div>
            </section>

            {/* Episode Library Section */}
            <section className="section-padding bg-bg-secondary relative border-y border-border-color">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl md:text-5xl">Episode <span className="text-gradient">Library</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {episodes.map((ep) => (
                            <div key={ep.id} className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/5 flex flex-col h-full">
                                <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
                                            <Play size={20} className="ml-1 fill-current" />
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm font-bold uppercase">
                                        [{ep.img}]
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-white">{ep.title}</h3>
                                    <p className="text-text-secondary mb-6 text-sm flex-grow">{ep.desc}</p>
                                    <a href="#" className="inline-flex items-center text-accent-primary hover:text-red-400 font-bold transition-colors text-sm uppercase tracking-wide mt-auto">
                                        Watch on YouTube <ExternalLink size={16} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clips & Highlights Section */}
            <section className="section-padding relative">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl mb-6">Clips & <span className="text-accent-secondary">Highlights</span></h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                        Short on time? Watch the biggest moments, funniest stories, and most emotional reveals in our highlight clips.
                    </p>

                    <div className="relative rounded-2xl overflow-hidden aspect-[21/9] border border-glass-border shadow-2xl max-w-5xl mx-auto bg-zinc-900">
                        <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600">
                            <Video size={48} className="mb-4 opacity-50" />
                            <span className="font-bold uppercase tracking-widest">[Embed YouTube Clips Playlist Here]</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Watch;

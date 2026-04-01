import { motion } from 'framer-motion';
import { Trophy, Code, Calendar, Zap, Github, ExternalLink } from 'lucide-react';
import KalixLogo from '../assets/kalix.png';
import PlantPalLogo from '../assets/PlantPal.png'

const Hackathon = () => {
    const hackathons = [
        {
            title: "Kalix AI",
            role: "AI Product Developer",
            date: "JAN-2026",
            description: "Developed an AI-powered platform focused on intelligent automation and user-centric solutions. Built scalable full-stack architecture and integrated advanced AI models for real-world applications.",
            icon: KalixLogo,
            color: "text-blue-400",
            links: {
                github: "https://github.com/Dev1822/Kalix",
                live: "https://kalix-syntax-squad.vercel.app/"
            }
        },
        {
            title: "Plant Pal",
            role: "Full Stack & AI Developer",
            date: "Jan 2026",
            description: "Created an AI-driven plant care assistant that analyzes plant conditions and provides smart recommendations for watering, sunlight, and maintenance. Built with a scalable full-stack architecture and focused on delivering an intuitive, user-friendly experience for plant lovers.",
            icon: PlantPalLogo,
            color: "text-green-400",
            links: {
                github: "https://github.com/Dev1822/PlantPal", // update if you have a dedicated repo
                live: "https://plant-pal-ten.vercel.app/"
            }
        }
    ];

    return (
        <section id="hackathons" className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10rem] md:text-[14rem] font-black text-white/[0.02] light:text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter mix-blend-overlay">
                COMPETE
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center mb-20 text-center"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-electric-cyan" />
                        <span className="text-sm text-electric-cyan font-bold uppercase tracking-[0.3em]">
                            Event History
                        </span>
                        <span className="w-12 h-[2px] bg-electric-cyan" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-gradient italic tracking-tighter uppercase mb-6 flex items-center justify-center">
                        Hackathons
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hackathons.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-1 glass glow-box rounded-[2rem] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-electric-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="bg-[#060b18]/90 light:bg-white/90 backdrop-blur-xl rounded-[1.8rem] p-8 h-full border border-white/5 light:border-slate-200 flex flex-col relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-4 rounded-2xl bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 ${event.color} group-hover:scale-110 transition-transform duration-500`}>
                                            {typeof Icon === 'string' ? (
                                                <img src={Icon} alt={`${event.title} logo`} className="w-8 h-8 object-contain" />
                                            ) : (
                                                <Icon className="w-8 h-8" />
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-wider bg-white/5 light:bg-slate-100 px-3 py-1.5 rounded-full">
                                            <Calendar className="w-3 h-3" />
                                            {event.date}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-primary mb-2 group-hover:text-electric-cyan transition-colors">{event.title}</h3>
                                    <h4 className="text-sm text-electric-cyan font-bold uppercase tracking-widest mb-6">{event.role}</h4>

                                    <p className="text-secondary leading-relaxed font-light mt-auto">
                                        {event.description}
                                    </p>

                                    {event.links && (
                                        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/5 light:border-slate-200">
                                            {event.links.github && (
                                                <a href={event.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-white transition-colors">
                                                    <Github className="w-4 h-4" /> Code
                                                </a>
                                            )}
                                            {event.links.live && (
                                                <a href={event.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-electric-cyan hover:text-white transition-colors">
                                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Hackathon;

import React from 'react';
import { Heart, MessageCircle, Share2, Music2 } from 'lucide-react';

const SOCIAL_POSTS = [
  {
    id: '1',
    videoUrl: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6957de72f68c12061a5c47ed.mp4',
    likes: '12.4k',
    comments: '432',
    caption: 'Bästa burgaren i stan? 🍔🔥 #bramsburger #foodie #sthlm'
  },
  {
    id: '2',
    videoUrl: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6957de72f68c12061a5c47ed.mp4',
    likes: '8.1k',
    comments: '156',
    caption: 'Om en ska äta, alla ska äta! ❤️🙌'
  },
  {
    id: '3',
    videoUrl: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6957de72f68c12061a5c47ed.mp4',
    likes: '15.9k',
    comments: '890',
    caption: 'Krispigare än så här blir det inte. 🍗✨'
  },
  {
    id: '4',
    videoUrl: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6957de72f68c12061a5c47ed.mp4',
    likes: '22k',
    comments: '1.2k',
    caption: 'När man ser maten komma till bordet... 😍'
  }
];

export const SocialFeed: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-4">SOCIALA MEDIER</p>
            <h2 className="text-6xl md:text-8xl font-display text-white uppercase leading-none">
              HÄNG MED OSS
            </h2>
          </div>
          <a 
            href="https://www.tiktok.com/@bramsburgers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-brand-green hover:border-brand-green transition-all"
          >
            <Music2 size={24} className="text-brand-green group-hover:text-white transition-colors" />
            <span className="font-black uppercase tracking-widest text-white">@BRAMSBURGERS</span>
          </a>
        </div>
      </div>

      <div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x no-scrollbar md:justify-center">
        {SOCIAL_POSTS.map((post) => (
          <div 
            key={post.id} 
            className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] rounded-[32px] overflow-hidden snap-center group shadow-2xl"
          >
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
              <source src={post.videoUrl} type="video/mp4" />
            </video>

            {/* TikTok Style Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-100 group-hover:opacity-90 transition-opacity"></div>
            
            {/* Right Side Icons */}
            <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-brand-red transition-colors cursor-pointer">
                  <Heart size={24} fill="currentColor" />
                </div>
                <span className="text-[10px] font-black text-white">{post.likes}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <span className="text-[10px] font-black text-white">{post.comments}</span>
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer">
                <Share2 size={24} fill="currentColor" />
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-6 left-6 right-16">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full border-2 border-brand-green overflow-hidden">
                   <img src="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/68c81d1609ca6251d5f88949.png" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <span className="font-black text-white text-sm">bramsburgers</span>
              </div>
              <p className="text-white/90 text-xs font-bold leading-relaxed line-clamp-2">
                {post.caption}
              </p>
            </div>

            {/* Center Play Icon (Only visible on group-hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
               <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Music2 size={40} className="text-white animate-pulse" />
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-12 text-center">
         <p className="text-white/30 font-bold uppercase text-[10px] tracking-[0.2em]">
           Följ oss för dagliga uppdateringar, tävlingar och bakom kulisserna material.
         </p>
      </div>
    </section>
  );
};
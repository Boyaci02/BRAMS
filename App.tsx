import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BentoGrid } from './components/BentoGrid.tsx';
import { Features } from './components/Features.tsx';
import { Menu } from './components/Menu.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Lifestyle } from './components/Lifestyle.tsx';
import { SocialFeed } from './components/SocialFeed.tsx';
import { Footer } from './components/Footer.tsx';
import { FoodMarquee } from './components/FoodMarquee.tsx';
import { MenuView } from './components/views/MenuView.tsx';
import { AboutView } from './components/views/AboutView.tsx';
import { ContactView } from './components/views/ContactView.tsx';
import { LocationView } from './components/views/LocationView.tsx';
import { LocationsListView } from './components/views/LocationsListView.tsx';
import { View, LocationData } from './types.ts';

const LOCATIONS: Record<string, LocationData> = {
  'location-skarholmen': {
    id: 'skarholmen',
    name: 'SKÄRHOLMEN',
    address: 'Bredholmsgatan 4',
    postalCode: '127 48',
    city: 'Skärholmen',
    image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695804a805b511f1619faa7d.jpg',
    hours: { weekdays: '10:00 - 20:00', weekends: '11:00 - 18:00' },
    phone: '08-123 45 67'
  },
  'location-kista': {
    id: 'kista',
    name: 'KISTA',
    address: 'Kistagången 1',
    postalCode: '164 40',
    city: 'Kista',
    image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695804a87483034ddaa904ab.jpg',
    hours: { weekdays: '10:00 - 21:00', weekends: '10:00 - 21:00' },
    phone: '08-234 56 78'
  },
  'location-huddinge': {
    id: 'huddinge',
    name: 'HUDDINGE',
    address: 'Huddinge Centrum',
    postalCode: '141 47',
    city: 'Huddinge',
    image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695804a8e7c613c3546a2f1a.jpg',
    hours: { weekdays: '10:00 - 20:00', weekends: '11:00 - 18:00' },
    phone: '08-345 67 89'
  },
  'location-uppsala': {
    id: 'uppsala',
    name: 'UPPSALA',
    address: 'Gränbystaden',
    postalCode: '754 31',
    city: 'Uppsala',
    image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695804a87483030293a904aa.jpg',
    hours: { weekdays: '10:00 - 20:00', weekends: '10:00 - 20:00' },
    phone: '018-123 45 67'
  }
};

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflowY = 'auto';
  }, [currentView]);

  const renderView = () => {
    if (currentView.startsWith('location-')) {
      return <LocationView location={LOCATIONS[currentView]} onNavigate={setCurrentView} />;
    }

    switch (currentView) {
      case 'menu': return <MenuView />;
      case 'about': return <AboutView />;
      case 'contact': return <ContactView />;
      case 'locations': return <LocationsListView locations={Object.values(LOCATIONS)} onSelect={(id) => setCurrentView(`location-${id}` as View)} />;
      default:
        return (
          <>
            <Hero />
            <div className="relative z-10 bg-brand-cream">
              {/* Fix: Passed onNavigate prop to BentoGrid */}
              <BentoGrid onNavigate={setCurrentView} />
              <FoodMarquee />
              <Features />
              <Menu onNavigate={setCurrentView} />
              <Testimonials />
              <Lifestyle onNavigate={setCurrentView} />
              <SocialFeed />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}

export default App;
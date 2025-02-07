import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Phone, Newspaper, Volleyball, Home, User, LogOut } from 'lucide-react';

interface RadioVivaProps {
  usuario?: string;
}

const RadioViva: React.FC<RadioVivaProps> = ({ usuario = 'Usuario' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
      if (audioRef.current) audioRef.current.volume = 0;
    } else {
      setVolume(previousVolume);
      if (audioRef.current) audioRef.current.volume = previousVolume;
    }
  };

  const handleSectionClick = (section: string) => {
    if (section === 'whatsapp') {
      window.location.href = 'https://wa.me/0983496799';
    } else {
      setActiveSection(activeSection === section ? null : section);
    }
  };

  interface MenuItem {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  }

  const menuItems: MenuItem[] = [
    { id: 'music', icon: <Music size={24} />, title: 'MÚSICA', subtitle: 'Los mejores de los tiempos' },
    { id: 'news', icon: <Newspaper size={24} />, title: 'NOTICIAS', subtitle: 'Siempre informando' },
    { id: 'sports', icon: <Volleyball size={24} />, title: 'DEPORTE', subtitle: 'Radio Viva la única' },
    { id: 'whatsapp', icon: <Phone size={24} />, title: 'WhatsApp', subtitle: '0983496799' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className=" bg-gradient-to-br from-gray-900 to-gray-800 shadow">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">
              Bienvenid@ Milka Mosquera
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className="text-white hover:text-blue-600">INICIO</a>
              <div className="relative group ">
                <button className="bg-gray-800 rounded-full overflow-hidden p-1 px-2 text-white hover:text-blue-600">M</button>
                <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg rounded-md  w-48">
                  <a href="/perfil" className="block px-4 py-2 hover:bg-gray-100">
                    <User className="inline mr-2" size={16} /> Mi Perfil
                  </a>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    <LogOut className="inline mr-2" size={16} /> Cerrar sesión
                  </a>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              <div className="space-y-2">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="/pagina_principal" className="block px-4 py-2 hover:bg-gray-100">
              <Home className="inline mr-2" size={16} /> INICIO
            </a>
            <a href="/perfil" className="block px-4 py-2 hover:bg-gray-100">
              <User className="inline mr-2" size={16} /> Mi Perfil
            </a>
            <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
              <LogOut className="inline mr-2" size={16} /> Cerrar sesión
            </a>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">¡Bienvenido a Radio VIVA!</h2>
          <p className="text-gray-600">
            Nos alegra tenerte aquí - Explora nuestras últimas novedades y disfruta de buena música
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8 h-60">
          <img
            src="/resource/LogoRadio.gif"
            alt="Radio Logo"
            className="max-w-xs"
          />
        </div>

        {/* Radio Player */}
        <div className="bg-black rounded-lg shadow-md p-6 mb-8 w-500">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePlayPause}
              className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <div className="flex-1 mx-4">
              <div className="font-bold text-white">Radio Viva (Quevedo)</div>
              <div className="text-sm text-gray-600">91.1 FM - En vivo</div>
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={handleMute} className="p-2 text-gray-600 hover:text-blue-600">
                {volume === 0 ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24"
              />
            </div>
          </div>

          <audio ref={audioRef}>
            <source src="/music/J Balvin - Rio (Official Video).mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento audio.
          </audio>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className="flex items-center p-4 bg-blue-950  rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mr-4 text-red-600">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="font-bold text-white">{item.title}</div>
                <div className="text-sm text-gray-400">{item.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeSection === 'music' && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Lo Mejor de los tiempos</h3>
            <img
              src="/resource/JulioJaramillo.png"
              alt="Julio Jaramillo"
              className="w-full max-w-md mx-auto mb-4"
            />
            <audio controls className="w-full">
              <source src="/music/Nuestro Juramento _ Julio Jaramillo.mp4" type="audio/mp3" />
              Tu navegador no soporta el elemento audio.
            </audio>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Novedades</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>¡Nuevo sistema de Administración!</li>
              <li>Estamos trabajando para Próxima actualización más detalles en 2 días.</li>
              <li>Tenemos Nuevo diseño de perfil ya disponible.</li>
            </ul>
          </div>
        )}

        {activeSection === 'sports' && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Deportes "Noche Amarilla"</h3>
            <img
              src="/resource/Barcelona.jpg"
              alt="Deportes"
              className="w-full max-w-md mx-auto"
            />
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; Milka Mosquera 2025. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default RadioViva;
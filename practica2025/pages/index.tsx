import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from "next/router";

const loginRadio = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    contrasena: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.contrasena) {
      setError('Por favor complete todos los campos');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingrese un correo electrónico válido');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    //logica para iniciar sesión...
    try {
      const response = await fetch('http://localhost:8080/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', // Añade esto
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          contrasena: formData.contrasena
        })
      });

      if (!response.ok) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      const data = await response.json();
      
      // Si la autenticación es exitosa:
      // 1. Aquí podrías guardar el token en localStorage si el backend lo envía
      if (data.id) {
        localStorage.setItem('authToken', data.id);
       }
      
      // 2. Redirigir al usuario 
      router.push('/dashboard'); 
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20">
          {/* Logo Section with Glow Effect */}
          <div className="text-center relative">
            <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full"></div>
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse opacity-25"></div>
              <img
                src="/resource/LogoRadioViva.png"
                alt="Radio Viva"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  USUARIO
                </label>
                <div className="relative">
                  <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-white/50 transition-all"
                    placeholder="Ingresa tu usuario"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  CONTRASEÑA
                </label>
                <div className="relative">
                  <input
                    id="contrasena"
                    type="password"
                    name="contrasena"
                    value={formData.contrasena}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-white/50 transition-all"
                    placeholder="••••••••••"
                  />
                </div>
              </div>

              {/* Login Button */}
              
              <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-red-600 to-red-500 text-white mt-6 py-3 px-4 rounded-lg hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'CARGANDO...' : 'INGRESAR'}
            </button>
            </form>

            {/* Forgot Password */}
            <div className="text-center">
              <Link 
                href="/forgot-password" 
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
              <Link href="/registrar">
                <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 px-8 rounded-lg hover:from-orange-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                  Registrarse
                </button>
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
};

export default loginRadio;
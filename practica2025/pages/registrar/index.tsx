import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/router';

const RegistroUsuario = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    contrasena: ''
  });
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mensajesError, setMensajesError] = useState([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Aquí iría tu lógica de envío de datos al backend
      // Por ejemplo:
      // await axios.post('/api/registro', formData);
      
      // Después de un registro exitoso, redirigimos al usuario
      router.push('/dashboard'); // Cambia '/dashboard' por la ruta a la que quieras redirigir
    } catch (error) {
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-[1.02]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Crear cuenta
          </h2>
          <p className="text-gray-500 mt-2">
            Únete a nuestra comunidad
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {mensajesError.length > 0 && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">
              <ul className="list-disc pl-4">
                {mensajesError.map((mensaje, index) => (
                  <li key={index}>{mensaje}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-6">
            {/* Usuario */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="usuario"
                placeholder="Nombre de Usuario"
                className="w-full px-4 py-3 bg-white/5 pl-10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-white/50 transition-all"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                className="w-full px-4 py-3 bg-white/5 pl-10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-white/50 transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contraseña */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type={mostrarContrasena ? 'text' : 'password'}
                name="contrasena"
                placeholder="Contraseña"
                className="w-full px-4 py-3 bg-white/5 pl-10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-white/50 transition-all"
                value={formData.contrasena}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setMostrarContrasena(!mostrarContrasena)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
              >
                {mostrarContrasena ? 
                  <EyeOff className="h-5 w-5" /> : 
                  <Eye className="h-5 w-5" />
                }
              </button>
            </div>
            
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg text-lg font-semibold hover:opacity-90 transform transition-all hover:scale-[1.02] focus:ring-2 focus:ring-blue-300"
            >
              Crear cuenta
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">
              ¿Ya tienes cuenta?{' '}
              <a 
                href="/" 
                className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                Inicia sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
import React from 'react';
import { User, Mail, ArrowLeft, Camera, Edit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProfileProps {
  usuario: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ usuario, email }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-8 text-white/90 tracking-tight">
                  Mi Perfil
                </h2>
                
                {/* User Avatar Section */}
                <div className="relative mb-10 group">
                  {/* Centered glow effect */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
                  
                  {/* Avatar container */}
                  <div className="relative w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 overflow-hidden">
                    <User className="w-20 h-20 text-white/70" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* User Info Cards */}
                <div className="space-y-6">
                  {/* Username Card */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-red-400" />
                        <span className="text-white/60 font-medium">Usuario:</span>
                        <span className="text-white/90">Milka Mosquera</span>
                      </div>
                      <div className="ml-auto">
                        <Edit className="w-4 h-4 text-white/40 hover:text-white/90 cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-orange-400" />
                        <span className="text-white/60 font-medium">Correo:</span>
                        <span className="text-white/90">milka@gmail.com</span>
                      </div>
                      <div className="ml-auto">
                        <Edit className="w-4 h-4 text-white/40 hover:text-white/90 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Button */}
                <div className="mt-10">
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/dashboard'}
                    className="bg-white/5 text-white border-white/20 hover:bg-white/10 transition-all duration-300 space-x-2 px-6 py-5 rounded-xl transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Volver a Inicio</span>
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
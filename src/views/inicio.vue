<template>
  <div class="bg-background-light dark:bg-background-dark font-display text-moss transition-colors duration-300 min-h-screen relative overflow-x-hidden">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="organic-blob bg-primary/20 w-[500px] h-[500px] -top-20 -left-20 rounded-full"></div>
      <div class="organic-blob bg-earth/10 w-[600px] h-[600px] -bottom-40 -right-20 rounded-full"></div>
    </div>

    <nav class="relative z-10 px-6 py-8 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-background-dark">
          <span class="material-icons">auto_awesome</span>
        </div>
        <span class="text-xl font-bold tracking-tight text-moss dark:text-primary uppercase">Numera</span>
      </div>
      <div class="flex items-center gap-6">
        <a class="text-sm font-medium hover:text-primary transition-colors text-moss dark:text-white/80" href="#">Admin</a>
        <router-link to="/login" class="px-6 py-2.5 bg-moss text-white dark:bg-primary dark:text-background-dark rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-moss/20 dark:shadow-primary/20">
          Iniciar Sesión
        </router-link>
      </div>
    </nav>

    <main class="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      <div class="mb-16 lg:mb-0">
        <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/20 text-moss dark:text-primary rounded-full">
          Crecimiento Espiritual
        </span>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-moss dark:text-white">
          Tu Camino Espiritual <span class="text-primary italic">Escrito</span> en los Números
        </h1>
        <p class="text-lg md:text-xl text-moss/70 dark:text-white/70 mb-8 max-w-xl leading-relaxed">
          Comienza tu viaje de autodescubrimiento y sincronización con la naturaleza.
        </p>
        <div class="space-y-6">
          <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl group border border-moss/10">
            <img alt="Lush green ferns and mystical forest light" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"/>
            <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 flex items-center gap-4 text-white">
              <div class="flex -space-x-3">
                <img alt="User profile photo" class="w-10 h-10 rounded-full border-2 border-background-dark object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"/>
                <img alt="User profile photo" class="w-10 h-10 rounded-full border-2 border-background-dark object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"/>
                <img alt="User profile photo" class="w-10 h-10 rounded-full border-2 border-background-dark object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"/>
              </div>
              <p class="text-sm font-medium">Conéctate con la sabiduría de la tierra</p>
            </div>
          </div>
          <div class="bg-moss/5 dark:bg-white/5 p-6 rounded-2xl border border-moss/10 dark:border-white/10">
            <p class="text-lg md:text-xl text-moss dark:text-white/90 leading-relaxed font-medium">
              Regístrate hoy y recibe una lectura numerológica personalizada 
              <span class="text-moss dark:text-primary font-bold custom-underline ml-1 uppercase text-sm tracking-wider">totalmente gratis</span>
            </p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 bg-primary/5 blur-3xl -z-10 rounded-full"></div>
        <div class="bg-white/90 dark:bg-background-dark/80 backdrop-blur-xl p-8 md:p-12 rounded-xl shadow-xl border border-moss/10 dark:border-white/10">
          <div class="mb-8 text-center lg:text-left">
            <h2 class="text-2xl font-bold text-moss dark:text-white mb-2">Inicia tu Evolución Diaria</h2>
            <p class="text-moss/60 dark:text-white/60">Sincroniza tu vibración personal con los ritmos de la naturaleza.</p>
          </div>
          
          <form @submit.prevent="registrarUsuario" class="space-y-5">
            <div class="space-y-1">
              <label class="block text-xs font-bold uppercase tracking-wider text-moss/50 dark:text-white/40 ml-4 mb-1">Nombre Completo</label>
              <input v-model="form.nombre" class="w-full bg-background-light dark:bg-white/5 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary text-moss dark:text-white placeholder:text-moss/30" placeholder="Ej. Aurora Selva" type="text" required/>
            </div>
            <div class="space-y-1">
              <label class="block text-xs font-bold uppercase tracking-wider text-moss/50 dark:text-white/40 ml-4 mb-1">Correo Electrónico</label>
              <input v-model="form.email" class="w-full bg-background-light dark:bg-white/5 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary text-moss dark:text-white placeholder:text-moss/30" placeholder="tu@energia.com" type="email" required/>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase tracking-wider text-moss/50 dark:text-white/40 ml-4 mb-1">Contraseña</label>
                <input v-model="form.password" class="w-full bg-background-light dark:bg-white/5 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary text-moss dark:text-white placeholder:text-moss/30" placeholder="••••••••" type="password" required/>
              </div>
              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase tracking-wider text-moss/50 dark:text-white/40 ml-4 mb-1">Fecha de Nacimiento</label>
                <input v-model="form.fecha_nacimiento" class="w-full bg-background-light dark:bg-white/5 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary text-moss dark:text-white cursor-pointer" type="date" required/>
              </div>
            </div>
            <button class="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-full shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group" type="submit">
              Descubrir mi Propósito
              <span class="material-icons group-hover:translate-x-1 transition-transform">spa</span>
            </button>
          </form>

          <div class="mt-8 pt-8 border-t border-moss/10 dark:border-white/10 text-center">
            <p class="text-sm text-moss/60 dark:text-white/60">
              ¿Ya formas parte de la comunidad? 
              <router-link to="/login" class="text-primary font-bold hover:underline underline-offset-4 ml-1">Accede aquí</router-link>
            </p>
          </div>
        </div>
        <div class="mt-8 flex justify-center gap-6">
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center text-moss dark:text-white mb-2">
              <span class="material-icons">self_improvement</span>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-tighter opacity-50">Espiritual</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center text-moss dark:text-white mb-2">
              <span class="material-icons">nature</span>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-tighter opacity-50">Conexión</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center text-moss dark:text-white mb-2">
              <span class="material-icons">auto_graph</span>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-tighter opacity-50">Vibración</span>
          </div>
        </div>
      </div>
    </main>
    <footer class="mt-12 px-6 py-12 border-t border-moss/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p class="text-sm text-moss/40">© 2024 Numera. Tu guía espiritual a través de la naturaleza.</p>
      <div class="flex gap-6">
        <a class="text-moss/40 hover:text-primary transition-colors" href="#"><span class="material-icons text-xl">public</span></a>
        <a class="text-moss/40 hover:text-primary transition-colors" href="#"><span class="material-icons text-xl">spa</span></a>
        <a class="text-moss/40 hover:text-primary transition-colors" href="#"><span class="material-icons text-xl">auto_stories</span></a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { postData } from '../services/apiCliente.js';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const form = ref({
  nombre: '',
  email: '',
  password: '',
  fecha_nacimiento: '' // Ajustado al nombre del backend
});

// MAGIA: Inyectar Tailwind y Google Fonts dinámicamente al montar el componente
onMounted(() => {
  // 1. Inyectar Google Fonts
  const fonts = document.createElement('link');
  fonts.href = "https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap";
  fonts.rel = "stylesheet";
  document.head.appendChild(fonts);

  // 2. Inyectar Material Icons
  const icons1 = document.createElement('link');
  icons1.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
  icons1.rel = "stylesheet";
  document.head.appendChild(icons1);

  const icons2 = document.createElement('link');
  icons2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
  icons2.rel = "stylesheet";
  document.head.appendChild(icons2);

  // 3. Configuración de Tailwind (Igualita a tu script)
  const twConfig = document.createElement('script');
  twConfig.id = "tailwind-config";
  twConfig.innerHTML = `
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#13ec5b",
            "background-light": "#f6f8f6",
            "background-dark": "#102216",
            "moss": "#3a5a40",
            "earth": "#582f0e",
            "leaf": "#a3b18a",
          },
          fontFamily: {
            "display": ["Epilogue", "sans-serif"]
          },
          borderRadius: {
            "DEFAULT": "1rem",
            "lg": "2rem",
            "xl": "3rem",
            "full": "9999px"
          },
        },
      },
    }
  `;
  document.head.appendChild(twConfig);

  // 4. Inyectar el script de Tailwind CDN
  const twScript = document.createElement('script');
  twScript.src = "https://cdn.tailwindcss.com?plugins=forms,container-queries";
  document.head.appendChild(twScript);
});

async function registrarUsuario() {
  try {
    await postData('usuario', form.value);
    
    $q.notify({
      color: 'positive',
      message: '¡Bienvenido a la comunidad!',
      icon: 'spa'
    });
    
    router.push('/login');
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: error.response?.data?.errors?.[0]?.msg || 'Error en el registro',
      icon: 'warning'
    });
  }
}
</script>

<style scoped>
@import '../styles/inicio.css';
</style>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { postData } from "../services/apiCliente.js";
import { setCssVar } from "quasar";
import { useNotifications } from "../composables/useNotify.js";
// 1. Importamos la tienda del usuario
import { useUsuarioStore } from "../stores/Usuario.js";

// Configuramos el color de Quasar
setCssVar("primary", "#13ec5b");

const router = useRouter();
const { success, error } = useNotifications();

// 2. Instanciamos la tienda
const usuarioStore = useUsuarioStore();

const form = ref({
  nombre: "",
  email: "",
  password: "",
  fecha_nacimiento: "",
});

// Referencia para controlar que el calendario se cierre correctamente
const qDateProxy = ref(null);

const iconos = [
  { icon: "self_improvement", label: "Espiritual" },
  { icon: "nature", label: "Conexión" },
  { icon: "auto_graph", label: "Vibración" },
];

async function registrarUsuario() {
  try {
    const payload = {
      ...form.value,
      rol: 0,
    };

    const res = await postData("/usuario", payload);
    console.log(res);

    // 3. Guardamos el email en Pinia para usarlo en las siguientes vistas
    usuarioStore.email = res.usuario.email;

    // Notificación de éxito y redirección
    success("¡Registro exitoso!", "Preparando tu lectura numerológica...");
    router.push("/lecturaPrincipal");
  } catch (err) {
    console.log(err);
    // Notificación de error
    const mensajeError =
      err.response?.data?.message ||
      "No se pudo completar el registro. Por favor, intenta de nuevo.";
    error("Error en el registro", mensajeError);
  }
}
</script>

<template>
  <div class="numera-container q-pb-xl">
    <div class="blob blob-primary"></div>
    <div class="blob blob-earth"></div>

    <header
      class="row justify-between items-center q-pa-lg max-width q-mx-auto relative-position z-top"
    >
      <div class="row items-center q-gutter-sm cursor-pointer">
        <q-avatar
          color="primary"
          text-color="dark"
          icon="auto_awesome"
          size="40px"
        />
        <span
          class="text-h6 text-weight-bold text-uppercase text-moss tracking-tight"
          >Numera</span
        >
      </div>

      <div class="row items-center q-gutter-md">
        <q-btn
          outline
          color="moss"
          label="Admin"
          class="text-weight-bold"
          rounded
          no-caps
          to="/admin"
        />

        <q-btn
          to="/login"
          label="Iniciar Sesión"
          color="primary"
          text-color="dark"
          rounded
          unelevated
          class="text-weight-bold shadow-soft"
          no-caps
        />
      </div>
    </header>

    <main
      class="row items-center q-col-gutter-xl q-pa-lg max-width q-mx-auto relative-position z-top"
      style="min-height: 80vh"
    >
      <div class="col-12 col-md-6">
        <q-chip
          color="primary"
          text-color="moss"
          class="text-weight-bold text-uppercase q-mb-lg bg-primary-light"
          outline
          square
        >
          Crecimiento Espiritual
        </q-chip>

        <h1
          class="text-h2 text-weight-bold text-moss q-mb-md line-height-tight"
        >
          Tu Camino Espiritual
          <span class="text-primary text-italic">Escrito</span> en los Números
        </h1>

        <p class="text-h6 text-moss opacity-8 q-mb-xl text-weight-regular">
          Comienza tu viaje de autodescubrimiento y sincronización con la
          naturaleza.
        </p>

        <q-card class="image-showcase q-mb-lg shadow-24 border-radius-xl" flat>
          <q-img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560"
            height="280px"
          >
            <div
              class="absolute-bottom bg-transparent flex items-center q-gutter-md q-pa-md gradient-bottom"
            >
              <div class="row items-center avatar-group">
                <q-avatar size="40px" class="overlap border-dark"
                  ><img src="https://cdn.quasar.dev/img/avatar1.jpg"
                /></q-avatar>
                <q-avatar size="40px" class="overlap border-dark"
                  ><img src="https://cdn.quasar.dev/img/avatar2.jpg"
                /></q-avatar>
                <q-avatar size="40px" class="overlap border-dark"
                  ><img src="https://cdn.quasar.dev/img/avatar3.jpg"
                /></q-avatar>
              </div>
              <span class="text-white text-weight-medium text-body2"
                >Conéctate con la sabiduría de la tierra</span
              >
            </div>
          </q-img>
        </q-card>

        <div class="bg-moss-light q-pa-md border-radius-lg">
          <span class="text-subtitle1 text-moss text-weight-medium">
            Regístrate hoy y recibe una lectura numerológica personalizada
            <span
              class="text-primary text-weight-bold text-uppercase custom-underline"
              >totalmente gratis</span
            >
          </span>
        </div>
      </div>

      <div class="col-12 col-md-6 relative-position">
        <q-card class="glass-card q-pa-xl shadow-24" flat>
          <div class="text-center q-mb-lg">
            <h2 class="text-h5 text-weight-bold text-moss q-mb-xs">
              Inicia tu Evolución Diaria
            </h2>
            <p class="text-moss opacity-7">
              Sincroniza tu vibración personal con los ritmos de la naturaleza.
            </p>
          </div>

          <q-form @submit.prevent="registrarUsuario" class="q-gutter-y-md">
            <div>
              <div
                class="text-caption text-weight-bold text-uppercase text-moss opacity-6 q-ml-sm q-mb-xs"
              >
                Nombre Completo
              </div>
              <q-input
                v-model="form.nombre"
                placeholder="Ej. Aurora Selva"
                bg-color="white"
                color="primary"
                rounded
                outlined
                dense
                lazy-rules
                :rules="[(val) => !!val || 'Falta tu nombre']"
              />
            </div>

            <div>
              <div
                class="text-caption text-weight-bold text-uppercase text-moss opacity-6 q-ml-sm q-mb-xs"
              >
                Correo Electrónico
              </div>
              <q-input
                v-model="form.email"
                type="email"
                placeholder="tu@energia.com"
                bg-color="white"
                color="primary"
                rounded
                outlined
                dense
                lazy-rules
                :rules="[(val) => !!val || 'Falta tu correo']"
              />
            </div>

            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <div
                  class="text-caption text-weight-bold text-uppercase text-moss opacity-6 q-ml-sm q-mb-xs"
                >
                  Contraseña
                </div>
                <q-input
                  v-model="form.password"
                  type="password"
                  placeholder="••••••••"
                  bg-color="white"
                  color="primary"
                  rounded
                  outlined
                  dense
                  lazy-rules
                  :rules="[(val) => !!val || 'Crea una contraseña']"
                />
              </div>
              <div class="col-12 col-sm-6">
                <div
                  class="text-caption text-weight-bold text-uppercase text-moss opacity-6 q-ml-sm q-mb-xs"
                >
                  Fecha de Nacimiento
                </div>
                <q-input
                  v-model="form.fecha_nacimiento"
                  type="date"
                  bg-color="white"
                  color="primary"
                  rounded
                  outlined
                  dense
                  lazy-rules
                  :rules="[(val) => !!val || 'Obligatorio']"
                />
              </div>
            </div>

            <q-btn
              type="submit"
              label="Descubrir mi Propósito"
              icon-right="spa"
              color="primary"
              text-color="dark"
              class="full-width q-mt-md q-py-sm text-weight-bold"
              rounded
              unelevated
              size="lg"
            />
          </q-form>

          <q-separator class="q-my-lg bg-moss opacity-2" />

          <div class="text-center text-moss text-body2">
            ¿Ya formas parte de la comunidad?
            <router-link
              to="/login"
              class="text-primary text-weight-bold text-decoration-none hover-underline"
              >Accede aquí</router-link
            >
          </div>
        </q-card>

        <div class="row justify-center q-gutter-xl q-mt-xl">
          <div
            v-for="(item, idx) in iconos"
            :key="idx"
            class="column items-center"
          >
            <q-avatar
              color="moss"
              text-color="moss"
              :icon="item.icon"
              class="q-mb-sm bg-moss-light"
              size="50px"
            />
            <span
              class="text-moss opacity-6 text-caption text-weight-bold text-uppercase"
              style="font-size: 10px"
              >{{ item.label }}</span
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style href="../styles/inicio.css"></style>
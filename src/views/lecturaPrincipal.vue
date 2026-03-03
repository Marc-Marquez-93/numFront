<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { postData } from "../services/apiCliente.js";
import { useNotifications } from "../composables/useNotify.js";
// Importamos la nueva tienda que acabamos de crear
import { useUsuarioStore } from "../stores/Usuario.js";

const router = useRouter();
const { success, error } = useNotifications();
const usuarioStore = useUsuarioStore();

// Estados
const lecturaGenerada = ref(false);
const cargando = ref(false);
const contenidoIA = ref(""); // Aquí guardaremos lo que responda Gemini

// Llamada a la API
const generarLectura = async () => {
  // Validamos que el email exista en la tienda (que no esté vacío)
  if (!usuarioStore.email) {
    error(
      "Error de sesión",
      "No pudimos encontrar tu usuario. Por favor, inicia sesión nuevamente."
    );
    router.push("/login");
    return;
  }

  try {
    cargando.value = true;

    // Armamos la URL con el email de la tienda.
    // NOTA: Ajusta "/lecturas" o el prefijo que le hayas puesto a la ruta en tu app.js de Express
    const url = `/lectura/principal/${usuarioStore.email}`;
    const res = await postData(url, {});

    // Asignamos el texto que devuelve tu controlador
    // Según tu backend es: res.json({ nuevaLectura, msg: "..." })
    contenidoIA.value = res.nuevaLectura.contenido;

    success("¡Destino revelado!", res.msg);
    lecturaGenerada.value = true;
  } catch (err) {
    console.log(err);
    const mensajeError =
      err.response?.data?.msg ||
      "Las estrellas están nubladas. Intenta más tarde.";
    error("Aviso", mensajeError);
  } finally {
    cargando.value = false;
  }
};

const activarMensajeDiario = async () => {
  console.log("Botón de mensaje diario presionado");
  // Esto lo conectaremos más adelante a tu otra ruta
};

const volverInicio = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="lectura-container ornament-pattern flex column items-center q-pa-md md:q-pa-xl"
  >
    <nav
      class="fixed-top full-width q-pa-md flex justify-between items-center z-top bg-transparent"
    >
      <div
        class="row items-center q-gutter-sm cursor-pointer"
        @click="volverInicio"
      >
        <q-avatar
          color="primary"
          text-color="white"
          icon="auto_awesome"
          size="32px"
          class="shadow-3"
        />
        <span class="text-weight-bold text-moss tracking-tight text-subtitle1"
          >NUMERIA</span
        >
      </div>
      <div class="row q-gutter-md">
        <span
          class="cursor-pointer text-weight-medium text-caption hover-primary"
          >Mi Perfil</span
        >
        <span
          class="cursor-pointer text-weight-medium text-caption hover-primary"
          >Ajustes</span
        >
      </div>
    </nav>

    <main
      class="full-width max-width q-mt-xl q-mb-xl flex flex-center"
      style="max-width: 900px; min-height: 80vh"
    >
      <div
        v-if="!lecturaGenerada"
        class="text-center column items-center justify-center"
      >
        <q-icon
          name="auto_graph"
          size="6rem"
          color="primary"
          class="q-mb-md opacity-8"
        />
        <h2 class="text-h4 text-weight-bold text-moss q-mb-lg">
          Tu destino está alineado
        </h2>
        <p
          class="text-body1 text-earth opacity-8 q-mb-xl"
          style="max-width: 500px"
        >
          Nuestra IA está lista para interpretar la vibración numérica de tu
          fecha de nacimiento.
        </p>

        <q-btn
          @click="generarLectura"
          :loading="cargando"
          color="primary"
          text-color="dark"
          label="Descubrir mi Lectura Principal"
          icon-right="stars"
          size="xl"
          rounded
          unelevated
          class="text-weight-bold shadow-soft hover-scale q-px-xl py-sm"
          no-caps
        >
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Canalizando energía...
          </template>
        </q-btn>
      </div>

      <div v-else class="full-width">
        <div class="row justify-center q-mb-lg">
          <div
            class="bg-primary opacity-3"
            style="width: 64px; height: 4px; border-radius: 4px"
          ></div>
        </div>

        <div class="lectura-card-wrapper q-mb-xl relative-position group">
          <q-icon
            name="eco"
            size="3rem"
            class="text-moss ornament-leaf leaf-top-left"
          />
          <q-icon
            name="eco"
            size="3rem"
            class="text-moss ornament-leaf leaf-bottom-right"
          />

          <div class="q-pa-lg md:q-pa-xl text-center relative-position z-top">
            <div class="q-mb-lg">
              <p
                class="text-caption text-weight-bold text-primary text-uppercase tracking-widest q-mb-sm"
              >
                Mensaje de los Astros
              </p>
              <h1
                class="text-h4 text-weight-bold text-moss"
                style="line-height: 1.2"
              >
                Tu Lectura Espiritual
              </h1>
            </div>

            <div
              class="q-mx-auto text-body1 text-earth opacity-8 bg-moss-light q-pa-md border-radius-lg"
              style="max-width: 650px; line-height: 1.8; text-align: left"
            >
              <p style="white-space: pre-line">{{ contenidoIA }}</p>
            </div>

            <div
              class="row items-center justify-center q-gutter-x-md q-py-md q-mt-md"
            >
              <div class="bg-grey-4" style="height: 1px; width: 48px"></div>
              <q-icon name="stars" color="primary" size="sm" />
              <div class="bg-grey-4" style="height: 1px; width: 48px"></div>
            </div>
          </div>
        </div>

        <div class="text-center q-px-md q-mt-xl">
          <div class="q-mx-auto" style="max-width: 450px">
            <p
              class="text-h6 text-moss text-weight-medium q-mb-lg"
              style="line-height: 1.5"
            >
              Si quieres saber más de ti, puedes recibir tu mensaje espiritual
              diario :)
            </p>
          </div>

          <div class="column items-center q-gutter-y-lg">
            <div class="column items-center q-gutter-y-sm">
              <q-btn
                @click="activarMensajeDiario"
                color="primary"
                text-color="dark"
                label="Activar Mensaje Diario"
                icon="notifications_active"
                size="lg"
                rounded
                unelevated
                class="text-weight-bold shadow-4 hover-scale q-px-xl q-py-md"
                no-caps
              />
              <p
                class="text-caption text-grey-6 text-uppercase text-weight-medium q-mt-sm tracking-widest"
                style="font-size: 10px"
              >
                Suscripción Premium • Cancela cuando quieras
              </p>
            </div>
            <span
              class="cursor-pointer text-earth opacity-6 hover-primary text-caption text-weight-medium"
              style="
                text-decoration: underline;
                text-underline-offset: 4px;
                transition: color 0.3s;
              "
            >
              Continuar como principiante
            </span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style href="../styles/lecturaPrincipal.css"></style>
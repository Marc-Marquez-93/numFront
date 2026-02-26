<script setup>
import { ref } from 'vue';
import { postData } from '../services/apiCliente.js';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const form = ref({
  nombre: '',
  email: '',
  password: '',
  fecha_nacimiento: ''
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
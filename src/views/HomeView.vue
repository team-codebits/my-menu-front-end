<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Sobre",
    route: "/about",
  },
  {
    label: "Login",
    route: "/login",
  },
  {
    label: "SignUp",
    route: "/signup",
  },
  {
    label: "Dashboard",
    route: "/dashboard",
  },
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </div>

  <RouterView />
  <main></main>
</template>

<style scoped></style>

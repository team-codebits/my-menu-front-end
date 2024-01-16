<script>
import MegaMenu from "primevue/megamenu";
import Dashboard from "../components/admin/Dashboard.vue";
import Users from "../components/admin/Users.vue";
import Menus from "../components/admin/Menus.vue";
import Team from "../components/admin/Team.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    MegaMenu,
    Dashboard,
    Users,
    Menus,
    Team,
  },
  setup() {
    const onMenuItemClick = (item) => {
      console.log(item);
      selectedItem.value = item;
    };

    const selectedItem = ref("Dashboard");

    const items = ref([
      {
        label: "Dashboard",
        command: () => onMenuItemClick("Dashboard"),
      },
      {
        label: "Usuários",
        command: () => onMenuItemClick("Usuários"),
      },
      {
        label: "Cardápios",
        command: () => onMenuItemClick("Cardápios"),
      },
      {
        label: "Equipe",
        command: () => onMenuItemClick("Equipe"),
      },
    ]);

    const componentMapping = {
      Dashboard: Dashboard,
      Usuários: Users,
      Cardápios: Menus,
      Equipe: Team,
    };

    return { items, selectedItem, onMenuItemClick, componentMapping };
  },
};
</script>

<template>
  <div class="wrapper">
    <aside class="left-sidebar">
      <div class="card">
        <MegaMenu :model="items" orientation="vertical" />
      </div>
    </aside>
    <section class="content">
      <component :is="componentMapping[selectedItem]"></component>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.left-sidebar {
  width: 20%;
  background-color: #f0f0f0;
  padding: 20px;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: aquamarine;
}
</style>

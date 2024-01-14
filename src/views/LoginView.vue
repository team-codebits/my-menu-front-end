<template>
  <section class="login">
    <h1>ENTRE NA SUA CONTA</h1>
    <DynamicForm :schema="formSchema" />
  </section>
</template>

<script>
import DynamicForm from "@/components/DynamicForm.vue";
import * as Yup from "yup";

export default {
  components: {
    DynamicForm,
  },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: "Email",
          name: "email",
          as: "input",
          rules: Yup.string()
            .email("Digite um e-mail válido")
            .required("Campo obrigatório"),
          errorMessage: {
            email: "Por favor, digite um e-mail válido.",
            required: "Este campo é obrigatório.",
          },
        },
        {
          label: "Senha",
          name: "password",
          as: "input",
          type: "password",
          rules: Yup.string()
            .min(6, "A senha deve ter pelo menos 6 caracteres")
            .required("Campo obrigatório"),
        },
      ],
    };

    return {
      formSchema,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

.login {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-family: "Inter", sans-serif;
}
</style>

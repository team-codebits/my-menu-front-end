<template>
  <p>TReste</p>
  <DynamicForm :schema="formSchema" />
</template>

<script>
import DynamicForm from "@/components/DynamicForm.vue";

export default {
  components: {
    DynamicForm,
  },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: "Your Name",
          name: "name",
          as: "input",
        },
        {
          label: "Your Email",
          name: "email",
          as: "input",
        },
        {
          label: "Your Password",
          name: "password",
          as: "input",
        },
      ],
    };

    return {
      formSchema,
    };
  },
};
</script>

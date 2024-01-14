<template>
  <Form class="form">
    <div
      class="form-field"
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage
        as="div"
        class="error-message"
        :name="name"
        v-slot="{ message }"
      >
        <p>{{ message }}</p></ErrorMessage
      >
    </div>

    <div class="buttons">
      <button>Entrar</button> <button>Cria Conta</button>
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "LoginForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

.form {
  background-color: #2d2d2d;
  padding: 30px;
  border-radius: 10px;
  color: #fff; /* Cor do texto */
  font-family: "Roboto", sans-serif;
  width: 270px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input,
select,
textarea {
  box-sizing: border-box; /* Garante que a largura inclua a borda e o preenchimento */
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #111315;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
}

button:hover {
  background-color: #0056b3;
  color: black;
}

.error-message {
  color: #ff3333;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
}

.form-field {
  margin-top: 10px;
  width: 100%;
}
</style>

import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const isLogin = ref(Date.now() % 2 === 0);

  return {
    isLogin,
    logout() {
      isLogin.value = false;
    },
    login() {
      isLogin.value = true;
    },
  };
});

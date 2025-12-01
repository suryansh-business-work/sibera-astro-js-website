export const appConfig = {
  baseUrl: import.meta.env.DEV ? "http://localhost:5173" : "https://app.sibera.work",
  get urls() {
    return {
      login: `${this.baseUrl}/login`,
      signup: `${this.baseUrl}/signup`,
    };
  },
};

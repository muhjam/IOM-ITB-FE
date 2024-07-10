// import dotenv from "dotenv";
// dotenv.config();

export default class ConfigProvider {
  static get CONFIG() {
    return {
      APPLICATIONINSIGHTS_CONNECTION_STRING:
        "$APPLICATIONINSIGHTS_CONNECTION_STRING",
      DEVCODE_API_URL: "$DEVCODE_API_URL",
      DEVCODE_GETHIRED_API: "$DEVCODE_GETHIRED_API",
      DEVCODE_URL: "$DEVCODE_URL",
      DEVCODE_WEB_URL: "$DEVCODE_WEB_URL",
      HARDCODE_TOKEN: "$HARDCODE_TOKEN",
      DEVCODE_BLOG_URL: "$DEVCODE_BLOG_URL",
      GETHIRED_WEB_URL: "$GETHIRED_WEB_URL",
      GETHIRED_CDN_URL: "$GETHIRED_CDN_URL",
      ONESIGNAL_APP_ID: "$VUE_APP_ONESIGNAL_APP_ID",
      ONESIGNAL_SAFARI_ID: "$VUE_APP_ONESIGNAL_SAFARI_ID",
      DEVCODE_RENDER_URL: "$DEVCODE_RENDER_URL",
      DEVCODE_GUIDE_URL: "$DEVCODE_GUIDE_URL",
      DEFAULT_TIMEZONE: "Asia/Jakarta",
      CODE_EXERCISES: [
        {
          title: "Level 1",
          fullTitle: "Devcode Latihan Coding",
          desc: "Latihan Coding Logic",
          type: "LOGIC",
          slug: "devcode-latihan",
          difficulty: "Starter",
          maxScore: 20,
        },
      ],
      FRONTEND_EXERCISES: [
        {
          title: "Level 1",
          fullTitle: "Starter Frontend Level 1 : Deploy Hello World",
          desc: "Deploy Hello World",
          type: "FE",
          slug: "fe-starter-1",
          difficulty: "Starter",
          maxScore: 20,
        },
        {
          title: "Level 2",
          fullTitle:
            "Starter Frontend Level 2 : Menampilkan list kontak dari API",
          desc: "Menampilkan list kontak dari API",
          type: "FE",
          slug: "fe-starter-2",
          difficulty: "Starter",
          maxScore: 60,
        },
        {
          title: "Level 3",
          fullTitle: "Starter Frontend Level 3 : Menambahkan kontak baru",
          desc: "Menambahkan kontak baru",
          type: "FE",
          slug: "fe-starter-3",
          difficulty: "Starter",
          maxScore: 80,
        },
        {
          title: "Level 4",
          fullTitle:
            "Starter Frontend Level 4 : Menghapus dan Mengubah data kontak",
          desc: "Menghapus dan mengubah kontak",
          type: "FE",
          slug: "fe-starter-4",
          difficulty: "Starter",
          maxScore: 130,
        },
        {
          title: "Level 5",
          fullTitle: "Starter Frontend Level 5 : Validasi form",
          desc: "Validasi Form",
          type: "FE",
          slug: "fe-starter-5",
          difficulty: "Starter",
          maxScore: 180,
        },
      ],
      BACKEND_EXERCISES: [
        {
          title: "Level 1",
          fullTitle: "Starter Backend Level 1 : Build Docker Image Hello World",
          desc: "Build Docker Image Hello World",
          type: "BE",
          slug: "be-starter-1",
          difficulty: "Starter",
          maxScore: 25,
        },
        {
          title: "Level 2",
          fullTitle:
            "Starter Backend Level 2 : Membuat API untuk tambah dan tampilkan data (tanpa database)",
          desc: "(Tanpa Database) Membuat API tambah dan tampilkan kontak",
          type: "BE",
          slug: "be-starter-2",
          difficulty: "Starter",
          maxScore: 35,
        },
        {
          title: "Level 3",
          fullTitle:
            "Starter Backend Level 3 : Membuat API untuk tambah dan tampilkan data (dengan database)",
          desc: "(Dengan Database) Membuat API tambah dan tampilkan kontak",
          type: "BE",
          slug: "be-starter-3",
          difficulty: "Starter",
          maxScore: 45,
        },
        {
          title: "Level 4",
          fullTitle:
            "Starter Backend Level 4 : Membuat API untuk ubah dan hapus kontak",
          desc: " Membuat API ubah dan hapus kontak",
          type: "BE",
          slug: "be-starter-4",
          difficulty: "Starter",
          maxScore: 65,
        },
        {
          title: "Level 5",
          fullTitle: "Starter Backend Level 5 : Menambah validasi pada API",
          desc: "Menambah validasi pada API",
          type: "BE",
          slug: "be-starter-5",
          difficulty: "Starter",
          maxScore: 145,
        },
      ],
      MOBILE_EXERCISES: [
        {
          title: "Level 1",
          fullTitle: "Starter Mobile Level 1 : Build Hello World",
          desc: "Build Hello World",
          type: "MOBILE",
          slug: "mobile-starter-1",
          difficulty: "Starter",
          maxScore: 20,
        },
        {
          title: "Level 2",
          fullTitle:
            "Starter Mobile Level 2 : Menampilkan list kontak dari API",
          desc: "Menampilkan list kontak dari API",
          type: "MOBILE",
          slug: "mobile-starter-2",
          difficulty: "Starter",
          maxScore: 60,
        },
        {
          title: "Level 3",
          fullTitle: "Starter Mobile Level 3 : Menambahkan kontak baru",
          desc: "Menambahkan kontak baru",
          type: "MOBILE",
          slug: "mobile-starter-3",
          difficulty: "Starter",
          maxScore: 80,
        },
        {
          title: "Level 4",
          fullTitle:
            "Starter Mobile Level 4 : Menghapus dan Mengubah data kontak",
          desc: "Menghapus dan mengubah data kontak",
          type: "MOBILE",
          slug: "mobile-starter-4",
          difficulty: "Starter",
          maxScore: 130,
        },
        {
          title: "Level 5",
          fullTitle: "Starter Mobile Level 5 : Validasi form",
          desc: "Validasi form",
          type: "MOBILE",
          slug: "mobile-starter-5",
          difficulty: "Starter",
          maxScore: 180,
        },
      ],
      FRONTEND_CHALLENGES: [
        {
          title: "React.js - Aplikasi To Do List",
          slug: "reactjs-todolist",
          difficulty: "Easy",
        },
        {
          title: "Vue.js - Aplikasi To Do List",
          slug: "vuejs-todolist",
          difficulty: "Easy",
        },
      ],
      BACKEND_CHALLENGES: [
        {
          title: "Node.js - Aplikasi To Do List",
          slug: "nodejs-api-todolist",
          difficulty: "Easy",
        },
        {
          title: "GoLang - Aplikasi To Do List",
          slug: "golang-api-todolist",
          difficulty: "Easy",
        },
        {
          title: "Java - Aplikasi To Do List",
          slug: "java-api-todolist",
          difficulty: "Easy",
        },
        {
          title: "Python - Aplikasi To Do List",
          slug: "python-api-todolist",
          difficulty: "Easy",
        },
      ],
      DEVCODE_LOGIC_TEST_URL: "$DEVCODE_LOGIC_TEST_URL",
    };
  }

  static value(name) {
    // console.log('name',name);
    if (!(name in this.CONFIG)) {
      return;
    }

    const value = this.CONFIG[name];

    if (!value) {
      return;
    }

    if (typeof value === "string" && value.startsWith("$")) {
      // remove first character from value starts with $  (ex: $DEVCODE_API_URL) and get the value from process.env (ex: process.env.DEVCODE_API_URL)
      const envName = value.substr(1);
      const envValue =
        process.env[envName] || process.env["VUE_APP_" + envName];
      // console.log(envName, envValue);
      if (envValue) {
        return envValue;
      } else {
        return;
      }
    } else {
      return value;
    }
  }
}

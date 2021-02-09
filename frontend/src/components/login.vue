<template>
  <div class="mainstyle">
    <main class="mainstyle">
      <svg class="mainstyle svgg" viewBox="0 0 149.982 103.312">
        <g id="Сгруппировать_1" data-name="Сгруппировать 1" transform="translate(0 2.056)">
          <g id="iconmonstr-cursor-4" fill="#9100fe" stroke-linejoin="round"
             transform="translate(74.257 7.672)">
            <path
                d="M 12.52540493011475 59.59228897094727 C 12.62755489349365 48.62678527832031 13.13933181762695 35.69968414306641 13.95226383209229 22.6816463470459 C 24.58767700195313 30.23751258850098 34.96796417236328 37.97064971923828 43.55094146728516 44.77485656738281 C 32.95425033569336 44.87554931640625 28.69084739685059 45.86089324951172 25.66883277893066 47.30195617675781 C 24.05777549743652 48.0702018737793 20.75286293029785 49.64682769775391 12.52540493011475 59.59228897094727 Z"
                stroke="none"/>
            <path
                d="M 3.126968383789063 0 C 3.126968383789063 0 68.68892669677734 44.0380744934082 75.72454071044922 58.58480453491211 C 75.72454071044922 58.58480453491211 58.63338470458984 57.26634216308594 45.39656066894531 57.26634216308594 C 38.77693557739258 57.26634216308594 33.12306594848633 57.59584045410156 31.04912185668945 58.58480453491211 C 24.82800674438477 61.55134582519531 3.126968383789063 93.58353424072266 3.126968383789063 93.58353424072266 C -3.908683776855469 79.03684234619141 3.126968383789063 0 3.126968383789063 0 Z"
                fill="#9100fe" stroke="none"/>
          </g>
          <text id="T" fill="#ff8300" font-family="Sylfaen" font-size="42" transform="translate(0 42.315)">
            <tspan x="0" y="0">T</tspan>
          </text>
          <path id="Контур_2"
                d="M515.817,385.416a27.25,27.25,0,0,1,19.944-8.369h50.26c6.191,0,27.124,4.778,27.124,25.108"
                data-name="Контур 2"
                fill="none" stroke="#ff8300" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="5" transform="translate(-500.261 -376.602)"/>
          <path id="Контур_3" d="M527.283,681.6s6,6.848,17.551,6.848h31.113" data-name="Контур 3"
                fill="none" stroke="#ff8300" stroke-linecap="round" stroke-width="5"
                transform="translate(-510.131 -633.219)"/>
        </g>
      </svg>
      <h1>Войти в Твистер</h1>
      <div class="mainstyle" style="width: 100%;">
        <form action="" class="mainstyle" method="post" novalidate @submit.prevent="userLogin">
          <div v-if="logMessage" class="alert alert-warning" role="alert">
            Не правильные входные данные
          </div>
          <div class="mainstyle dsfdscx">
            <label class="mainstyle fdxads">
              <div class="mainstyle dsdssa">
                <div class="mainstyle fdsfcaqw">
                  <span class="sfasa">Адрес электронной почты</span>
                </div>
                <input autocapitalize="none"
                       autocomplete="on"
                       class="sdasd"
                       data-focusable="true"
                       dir="auto"
                       id="login"
                       spellcheck="false"
                       v-model.trim="login"
                       :class="{'is-invalid':$v.login.$error}"
                       name="session[tel_or_email]"
                       type="email"
                       @blur="$v.login.$touch()">

                <div v-if="!$v.login.required" class="invalid-feedback">{{ reqText }}</div>
                <div v-if="!$v.login.email" class="invalid-feedback">{{ LoginText }}</div>
              </div>
            </label>
          </div>
          <div class="mainstyle dsfdscx">
            <label class="mainstyle fdxads">
              <div class="mainstyle dsdssa">
                <div class="mainstyle fdsfcaqw">
                  <span class="sfasa">Пароль</span>
                </div>
                <input autocapitalize="none"
                       autocomplete="on"
                       class="sdasd"
                       data-focusable="true"
                       dir="auto"
                       id="password"
                       spellcheck="false"
                       v-model.trim="password"
                       :class="{'is-invalid':$v.password.$error}"
                       name="session[password]"
                       type="password"
                       @blur="$v.password.$touch()">
                <div v-if="!$v.password.required" class="invalid-feedback">
                  {{ reqText }}
                </div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">
                  {{ minLengthText }}
                </div>
              </div>
            </label>
          </div>

          <div class="mainstyle dsfdscx">
            <button :disabled="logBtn" class="btn btn-primary dscxza" type="submit">
              Войти
            </button>
          </div>
          <div class="mainstyle dsczasd">
            <a class="mainstyle gdfdfa" data-focusable="true" href="https://twistor.com/account/begin_password_reset"
               role="link">Забыли пароль?
            </a>

            <span aria-hidden="true" class="mainstyle bvcdsf">·</span>
            <router-link class="mainstyle gdfdfa" data-focusable="true" role="link" to="/signup">
              Зарегистрироваться в Твисторе
            </router-link>

          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import {email, minLength, required} from 'vuelidate/lib/validators'
import axios from "axios";
import {TOKEN} from "@/api/common";

export default {
  name: "login",
  data() {
    return {
      logMessage: false,
      reqText: 'Поле обязательно для заполнения',
      reqTextMin: 'обязательно',
      LoginText: 'Не похоже на почту',
      minLengthText: 'Минимальная длина 6 символов!',
      passwordConfirmText: 'Пароли не совпадают',
      login: '',
      password: ''
    }
  },
  computed: {
    logBtn() {
      return this.$v.login.$invalid ||
          this.$v.password.$invalid
    },
  }, methods: {
    userLogin() {
      this.authenticate()
      // console.log('Вы успешно зарегистрированны!')
    },
    authenticate() {
      const payload = {
        email: this.login,
        password: this.password
      }
      TOKEN.post('/obtain_token/', payload).then((response) => {
        this.$store.commit('updateToken', response.data.token)
        // get and set auth user
        const base = {
          baseURL: this.$store.state.endpoints.baseUrl,
          headers: {
            // Set your Authorization to 'JWT', not Bearer!!!
            Authorization: `JWT ${this.$store.state.jwt}`,
            'Content-Type': 'application/json'
          },
          xhrFields: {
            withCredentials: true
          }
        }
        //Делаем проверку что все ОК
        const axiosInstance = axios.create(base)
        axiosInstance({
          url: "/notes/",
          method: "get",
          params: {}
        }).then((response) => {
          this.$store.commit("setAuthUser", {authUser: response.data, isAuthenticated: true})
          this.$router.push({name: 'home'})
        })
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  validations: {
    login: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
}
</script>

<style scoped>

main {
  flex-shrink: 1;
  flex-grow: 1;
  -webkit-box-flex: 1;
  max-width: 600px;
  margin-top: 20px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-weight: 700;
  font-size: 23px;
  overflow-wrap: break-word;
  min-width: 0;
  line-height: 1.3125;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 30px 0 10px;
}

.svgg {
  align-self: center;
}

form {
  display: block;
  margin-top: 0;
}

.dsfdscx {
  padding: 10px 15px;
}

.fdxads {
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  border-width: 1px;
  border-radius: 4px;
  border-color: rgb(255, 255, 255);
}

.dsdssa {
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 2px 5px 5px;
  font-size: 19px;
}

.fdsfcaqw {
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}

.sfasa {
  padding-top: 5px;
  /*font-weight: 400;*/
  font-size: 13px;
  overflow-wrap: break-word;
  min-width: 0;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.3125;
  color: #969696;
}

.sdasd {
  text-align: left;
  outline-style: none;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  resize: none;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  border-width: 0;
  border-radius: 0;
}

.dscxza {
  font-weight: 700;
  background-color: rgb(255 131 0);
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-height: 49px;
  border-radius: 9999px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0) !important;
  border-width: 1px;
  height: 0;
  outline-style: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  padding-left: 30px;
  padding-right: 30px;
  margin: 10px;
  font-size: 19px;
  line-height: 1;
  overflow-wrap: break-word;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  text-align: center;
  max-width: 100%;
  display: flex;
}

.dsczasd {
  -webkit-box-align: baseline;
  align-items: baseline;
  flex-shrink: 1;
  display: inline-flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  text-align: center;
  margin-top: 20px;
}

.gdfdfa {
  cursor: pointer;
  color: rgb(255, 131, 0);
  overflow-wrap: break-word;
  min-width: 0;
  line-height: 1.3125;
  font: inherit;
  white-space: inherit;
  margin: 0;
  padding: 0;
  text-decoration-line: none;
}

.gdfdfa:hover {
  text-decoration-line: underline;
}

.bvcdsf {
  padding-left: 5px;
  padding-right: 5px;
  overflow-wrap: break-word;
  flex-shrink: 0;
  color: rgb(255, 255, 255);

}
</style>
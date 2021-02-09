<template>
  <div class="mainstyle dsaxz">
    <div class="mainstyle sdacaae">
      <div class="mainstyle scaweed">
        <div class="mainstyle sadcae">
          <div class="mainstyle dasdae"></div>
          <div class="mainstyle sdawcada">
            <div class="mainstyle styrtdacsd">
              <div class="mainstyle xcsseq">
                <div class="mainstyle sazjfg">
                  <svg class="svgg" viewBox="0 0 149.982 103.312">
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
                      <text id="T" fill="#ff8300" font-family="Sylfaen" font-size="42"
                            transform="translate(0 42.315)">
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
                </div>
              </div>
              <form class="mainstyle adbvdcfhr" novalidate @submit.prevent="autologin_user">
                <div class="mainstyle" style="margin-left: 30px;margin-right: 30px; text-align: left;">
                  <div v-if="positiveRegMessage" class="alert alert-success" role="alert">
                    Вы успешно зарегистрировались!
                  </div>
                  <div v-if="negativeRegMessage" class="alert alert-danger" role="alert">
                    Аккаунт такой уже есть!
                  </div>
                  <div class="mainstyle sdajhugty">Создайте учетную запись</div>
                  <div class="mainstyle dsfdscx">
                    <label class="mainstyle fdxads">
                      <div class="mainstyle dsdssa">
                        <div class="mainstyle fdsfcaqw">
                          <span class="sfasa">Имя</span>
                        </div>
                        <input autocapitalize="none"
                               id="name"
                               v-model.trim="formReg.name"
                               data-focusable="true"
                               dir="auto"
                               :class="status($v.formReg.name)"
                               spellcheck="false"
                               autocomplete="off"
                               class="sdasd form-control"
                               name="session[name]"
                               type="text"
                               @blur="$v.formReg.name.$touch()">

                        <div v-if="!$v.formReg.name.required" class="invalid-feedback">{{ reqText }}</div>
                        <div v-if="!$v.formReg.name.alpha" class="invalid-feedback">{{ alphaText }}</div>
                      </div>
                    </label>
                  </div>
                  <div class="mainstyle dsfdscx">
                    <label class="mainstyle fdxads">
                      <div class="mainstyle dsdssa">
                        <div class="mainstyle fdsfcaqw">
                          <span class="sfasa">Телефон</span>
                        </div>
                        <input autocapitalize="none"
                               autocomplete="on"
                               id="tel"
                               data-focusable="true"
                               dir="auto"
                               v-model.trim="formReg.tel"
                               spellcheck="false"
                               :class="status($v.formReg.tel)"
                               class="sdasd form-control"
                               name="session[telephone]"
                               type="tel"
                               @blur="$v.formReg.tel.$touch()">

                        <div v-if="!$v.formReg.tel.required" class="invalid-feedback">
                          {{ reqText }}
                        </div>
                        <div v-if="!$v.formReg.tel.MOBILEREG" class="invalid-feedback">
                          {{ alphaText }}
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="mainstyle dsfdscx">
                    <label class="mainstyle fdxads">
                      <div class="mainstyle dsdssa">
                        <div class="mainstyle fdsfcaqw"><span class="sfasa">Почта</span></div>
                        <input autocapitalize="none"
                               autocomplete="on"
                               id="email"
                               data-focusable="true"
                               dir="auto"
                               v-model.trim="formReg.email"
                               spellcheck="false"
                               :class="status($v.formReg.email)"
                               class="sdasd form-control"
                               name="session[email]"
                               type="email"
                               @blur="$v.formReg.email.$touch()">

                        <div v-if="!$v.formReg.email.required" class="invalid-feedback">
                          {{ reqText }}
                        </div>
                        <div v-if="!$v.formReg.email.email" class="invalid-feedback">
                          Пожалуйста введите Email адрес
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="mainstyle" style="margin-top: 16px;">
                    <div class="mainstyle dfgsac">Дата рождения</div>
                    <div class="mainstyle dfgsacd">Эта информация не будет общедоступной. Подтвердите свой возраст, даже
                      если эта учетная запись предназначена для компании, домашнего животного и т. д.
                    </div>
                  </div>
                  <div class="mainstyle jytrvxa">
                    <div class="mainstyle eryczaq">
                      <div class="mainstyle gervsqe" dir="auto">Месяц</div>
                      <select id="month"
                              v-model="formReg.month"
                              :class="status($v.formReg.month)"
                              aria-label="Месяц"
                              class="mainstyle hjrtndxr form-control"
                              @blur="$v.formReg.month.$touch()">

                        <option aria-disabled="true" class="r-yfoy6g" disabled="" value="">Месяц</option>
                        <option class="r-yfoy6g" value=1>январь</option>
                        <option class="r-yfoy6g" value=2>февраль</option>
                        <option class="r-yfoy6g" value=3>март</option>
                        <option class="r-yfoy6g" value=4>апрель</option>
                        <option class="r-yfoy6g" value=5>май</option>
                        <option class="r-yfoy6g" value=6>июнь</option>
                        <option class="r-yfoy6g" value=7>июль</option>
                        <option class="r-yfoy6g" value=8>август</option>
                        <option class="r-yfoy6g" value=9>сентябрь</option>
                        <option class="r-yfoy6g" value=10>октябрь</option>
                        <option class="r-yfoy6g" value=11>ноябрь</option>
                        <option class="r-yfoy6g" value=12>декабрь</option>
                      </select>
                      <svg class="mainstyle fdbera" viewBox="0 0 24 24">
                        <g>
                          <path
                              d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                        </g>
                      </svg>
                      <div v-if="!$v.formReg.month.required" class="invalid-feedback">
                        {{ reqTextMin }}
                      </div>
                    </div>
                    <div class="mainstyle eryczaq sdqqvcfs">
                      <div class="mainstyle gervsqe" dir="auto">День</div>
                      <select id="day"
                              v-model="formReg.date"
                              :class="status($v.formReg.date)"
                              aria-label="День"
                              class="mainstyle hjrtndxr custom-select"
                              data-focusable="true"
                              data-testid=""
                              @blur="$v.formReg.date.$touch()">

                        <option aria-disabled="true" class="r-yfoy6g" disabled="" value="">Дата</option>
                        <option v-for="(date, index) in dates"
                                :key="index"
                                :value="date"
                                class="r-yfoy6g form-control custom-select">{{ date }}
                        </option>
                      </select>
                      <svg class="mainstyle fdbera" viewBox="0 0 24 24">
                        <g>
                          <path
                              d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                        </g>
                      </svg>
                      <div v-if="!$v.formReg.date.required" class="invalid-feedback">{{ reqTextMin }}</div>
                    </div>
                    <div class="mainstyle eryczaq sdqqvcfs" style="margin-right: 0;">
                      <div class="mainstyle gervsqe" dir="auto">Год</div>
                      <select id="year"
                              v-model="formReg.year"
                              :class="status($v.formReg.year)"
                              aria-label="Год"
                              class="mainstyle hjrtndxr custom-select"
                              data-focusable="true"
                              @blur="$v.formReg.year.$touch()">

                        <option aria-disabled="true" class="r-yfoy6g" disabled="" value="">Год</option>

                        <option v-for="(year, index) in years"
                                :key="index"
                                :value="year"
                                class="r-yfoy6g">{{ year }}
                        </option>
                      </select>
                      <div v-if="!$v.formReg.year.required" class="invalid-feedback">{{ reqTextMin }}</div>
                      <svg class="mainstyle fdbera" viewBox="0 0 24 24">
                        <g>
                          <path
                              d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="mainstyle jytrvxa">
                    <div class="mainstyle dsfdscx  fsawec">
                      <label class="mainstyle fdxads">
                        <div class="mainstyle dsdssa">
                          <div class="mainstyle fdsfcaqw">
                            <span class="sfasa">Пароль</span>
                          </div>
                          <input autocapitalize="none"
                                 id="password"
                                 v-model.trim="formReg.password"
                                 data-focusable="true"
                                 dir="auto"
                                 :class="status($v.formReg.password)"
                                 spellcheck="false"
                                 autocomplete="off"
                                 class="sdasd form-control"
                                 name="session[password]"
                                 type="password"
                                 @blur="$v.formReg.password.$touch()">
                          <div v-if="!$v.formReg.password.required" class="invalid-feedback">
                            {{ reqText }}
                          </div>
                          <div v-if="!$v.formReg.password.minLength" class="invalid-feedback">
                            {{ minLengthText }}
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="mainstyle dsfdscx fsawec" style="margin-right: 0;">
                      <label class="mainstyle fdxads">
                        <div class="mainstyle dsdssa">
                          <div class="mainstyle fdsfcaqw"><span class="sfasa">Повторите пароль</span></div>
                          <input autocapitalize="none"
                                 id="passwordConfirm"
                                 v-model.trim="formReg.passwordConfirm"
                                 data-focusable="true"
                                 dir="auto"
                                 :class="status($v.formReg.passwordConfirm)"
                                 spellcheck="false"
                                 autocomplete="off"
                                 class="sdasd form-control"
                                 name="session[password]"
                                 type="password"
                                 @blur="$v.formReg.passwordConfirm.$touch()">

                          <div v-if="!$v.formReg.passwordConfirm.sameAs" class="invalid-feedback">
                            {{ passwordConfirmText }}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="mainstyle dsfdscx">
                    <button :disabled="regBtn" class="btn btn-primary rwerwsd" type="submit">
                      Зарегистрироваться
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {email, helpers, minLength, required, sameAs} from 'vuelidate/lib/validators'

import axios from "axios";
import {TOKEN} from "@/api/common";

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
// Custom regex for a phone number
const MOBILEREG = helpers.regex('alpha', /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
export default {
  data() {
    return {
      negativeRegMessage: false,
      positiveRegMessage: false,
      dates: [],
      years: [],
      yearEnd: 2021,
      reqText: 'Поле обязательно для заполнения',
      reqTextMin: 'обязательно',
      alphaText: 'Запрещены цифры, пробелы и другие символы',
      minLengthText: 'Минимальная длина 6 символов!',
      passwordConfirmText: 'Пароли не совпадают',
      formReg: {
        name: '',
        tel: '',
        email: '',
        month: '',
        date: '',
        year: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  computed: {
    regBtn() {
      return this.$v.formReg.name.$invalid ||
          this.$v.formReg.tel.$invalid ||
          this.$v.formReg.email.$invalid ||
          this.$v.formReg.year.$invalid ||
          this.$v.formReg.date.$invalid ||
          this.$v.formReg.month.$invalid ||
          this.$v.formReg.password.$invalid ||
          this.$v.formReg.passwordConfirm.$invalid
    },
  },
  methods: {
    status(validation) {
      return {
        'is-invalid': validation.$error,
        'error': validation.$error
      }
    },
    userRegister() {
      console.group("данные авторизации")
      console.log('Вы успешно зарегистрированны!')
      console.log('Ваше имя: ' + this.formReg.name)
      console.log('Email: ' + this.formReg.email)
      console.log('Tel: ' + this.formReg.tel)
      console.log('Дата рождения: ' + this.formReg.month + '.' + this.formReg.date + '.' + this.formReg.year)
      console.log('Пароль: ' + this.formReg.password)
      console.groupEnd()
    },
    showMessageRegistration(event) {
      if (event)
        this.positiveRegMessage = true;
      else
        this.negativeRegMessage = true;

      setTimeout(() => {
        this.negativeRegMessage = false
        this.positiveRegMessage = false
      }, 2500)
    },
    autologin_user() {
      const axiosInstance = axios.create({baseURL: this.$store.state.endpoints.baseUrl})
      axiosInstance(
          {
            url: "/users/",
            method: "post",
            data:
                {
                  email: this.formReg.email,
                  phone_number: this.formReg.tel,
                  username: this.formReg.name,
                  date: null,
                  password: this.formReg.password
                }
          }).then(() => {
        const payload = {
          email: this.formReg.email,
          password: this.formReg.password
        }

        TOKEN.post('/obtain_token/', payload).then((response) => {
          this.$store.commit('updateToken', response.data.token)
          this.$store.commit("setAuthUser", {authUser: response.data, isAuthenticated: true})
          this.userRegister()
          this.showMessageRegistration(true)
          this.$router.push({name: 'home'})
        }).catch((error) => {
          console.log(error);
        })
      }).catch((error) => {
        console.log(error);
        this.showMessageRegistration(false)
      })
    }
  },
  validations: {
    formReg: {
      name: {
        required,
        alpha
      },
      tel: {
        required,
        MOBILEREG
      },
      email: {
        email,
        required
      },
      month: {
        required
      },
      date: {
        required
      },
      year: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirm: {
        sameAs: sameAs('password')
      }
    }
  },
  created() {
    for (let i = this.yearEnd; i >= 1980; i--) this.years.push(i);
    for (let i = 1; i <= 31; i++) this.dates.push(i);
  }

}
</script>

<style scoped>

.dsaxz {
  height: 100%;
  display: flex;
  pointer-events: none !important;
  -ms-flex: 1 1 0%;
  -webkit-flex: 1;
  flex: 1;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.sdacaae {
  position: fixed;
  right: 0;
  backface-visibility: hidden;
  left: 0;
  pointer-events: auto;
}

.scaweed {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: block;
  min-width: 0;
  min-height: 0;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  flex-direction: column;
  box-sizing: border-box;
  -webkit-box-align: stretch;
  align-items: stretch;
  z-index: 0;
  margin: 0;
  padding: 0;
  border-width: 0;
  border-style: solid;
}

.sadcae {
  -webkit-box-align: center;
  align-items: center;
  width: 100vw;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  top: 0;
  position: fixed;
}

.dasdae {
  top: 0px;
  right: 0px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: #9100fe;
}

.sdawcada {
  margin: auto;
  overflow: hidden;
  min-height: 400px;
  max-width: 80vw;
  max-height: 90vh;
  height: 70%;
  min-width: 600px;
  flex-shrink: 1;
  border-radius: 16px;

}

.styrtdacsd {
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: #1d0032;
  align-self: stretch;
  display: flex;
}

.xcsseq {
  z-index: 2;
  height: 53px;
  padding-left: 15px;
  padding-right: 15px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.sazjfg {
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
}

.adbvdcfhr {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 600px;
  flex-shrink: 1;
  overflow: auto;

}

.sdajhugty {
  font-size: 23px;
  overflow-wrap: break-word;
  line-height: 1.3125;
  color: rgb(255, 255, 255);
  margin-bottom: 15px;
  margin-top: 15px;
  min-width: 0px;
}

.dsfdscx {
  padding: 10px 0;
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
  text-align: left;
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
  line-height: normal !important;
  height: auto;
}

.dfgsac {
  font-weight: 700;
  font-size: 15px;
}

.dfgsacd {
  font-weight: 400;
  font-size: 15px;
  color: #969696;
}

.jytrvxa {
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  margin-bottom: 15px;
  margin-top: 15px;
}

.eryczaq {
  border-width: 1px;
  border-color: rgb(255, 255, 255);
  border-radius: 4px;
  background-color: #1d0032;
  -webkit-box-flex: 2;
  flex-grow: 2;
  margin-right: 10px;
}

.sdqqvcfs {
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.gervsqe {
  pointer-events: none !important;
  padding-top: 5px;
  font-size: 13px;
  font-weight: 400;
  color: #969696;
  overflow-wrap: break-word;
  line-height: 1.3125;
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
}

.hjrtndxr {
  border-width: 0 !important;
  border-radius: 0 !important;
  color: rgb(255, 255, 255) !important;
  outline-style: none !important;
  font-size: 19px !important;
  appearance: none !important;
  cursor: pointer !important;
  margin: 5px 0 0 !important;
  padding: 10px 5px 5px !important;
  height: auto !important;
  line-height: normal !important;
  background-color: #1d0032 !important;
}

option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0 2px 1px;
}

option:disabled {
  background-color: rgb(21, 32, 43);
  font-size: 19px;
  cursor: pointer;
}

.fdbera {
  display: inline-block;
  fill: currentcolor;
  max-width: 100%;
  vertical-align: text-bottom;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  color: rgb(136, 153, 166);
  pointer-events: none !important;
  height: 1.5em;
  margin-top: -0.75em;
  right: 10px;
  top: 50%;
}

.fsawec {
  background-color: #1d0032;
  flex-grow: 1;
  margin-right: 10px;
}

.rwerwsd {
  font-weight: 700;
  background-color: rgb(255 131 0);
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-height: 49px;
  border-radius: 9999px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
}
</style>
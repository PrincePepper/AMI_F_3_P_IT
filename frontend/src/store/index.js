import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
    state: {
        notes: [],
        isAuthenticated: false,
        jwt: localStorage.getItem('token'),
        endpoints: {
            // TODO: Remove hardcoding of dev endpoints
            obtainJWT: 'http://localhost:8000/api/v1/auth/obtain_token/',
            refreshJWT: 'http://localhost:8000/api/v1/auth/refresh_token/',
            baseUrl: 'http://localhost:8000/api/v1/'
        }
    },
    getters: {
        notes: state => state.notes,
        isAuthenticated: state => state.isAuthenticated,
        jwt: state => state.jwt
    },
    mutations: {
        setAuthUser(state, isAuthenticated) {
            Vue.set(state, 'isAuthenticated', isAuthenticated)
        },
        updateToken(state, newToken) {
            // TODO: For security purposes, take localStorage out of the project.
            localStorage.setItem('token', newToken);
            state.jwt = newToken;
        },
        removeToken(state) {
            // TODO: For security purposes, take localStorage out of the project.
            localStorage.removeItem('token');
            state.jwt = null;
        },
        ADD_NOTE(state, note) {
            state.notes = [note, ...state.notes]
        },
        REMOVE_NOTE(state, {id}) {
            state.notes = state.notes.filter(note => {
                return note.id !== id
            })
        },
        SET_NOTES(state, {notes}) {
            state.notes = notes
        },
    }
})

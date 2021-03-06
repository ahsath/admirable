import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        dataTable: {
            search: '',
            dataTableItemToEdit: null,
            dataTableItems: [],
            filters: {
                technician: '',
                status: ''
            },
            selectedDatableItem: []
        },
        mini: true,
        dark: false,
        snackbar: false,
        snackbarMessage: ''
    },
    mutations,
    getters,
    actions
}
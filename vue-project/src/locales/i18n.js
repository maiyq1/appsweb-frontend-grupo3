import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:"es",
    messages :{
        en:{ "code":'code',
            "name":'name',
            "category":'category',
            "dateAdded":'dateAdded',
            "quantity":'quantity',
            "description":'description',
            "digitalVersion":'digitalVersion',
            "status":'status'

        },
        es:{"code": "Código: ",
            "name": "Nombre: ",
            "category": "Categoria: ",
            "dateAdded": "Fecha Agregada: ",
            "quantity": "Cantidad: ",
            "description": "Descripción: ",
            "digitalVersion":"Versión Digital :",
            "status":"Estado:"

        }
    }
})


export  default  i18n
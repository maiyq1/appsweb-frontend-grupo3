import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:"es",
    messages :{
        en:{ "code":'code',"name":'name',
            "category":'category',
            "dateAdded":'dateAdded',
            "quantity":'quantity',"status":'status'

        },
        es:{"code": "Código","name":'Nombre',"category":"Categoria",
            "dateAdded":'Fecha Agregada',"quantity":'Cantidad',"status":'Estado'}

    }
})


export  default  i18n
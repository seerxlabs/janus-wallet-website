import { createI18n } from 'vue-i18n'
const cacheLng = localStorage.getItem("user_lng") ? localStorage.getItem("user_lng") : 'en_US'
let targetLng
switch (cacheLng){
    case "en_US": targetLng = 'en';break
    case "zh_CN": targetLng = 'zh';break
    default: targetLng = 'en';break
}
localStorage.setItem("user_lng", cacheLng)
const i18n = createI18n({
    globalInjection:true,
    legacy: false,
    locale: targetLng,
    messages:{
        zh: require('./zh'),
        en: require('./en'),
    }
});

export default i18n

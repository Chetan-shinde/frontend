import common from "../common.js";
export default (context, inject) => {
    inject('common', new common(context))
}
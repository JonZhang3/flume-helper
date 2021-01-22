function getType(src) {
    return Object.prototype.toString.call(src);
}

export default {
    deleteKey(key, val) {
        if(key === 'name') {
            return undefined;
        }
        if(val === undefined || val === null || val === ''
            || (Array.isArray(val) && val.length === 0)) {
            return undefined;
        }
        return val;
    },
    isArray(obj) {
        return getType(obj) === '[object Array]'
    },
    isBoolean(obj) {
        return getType(obj) === '[object Boolean]'
    },
    isString(obj) {
        return getType(obj) === '[object String]'
    },
    isObject(obj) {
        return getType(obj) === '[object Object]'
    },
    selectAll(el) {
        if(document.selection) {
            const range = document.body.createTextRange();
            range.moveToElementText(el);
            range.select();
        } else if(window.selection) {
            const range = document.createRange();
            range.selectNodeContents(el);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
    },
    LONG_MAX_VALUE: 9223372036854775807
}

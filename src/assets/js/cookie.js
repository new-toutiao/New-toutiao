
export const Cookie = {
    get(key) {
        let arr = document.cookie.split('; ')
        for (let i = 0; i < arr.length; i++) {
            let arr2 = arr[i].trim().split('=');
            if (arr2[0] == key) {
                return arr2[1]
            }
        }
        return ''
    },
    set(key, value, day) {
        let setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (let i in setting) {
                let oDate = new Date()
                oDate.setDate(oDate.getDate() + day)
                document.cookie = i + '=' + setting[i] + ';expires=' + oDate
            }
        } else {
            let oDate = new Date()
            oDate.setDate(oDate.getDate() + day)
            document.cookie = key + '=' + value + ';expires=' + oDate
        }
    },
    remove(key) {
        let setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
            setting.forEach(key => {
                this.set(key, 1, -1)
            })
        } else {
            this.set(key, 1, -1)
        }

    }
};

const LS = window.localStorage;
export const Local = {
    get(key) {
        if (key) return JSON.parse(LS.getItem(key));  //JSON.parse转换为JSON对象
        return null;
    },
    set(key, value) {
        let k = 0;
        let json = localStorage.getItem(key)
            ? JSON.parse(localStorage.getItem(key))
            : [];
        for (let i = 0; i < json.length; i++) {
            let item = json[i];
            if (item.id === value.id) {
                item.num += value.num;
            } else {
                k = k + 1;
            }
        }
        if (k === json.length) {
            json.push(value);
        }
        localStorage.setItem(key, JSON.stringify(json));
    },
    remove(key) {
        LS.removeItem(key);
    },
    clear() {
        LS.clear();
    },
    change(key, id) {
        let _json = [];
        let json = JSON.parse(localStorage.getItem(key));
        for (let i = 0; i < json.length; i++) {
            if (json[i].id != id) {
                _json.push(json[i])
            }
        }
        localStorage.setItem(key, JSON.stringify(_json));
    },
    subnum(key, id) {
        let json = JSON.parse(localStorage.getItem(key));
        for (let i = 0; i < json.length; i++) {
            if (json[i].id == id) {
                if (json[i].num > 1) {
                    json[i].num--;
                    break;
                } else {
                    if (window.confirm("确定将此物品移除购物车吗？")) {
                        json.splice(i, 1)
                        break;
                    } else {
                        json[i].num = 1;
                        break;
                    }
                }

            }
        }
        localStorage.setItem(key, JSON.stringify(json));
    },
    addnum(key, id) {
        let json = JSON.parse(localStorage.getItem(key));
        for (let i = 0; i < json.length; i++) {
            if (json[i].id == id) {
                json[i].num++;
                break;
             }
        }
        localStorage.setItem(key, JSON.stringify(json));
    }
}
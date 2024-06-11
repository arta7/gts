export function getFromArray(arr: any, key: any, field = 'id') {

  function getValue(el: any, fields: any) {
    for (const _f of fields) {
      if (el.hasOwnProperty(_f)) el = el[_f]
      else return null
    }
    return el
  }

  let fields = field.split('.')
  for (const el of arr) if (getValue(el, fields) == key) return el

  return null
}
export function getFromObject(obj: any, keyChain: string, defaultValue = null) {
  
  if (!keyChain) return null

  for (const key of keyChain.split('.')) {
    if (obj && obj.hasOwnProperty(key)) obj = obj[key]
    else return defaultValue
  }
  return obj
}

export function setInObject(obj: any, keyChain: any, value: any) {
  const keys: any = keyChain.split('.')
  let _o = obj
  const mainKey: any = keys.pop()
  
  for (const key of keys) {
  console.log('o : ',_o,"key : ",key)
    if (!_o.hasOwnProperty(key)) _o[key] = {}
    _o = _o[key]
  }
  _o[mainKey] = value
}

export function flattenObject(
  obj: any,
  { key = 'value', emptyToNull = false }: any,
) {
  const flat = (_obj: any) => {
    if (_obj.hasOwnProperty(key)) {
      if (!emptyToNull) return _obj[key]

      const _v = _obj[key]
      if (_v !== undefined && _v !== '') return _v
      return null
    } else {
      const _result: any = {}
      for (const _key in _obj) {
        _result[_key] = flat(_obj[_key])
      }
      return _result
    }
  }

  const result: any = {}
  for (const _key in obj) {
    result[_key] = flat(obj[_key])
  }
  return result
}

 export const toBase64 = async (file: Blob) => {
    const result = await new Promise((resolve, reject) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString();

        resolve(encoded);
        reader.onerror = (error: any) => reject(error);
      };
    });
    return result;
};
export const base64ToFile = (dataurl: any, filename: any,fileExtension:any) => {
    var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
  }
  let file:File = new File([u8arr], `${filename + '.' + fileExtension}`, { type: mime });
        return new File([u8arr], `${filename+'.'+fileExtension}`, {type:mime});
}
 
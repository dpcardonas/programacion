function validar_nombreUsuario(string) {
    const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
    if (string.length > 3 && string.length <= 9) {
        if (!expresion.test(string))  {
            return false
        }
        else {
            return true
        }
    }
    else {
        return false
    }
}
function validar_contrasena(string) {
    const expresion=new RegExp('^[A-Z0-9Ñ]+$','i');
    if (string.length >= 6) {
        if (!expresion.test(string))  {
            return false
        }
        else {
            return true
        }
    }
    else {
        return false
    }
}
module.exports.validar_nombreUsuario=validar_nombreUsuario;
module.exports.validar_contrasena=validar_contrasena;
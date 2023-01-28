class encriptador{
    static desplazamiento(str, n){
        var aux = str;
        str='';
        for(let i = 0; i < aux.length ; i++)
        {
            let pos= aux[i];
            str += String.fromCodePoint(pos.charCodeAt(0) + n);
        }
        return str;
    }

    static reemplazo(str){
        var aux = str;
        str= '';
        let palClave = "murcielagoMURCIELAGO";
        for(let i = 0; i < aux.length; i++)
        {
            let val = aux[i];
            for(let j = 0; j < palClave.length; j++)
            {
                if(val === palClave[j])
                {
                    val =  String.fromCodePoint(j);
                }
                
            }
            str += val;
        }
        return str;
    }

    static revertir(str){
        var aux = str;
        str = '';
        let palClave = "murcielagoMURCIELAGO";
        for(let i = 0; i< aux.length; i++)
        {
            var val = aux[i];

            for(let j = 0; j < palClave.length; j++)
            {
                if(j === (val.charCodeAt(0)))
                {
                    val = palClave[j];
                }
            }
            str += val;
        }
        return str;
        }

    static enmascarador(str){
        return encriptador.desplazamiento(encriptador.reemplazo(encriptador.desplazamiento(str, 1)), 6);
    }

    static desenmascarador(str){
        return encriptador.desplazamiento(encriptador.revertir(encriptador.desplazamiento(str, -6)), -1);
    }
}

module.exports = encriptador;
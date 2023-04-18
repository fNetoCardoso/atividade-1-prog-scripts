import api from "./api" ;

export async function GetJogo ():Promise<any>{
    var {data} = await api.get("")
    return {lotofacil: data.lotofacil, megaSena: data.megasena};
} 

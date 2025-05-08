import getLengthIds from './id.js'

/*
Example 
yesId() ----> '152914482871698271513'
yesId(6) ---> '251428'
yesId(19) --> '2914482841698271485'
yesId(18, 'PO-') ----> 'PO-12914482841698271514'
yesId(8, '100') ----> '10091448238'
yesId(8, 'TS10', 0) ----> 'TS1091948273'
yesId(8, 'TS10', 1) ----> '91948273TS10'

----------------------------------------------------------------------------------------------------------------
yesId can receive
yesId()
yesId(length)
yesId(length, string)
yesId(length, string, position)
yesId(typeof:Number, typeof:string, typeof:Number)
*/ 

function yesId(leg, str, pos){
    try {
        let stringId = str || '';
        let position = pos || 0;
        let lengthId = leg || 21;
    
        if(typeof lengthId !== "number") throw new Error('La longitud debe ser tipo Number...')
        if(typeof stringId !== "string") throw new Error('La cadena debe ser tipo string...')
        if(typeof position !== "number") throw new Error('La posicion debe ser tipo Number')
        if(lengthId < 4 || lengthId > 21) throw new Error('La longitud minima es 4 y la maxima es 21...')
        if(position < 0 || position > 1) throw new Error('La posicion debe ser 0 o 1...')
        
        let theID 
    
        if(position == 1){
            theID = getLengthIds(lengthId) + stringId 
        }else{
            theID =  stringId + getLengthIds(lengthId)  
        }
        
        return theID
    } catch (error) {
        console.error('yesid_error',error)
    }
}
  
console.log(yesId(7, 0, 1));

export default yesId
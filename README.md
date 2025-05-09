
## yes-id

With this method you will be able to generate a new id that receive as a parameter the length you want for the id and the text
you want to put before or after the id 

### Installation

`npm i yes-id`

### Example
Use `yesId()` to call the function <br/>

for example 

```javascript
import yesId from 'yes-id'

yesId() //----> '152914482871698271513'

yesId(6) //---> '251428'
yesId(19) //--> '2914482841698271485'
yesId(18, 'PO-') //----> 'PO-12914482841698271514'
yesId(8, '100') //----> '10091448238'
yesId(8, 'TS10', 0) //----> 'TS1091948273'
yesId(8, 'TS10', 1) //----> '91948273TS10'
yesId(8, 'TS10-') ----> 'TS10-91948273'
```

### Parameter and type of parameter

- yesId()
- yesId(length)
- yesId(length, string)
- yesId(length, string, position)
- yesId(typeof:Number, typeof:string, typeof:Number)

The position has to be a number, 0 or 1 <br/>
The 0 is to put the string at the beginning of the id and the 1 is to put the string at the end of the id



----------------------------------------------------------------------------------------------------------------
> [!NOTE]
> The max length that the parameter accepts is 21 and the min length is 4, if you don't put any parameter, the default length will be 21

import { useState } from "react"


// eslint-disable-next-line react/prop-types
const AddCategory = ({ onNewvalue }) => {


    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        //// console.log(event);
        //// console.log(target.value);
        setInputValue(target.value)
    }


    const onSubmit = (event) => {
        //// console.log(event);
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewvalue(inputValue)
        setInputValue('')

    }

    return (
        <form onSubmit={event => onSubmit(event)} >
            <input type="text" placeholder="Buscar Gifts" value={inputValue} onChange={(e) => onInputChange(e)} />
        </form>

    )
}
export default AddCategory

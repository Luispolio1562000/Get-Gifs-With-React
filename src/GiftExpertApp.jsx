import { useState } from "react"
import GiftGrid from "./components";
import AddCategory from "./components";




export const GiftExpertApp = () => {



    const [categories, setCategories] = useState([])
    //console.log(categories);

    const onAddCategory = (newCategory) => {
        setCategories(newCategory)
    }


    return (

        <>
            <h2> Gift Expert App</h2>

            {/* <button onClick={onAddCategory}> Agregar </button> */}

            <AddCategory
                onNewvalue={onAddCategory}
            // addCategory={setCategories}  
            />


            <GiftGrid
                category={categories} />




        </>
    )
}
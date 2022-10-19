import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => { //karena categoriesMap adalah objek, maka perlu Object.keys sebelum menggunakan .map (yang merupakan fungsi array)
                    const products=categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />    
                })
            }
        </Fragment>
    );
};

export default CategoriesPreview;
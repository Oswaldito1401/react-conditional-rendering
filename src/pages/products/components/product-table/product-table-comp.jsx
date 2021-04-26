import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row-comp';
import ProductRow from '../product-row/product-row-comp';



import './product-table.style.css';

const ProductTable= () => {
    return (
        <div className="product-table-container">
            <ProductCategoryRow categoryName="Programming IV"/> NAME GENDER NOTE
            <ProductRow product={{
                name:"Carlos",
                gender:"Male",
                note: 1.5,
            }}/>
            <ProductRow product={{
                name:"Diana",
                gender:"Female",
                note: 2.0,
            }}/>
            <ProductRow product={{
                name:"Diego",
                gender:"Male",
                note: 4.5,
            }}/><ProductRow product={{
                name:"Daniela",
                gender:"Female",
                note: 2.5,
            }}/>
            <ProductRow product={{
                name:"Alfonso",
                gender:"Male",
                note: 3.5,
            }}/>
            <ProductRow product={{
                name:"Dario",
                gender:"Male",
                note: 4.5,
            }}/>
            <ProductRow product={{
                name:"Alejo",
                gender:"Male",
                note: 4.5,
            }}/>
            <ProductCategoryRow categoryName="Database"/>NAME GENDER NOTE
            <ProductRow product={{
                name:"Melissa",
                gender:"Female",
                note: 1.5,
            }}/>
            <ProductRow product={{
                name:"Lorena",
                gender:"Female",
                note: 2.0,
            }}/>
            <ProductRow product={{
                name:"Gloria",
                gender:"Female",
                note: 4.5,
            }}/><ProductRow product={{
                name:"Daniela",
                gender:"Female",
                note: 3.5,
            }}/>
            <ProductRow product={{
                name:"Diego",
                gender:"Male",
                note: 4.5,
            }}/>
            <ProductRow product={{
                name:"Diego",
                gender:"Male",
                note: 4.5,
            }}/>
            <ProductRow product={{
                name:"Alfonso",
                gender:"Male",
                note: 3.5,
            }}/>
            <ProductCategoryRow categoryName="Mathematics"/>NAME GENDER NOTE
            <ProductRow product={{
                name:"Carlos",
                gender:"Male",
                note: 1.5,
            }}/>
            <ProductRow product={{
                name:"Jorge",
                gender:"Male",
                note: 4.5,
            }}/>
            <ProductRow product={{
                name:"Carmen",
                gender:"Female",
                note: 4.5,
            }}/>
            <ProductRow product={{
                name:"Diana",
                gender:"Female",
                note: 3.0,
            }}/>
            <ProductRow product={{
                name:"Diego",
                gender:"Male",
                note: 4.5,
            }}/><ProductRow product={{
                name:"Juan",
                gender:"Male",
                note: 3.5,
            }}/>
            <ProductRow product={{
                name:"Alfonso",
                gender:"Male",
                note: 1.5,
            }}/>

           
        </div>
    );
}

export default ProductTable;
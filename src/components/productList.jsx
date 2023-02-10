import React, { useEffect, useState } from "react";
import { products as productsFromData } from "../data/products";
import Product from "./product";
import SortSelect from "./sortSelect";
import _ from "lodash";

const sortOptions = [
    {
        value: "priceASC",
        label: "Цена по возрастанию",
        sort: (products) =>
            [...products].sort((itemA, itemB) => {
                return itemA.price - itemB.price;
            })
    },
    {
        value: "priceDESC",
        label: "Цена по убыванию",
        sort: (products) => _.orderBy(products, ["price"], ["desc"])
    },
    {
        value: "ratingASC",
        label: "Рейтинг по возрастанию",
        sort: (products) => _.orderBy(products, ["rating.rate"], ["asc"])
    },
    {
        value: "ratingDESC",
        label: "Рейтинг по убыванию",
        sort: (products) => _.orderBy(products, ["rating.rate"], ["desc"])
    }
];

const ProductList = () => {
    const [products] = useState(productsFromData);
    const [sortProducts, setSortProducts] = useState(productsFromData);
    const [sortSign, setSortSign] = useState("ratingDESC");

    const handleChangeSortSign = (e) => {
        setSortSign(e.target.value);
    };

    useEffect(() => {
        const findOption = sortOptions.find(({ value }) => value === sortSign);
        if (findOption) {
            setSortProducts(findOption.sort(products));
        } else {
            setSortProducts(products);
        }
    }, [sortSign, products]);
    return (
        <div className="container mt-t">
            <div>
                {/* Компонент выбора признака сортировка */}
                <SortSelect
                    value={sortSign}
                    options={sortOptions}
                    onSort={handleChangeSortSign}
                />
            </div>
            <div className="row mt-4">
                {sortProducts.map((product) => (
                    // Список товаров
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

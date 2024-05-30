import React, { useState } from "react";
import product from './Product.json'
import './Cart.css'

function Cart() {
    const [Products, setProducts] = useState(product)
    const filterItems = (item: any) => {

        const updateItem = product.filter((e: any) => {
            return e.category === item
        })
        setProducts(updateItem)
    }
    return (
        <div>
            <div className="head">
                 <h1>Welo Cart</h1>
            </div>
            <div className="cart">
                <div className="filter">
                    <div className="collection0">
                    <h5>All Products</h5>
                    <div className="all">
                            <input
                                type="radio"
                                name="product"
                                onClick={() =>setProducts(product)}  
                            >
                            </input>All Collection
                        </div>
                    </div>
                    <div className="collection1">
                        <h5>Men's Collection</h5>
                        <div className="fir">
                            <input
                                type="radio"
                                name="product"
                                onClick={()=>filterItems( "mens shoes - Size : 7")}
                            >
                            </input>Casual Shoes
                        </div>
                        <div className="sec">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("mens slipper - Size : 8")}
                            >
                            </input>Slipper
                        </div>
                        <div className="thr">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems( "shirt")}
                            >
                            </input>Casual Shirt
                        </div>
                        <div className="fou">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("tshirt")}
                            >
                            </input>T-Shirt
                        </div>
                        <div className="fiv">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("stylish cap")}
                            >
                            </input>Stylish Cap
                        </div>
                        <div className="six">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("hoodie")}
                            >
                            </input>Hoodie
                        </div>
                        <div className="sev">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("belt")}
                            >
                            </input>Belt
                        </div>
                    </div>
                    <div className="collection2">
                        <h5>Sports Collection</h5>
                        <div className="fir1">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("bat")}
                            >
                            </input>Bat
                        </div>
                        <div className="sec1">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("ball")}
                            >
                            </input>Ball
                        </div>
                        <div className="thr1">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("cricket bat")}
                            >
                            </input>Plastic Bat
                        </div>
                        <div className="fou1">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems(" tennis Ball")}
                            >
                            </input>Tennis Ball
                        </div>
                        <div className="fiv1">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("pad")}
                            >
                            </input>Cricket Pad
                        </div>
                        <div className="six1">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("football")}
                            >
                            </input>FootBall
                        </div>
                    </div>
                    <div className="collection3">
                        <h5>Kids Collection</h5>
                        <div className="fir2">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("bag")}
                            >
                            </input>Bag
                        </div>
                        <div className="sec2">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("waterbottle")}
                            >
                            </input>Water Bottle
                        </div>
                        <div className="thr2">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("teddybear")}
                            >
                            </input>Teddy Bear
                        </div>
                    </div>
                    <div className="collection4">
                        <h5>Gadgets Collection</h5>
                        <div className="fir3">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("mobile")}
                            >
                            </input>Mobiles
                        </div>
                        <div className="sec3">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("Airpods")}
                            >
                            </input>Airpods
                        </div>
                        <div className="thr3">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("watch")}
                            >
                            </input>Watch
                        </div>
                        <div className="fou3">
                            <input
                                type="radio"
                                name="product"
                                onClick={() => filterItems("speaker")}
                            >
                            </input>Speaker
                        </div>
                    </div>
                </div>
                <div className="design">
                    {Products.map((element: any) => {
                        const { image, title, category, price, id} = element
                        return <div className="card" key={id}>
                            <img src={image}></img>
                            <h2>{title}</h2>
                            <span className="category">{category}</span>
                            <h4></h4>
                            <button>{price}</button><button className="cart_btn">Add to cart</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )

}

export default Cart
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
            <h1></h1>
            {/* <div className="filter">
            <button onClick={()=>setProducts(product)}>ALL</button>
               <button onClick={()=>filterItems("men's clothing")}>MEN'S CLOTHS</button>
               <button onClick={()=>filterItems("women's clothing")}>WOMEN'S CLOTHS</button>
               <button onClick={()=>filterItems("jewelery")}>JEWELERYS</button>
               <button onClick={()=>filterItems("electronics")}>ELECTRONICS</button>

            </div> */}
            <div className="cart">
                <div className="filter">
                    <div className="collection0">
                    <h5>All Products</h5>
                    <div className="all">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() =>setProducts(product)}  
                            >
                            </input>All Collection
                        </div>
                    </div>
                    <div className="collection1">
                        <h5>Men's Collection</h5>
                        <div className="fir">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={()=>filterItems( "mens shoes")}
                            >
                            </input>Casual Shoes
                        </div>
                        <div className="sec">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("mens slipper")}
                            >
                            </input>Slipper
                        </div>
                        <div className="thr">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems( "shirt")}
                            >
                            </input>Casual Shirt
                        </div>
                        <div className="fou">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("tshirt")}
                            >
                            </input>T-Shirt
                        </div>
                        <div className="fiv">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("cap")}
                            >
                            </input>Stylish Cap
                        </div>
                        <div className="six">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("hoodie")}
                            >
                            </input>Hoodie
                        </div>
                        <div className="sev">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("belt")}
                            >
                            </input>Belt
                        </div>
                    </div>
                    <div className="collection2">
                        <h5>Sports Collection</h5>
                        <div className="fir1">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("bat")}
                            >
                            </input>Bat
                        </div>
                        <div className="sec1">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("ball")}
                            >
                            </input>Ball
                        </div>
                        <div className="thr1">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("cricket bat")}
                            >
                            </input>Plastic Bat
                        </div>
                        <div className="fou1">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems(" tennis Ball")}
                            >
                            </input>Tennis Ball
                        </div>
                        <div className="fiv1">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("pad")}
                            >
                            </input>Cricket Pad
                        </div>
                        <div className="six1">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("football")}
                            >
                            </input>FootBall
                        </div>
                    </div>
                    <div className="collection3">
                        <h5>Kids Collection</h5>
                        <div className="fir2">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("bag")}
                            >
                            </input>Bag
                        </div>
                        <div className="sec2">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("waterbottle")}
                            >
                            </input>Water Bottle
                        </div>
                        <div className="thr2">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("teddybear")}
                            >
                            </input>Teddy Bear
                        </div>
                    </div>
                    <div className="collection4">
                        <h5>Gadgets Collection</h5>
                        <div className="fir3">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("mobile")}
                            >
                            </input>Mobiles
                        </div>
                        <div className="sec3">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("Airpods")}
                            >
                            </input>Airpods
                        </div>
                        <div className="thr3">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("watch")}
                            >
                            </input>Watch
                        </div>
                        <div className="fou3">
                            <input
                                type="checkbox"
                                name="checkbox"
                                onClick={() => filterItems("speaker")}
                            >
                            </input>Speaker
                        </div>
                    </div>
                </div>


                <div className="design">
                    {Products.map((element: any) => {
                        const { image, title, category, price, id, description} = element
                        return <div className="card" key={id}>
                            <img src={image}></img>
                            <h2>{title}</h2>
                            <span className="category">{category}</span>
                            <h4></h4>
                            <button>{price}</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )

}

export default Cart
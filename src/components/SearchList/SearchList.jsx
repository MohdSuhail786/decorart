import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { products } from "../../db";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from '../Header/Header'

export default function SearchList() {
    const {query} = useParams();
    const [state,setState] = useState({products:[]})

    useEffect(()=>{
        const filter = products.filter((v)=>v.name.toLowerCase().indexOf(query.toLowerCase()) != -1)
        console.log(filter)
        setState({products:filter})
    },[])

    return <>
    <Header />
    <div style={{padding:"50px 10px",textAlign:'center'}}>
           <h1>Search Result</h1>
           <div className="is-divider" style={{margin:'auto'}}></div>
           <div className="product-list" >
           {state.products.map((v,k)=>{
                return <>
                    <Card product={v}/>
                </>
            })}
           </div>
           {state.products.length == 0 && <div>No Product Found</div>}
        </div>
    <Footer />
    </>
}
import { React, useContext, useState } from "react";
import Urlcontext from "../Context/Urlcontext";
import { Clipboard } from "react-bootstrap-icons";
import { ClipboardCheck } from "react-bootstrap-icons";
import { GraphUpArrow } from 'react-bootstrap-icons';
import { Trash3 } from 'react-bootstrap-icons';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import Analysis from "./Analysis";


const Result = (props) => {

    const context = useContext(Urlcontext)
    const { getAnalysis, history, deleteUrl, redirectUrl } = context
    const [active, setactive] = useState(false);
    const [copy, setcopy] = useState(false)


    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.urls.shortId)
        setcopy(true)
        setTimeout(() => {
            setcopy(false)
        }, 6000);
    };

    const analysisUrl = (id) => {
        getAnalysis(id);
        setactive(true);
        setTimeout(() => {
            setactive(false)
        }, 100000);
    }

    return (
        <>
            <div className="card text-center w-50 mx-auto my-5 pt-0" style={{ backgroundColor: "#d5e8dd" }}>
                <div className="card-body">
                    <h5 className="card-title fw-bolder" style={{ color: "#343a40" }}>{props.urls.shortId} <span style={{ cursor: "pointer" }} onClick={copyToClipboard}>{(copy) ? <ClipboardCheck style={{color : "green"}}/> : <Clipboard style={{color : "blue", marginRight: "0"}}/>}</span> <span style={{color : "green", cursor: "pointer"}} className="position-absolute top-0 end-0 me-2" onClick={()=>{redirectUrl(props.urls.shortId)}}><BoxArrowUpRight/></span></h5>
                    <p className="card-text" style={{ color: "#343a40" }}>
                        {props.urls.redirectURL}
                    </p>
                    <button className="btn btn-outline-danger btn-sm m-2" onClick={() => { deleteUrl(props.urls._id) }}><Trash3 /> Remove</button>
                    <button className="btn btn-outline-success btn-sm" onClick={() => { analysisUrl(props.urls.shortId) }}><GraphUpArrow /> Stats</button>
                    {active === true ? <Analysis history={history} /> : ""}

                </div>
            </div>
        </>
    )
};


export default Result;

import { React, useContext, useState, useEffect } from "react";
import { ChevronDoubleRight } from 'react-bootstrap-icons';
import Urlcontext from "../Context/Urlcontext";
import Result from "./Result";
import Alert from "./Alert";
import Delete from "./Dalert";


const Body = () => {

    const context = useContext(Urlcontext)
    const { urls, genurl, geturl, deleteMsg } = context;

    const [redirecturl, setredirecturl] = useState('')
    const [input, setinput] = useState('')
    const [alert, setalert] = useState(false)


    const onChange = (e) => {
        setredirecturl(e.target.value)
        setinput(redirecturl)
    }

    const submit = (e) => {
        e.preventDefault();
        genurl(redirecturl)
        geturl();
        setinput('')
        setalert(true)
        setTimeout(() => {
            setalert(false)
        }, 3000);
    }

    useEffect(() => {
        geturl();
        // eslint-disable-next-line 
    }, [])



    return (
        <>
            {alert === true ? <Alert title={"Done!"} desc={"Your ShortId is Generated Successfully"} /> : ""}
            {deleteMsg === true ? <Delete title={"Done!"} desc={"Your ShortId is Deleted Successfully"} /> : ""}
            <div className="text-center">
                <h1 className="fs-1 my-5 fw-bold" style={{ color: "#343a40" }}>URL Shortner</h1>
                <div className="input-group mb-3 input-group-lg w-50 p-3 position-absolute start-50 translate-middle my-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a link to shorten it"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        name="url"
                        onChange={onChange}
                        value={input}
                    />
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        id="button-addon2"
                        onClick={submit}
                    >
                        Shorten
                        <ChevronDoubleRight />
                    </button>
                </div>
            </div>
            <br />
            <br />
            <br />
            {urls.map((url) => {
                return <Result urls={url} key={url._id} />
            })}
        </>

    )
}

export default Body;
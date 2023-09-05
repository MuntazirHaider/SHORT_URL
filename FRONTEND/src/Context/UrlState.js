import { useState } from "react";
import urlContext from "./Urlcontext";
import { React } from "react";

const UrlState = (props) => {
  const data = []
  const analysis = []

  const [urls, seturl] = useState(data)
  const [history, sethistory] = useState(analysis)
  const [deleteMsg, setdeleteMsg] = useState(false)

  async function genurl(url) {
    try {
      const response = await fetch('http://localhost:5000/url', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const newUrl = await response.json();
      seturl(urls.concat(newUrl))

    } catch (error) {
      console.error("Error:", error);
    }
  }


  async function geturl() {
    try {
      const result = await fetch('http://localhost:5000/api/url/fetchurls', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const newUrl = await result.json();
      seturl(newUrl)

    } catch (error) {
      console.error("Error:", error);
    }
  }


  async function getAnalysis(shortId) {
    try {
      const result = await fetch(`http://localhost:5000/analysis/${shortId}`, {
        method: "GET"
      });
      const analysis = await result.json();
      sethistory(analysis)

    } catch (error) {
      console.error("Error:", error);
    }
  }


  const deleteUrl = async (id) => {
    const response = await fetch(`http://localhost:5000/deleteurl/${id}`, {
      method: 'DELETE'
    });

    const newUrl = urls.filter((url) => { return url._id !== id })
    seturl(newUrl)
    setdeleteMsg(true);
    setTimeout(() => {
      setdeleteMsg(false)
    }, 3000);
  }

  const redirectUrl = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'GET'
    });
  
    window.open(response.url, '_blank')
  }



  return (
    <urlContext.Provider value={{ urls, seturl, genurl, geturl, history, getAnalysis, deleteUrl, deleteMsg, redirectUrl }}>
      {props.children}
    </urlContext.Provider>
  )
}

export default UrlState;


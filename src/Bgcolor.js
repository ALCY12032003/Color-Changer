import React ,{ useState } from 'react'
import Select from 'react-select'
import './App.css'
 function Bgcolor() {
    var colors=[
    {
       value:1,
       label:"Lime"
    },
    {
        value:2,
        label:"Lavender"
    },
    {
        value:3,
        label:"Crimson"
    },
    {
        value:4,
        label:"Darkblue"
    },
    {
        value:5,
        label:"Teal"
    },
    {
        value:6,
        label:"Rebeccapurple"
    },
    {
        value:7,
        label:"Aquamarine"
    },
    {
        value:8,
        label:"Aliceblue"
    }
    ];
    var [setbgcolor,ddlvalue]=useState(colors.label);
    var ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
  return (
    <div>
       <h1>UI-COLOR CHANGER</h1>
       <style>{'center {background-color:'+ setbgcolor +';}'}</style>
       <div className='design'>
       <Select  options={colors} onChange={ddlhandle}>  </Select>
       </div> 
       <center>
        <div className='box'>
        <p>YOU CHOSE</p>
        <p>{setbgcolor}</p>
        </div>
       </center>
    </div>
  )
}

export default Bgcolor;

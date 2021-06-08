import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

function Main() {
 
   


    const [resultData,setResultData]=useState([]);
    //  console.log(resultData);

    const [boxDisplayData,setBoxDisplayData]=useState("");
    // console.log(boxDisplayData);

    const [streetNum,setStreetNum]=useState("");

    const [nameFirst,setnameFirst]=useState("");

    const [nameLast,setnameLast]=useState("");

    const [nameTitle,setnameTitle]=useState("");

    const [roadName,setRoadName]=useState("");

    const [cityName,setCityName]=useState("");

    const [stateName,setStateName]=useState("");

    const [countryName,setCountryName]=useState("");

    const [postCode,setPostCode]=useState("");

    const [offset,setOffset]=useState("");

    const [description,setDescription]=useState("");

    const [gen,setGen]=useState("");

    const [bgColor,setBgColor]=useState("whiteBgColor");

    const [allDataGen,setAllDataGen]=useState("box_data_items_gen");

    const [allDataHeading,setAllDataHeading]=useState("box_data_items_heading");

    const [allDataEmail,setAllDataEmail]=useState("box_data_items_email");

    const [dotColor,setdotColor]=useState("dot");

    

    const url = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20";

    async function getUserData(){

        const result = await fetch(url);

        const finalResult = await result.json();
    
        console.log(finalResult);

        setResultData(finalResult.results);

    

        setBoxDisplayData(finalResult.results[0].picture.medium);
        setnameTitle(finalResult.results[0].name.title);
        setnameFirst(finalResult.results[0].name.first);
        setnameLast(finalResult.results[0].name.last);
       
        setStreetNum(finalResult.results[0].location.street.number);

        setRoadName(finalResult.results[0].location.street.name);
        setCityName(finalResult.results[0].location.city);
        setStateName(finalResult.results[0].location.state);
        setCountryName(finalResult.results[0].location.country);
        setPostCode(finalResult.results[0].location.postcode);
        setOffset(finalResult.results[0].location.timezone.offset);
        setDescription(finalResult.results[0].location.timezone.description);
        setGen(finalResult.results[0].gender);

        document.getElementById(0).style.backgroundColor="#A259FF";
        document.getElementById(`${0}+gen`).style.color="#fff";
        document.getElementById(`${0}+head`).style.color="#fff";
        document.getElementById(`${0}+email`).style.color="#fff";
        document.getElementById(`${0}+dot`).style.backgroundColor="#fff";
       
        
      
       }

       const handleClick=(key)=>{


        setBoxDisplayData(resultData[key].picture.medium);
        setnameTitle(resultData[key].name.title);
        setnameFirst(resultData[key].name.first);
        setnameLast(resultData[key].name.last);
       
        setStreetNum(resultData[key].location.street.number);

        setRoadName(resultData[key].location.street.name);
        setCityName(resultData[key].location.city);
        setStateName(resultData[key].location.state);
        setCountryName(resultData[key].location.country);
        setPostCode(resultData[key].location.postcode);
        setOffset(resultData[key].location.timezone.offset);
        setDescription(resultData[key].location.timezone.description);
        setGen(resultData[key].gender);
        
        for(let i=0; i<20;i++ ){
            if(i!=key){
            document.getElementById(i).style.backgroundColor="#fff";
            document.getElementById(`${i}+gen`).style.color="#787878";
             document.getElementById(`${i}+head`).style.color="#000";
             document.getElementById(`${i}+email`).style.color="#E16259";
             document.getElementById(`${i}+dot`).style.backgroundColor="#787878";
             }
     
         }
        document.getElementById(key).style.backgroundColor="#A259FF";
        document.getElementById(`${key}+gen`).style.color="#fff";
        document.getElementById(`${key}+head`).style.color="#fff";
        document.getElementById(`${key}+email`).style.color="#fff";
        document.getElementById(`${key}+dot`).style.backgroundColor="#fff";

       
    }
   
    
       useEffect(()=>{
        getUserData();
      },[]);

      const box_data_items="box_data_items";

    return (
        <div className="container">
          
         {/* Brand Name and Navigation bar */}
          
          

<div className="nav">
  
  <div class="nav-links" >
    <a  id="active">Product</a>
    <a >Download</a>
    <a  >Pricing</a>
  </div>
  
</div>


           {/* display box started */}
         
         
           <div className="displayBox">
         
           <div className="row ">

           <div className="col-md-3" >
            
            <div className="img_box" >
            <img src={boxDisplayData} alt="displayimage" className="img_style" />
            </div>
           </div>

           <div className="col-md-9" >
            
            <h1 className="heading_style">{ `${nameTitle} ${nameFirst} ${nameLast}`} </h1>

            <p className="display_add"><span style={{ color:"#A259FF"}}>{streetNum},</span>{ ` ${ roadName}, ${cityName} ,${stateName}, ${countryName}, ${postCode}`}<br />{`${offset}, ${description}`}<br /> <span style={{ color:"#B6B6B6"}}>{gen}</span></p>
            
           </div>
    
           </div>


         </div>



        {/* All users started */}

        <div className="box_data" >
        
        <div className="row">


     { resultData.map((data,key)=>{
          return (<div className="col-xl-3 col-md-6 col-lg-4"   >
        
        <div id={key} className="box_data_items" onClick={()=>handleClick(key)} style={{ backgroundColor:"#fff"}} >

        <p id={`${key}+gen`}className={allDataGen}>{data.gender} <span id={`${key}+dot`} class={dotColor}></span> NL </p>
        <h1 id={`${key}+head`} className={allDataHeading}>{`${data.name.title} ${data.name.first} ${data.name.last} `}</h1>
        <p id={`${key}+email`}  className={allDataEmail}>{data.email}</p>
        
        </div>
        
        </div>)
       
    }) }


       

        </div>

        </div>



        </div>
    )
}

export default Main;

import React from "react";
import jwt from 'jsonwebtoken';
import { useNavigate } from "react-router-dom";


const Dropdownprofile = () => {

  const navigate = useNavigate();

    const myStyle = {
        backgroundColor: '#ffffff',
        color: 'black',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc', /* sets border to 2px width, solid style, and color #ccc */
        borderColor: 'gray',
        position : 'absolute',
        right: '4px',
        top:'4.5rem',
        width:'300px',
      };

      const hr = {
        border: 'none',
        borderTop: '1px solid #b6ada6',
        margin: '20px 0',
        marginTop : '0px',
        marginBottom: '10px'
      }

const data = localStorage.getItem("token");
let decodedToken = jwt.decode(data);
let Name = decodedToken.name;
let Email = decodedToken.email;
// console.log(Characters);
      
      function Profile() {
       console.log("click Profile")
      }
      
      function logOut() {
        localStorage.removeItem("token");
        navigate("/login");
       }
      

    return(
    <div style={myStyle}>
        <span style={{}} className=''>
            <h4 style={{}} className="text-lg font-semibold">{Name}</h4>
            <p>{Email}</p>
            <hr style={hr} />
        </span>
        <div  className="flex flex-col">
            <ul className="flex p-1 flex-col gap-3 space-y-1">

                {/* <li style={{padding:'0.5ch'}}
                  onClick={Profile}>
                    Profile
                </li>

                <li style={{padding:'0.5ch'}}
                  // onClick={upGrade}
                  >
                    Plans Upgrade
                </li> */}

                <li style={{padding:'0.5ch'}}
                  onClick={logOut}>
                    Logout
                </li>

            </ul>
            <style jsx>{`
        li:hover {
          background-color: #eee;
          cursor: pointer;
        }
        .selected {
          background-color: #ddd;
            padding:1ch;
        }
      `}</style>
        </div>
    </div>
    )
}
export default Dropdownprofile;
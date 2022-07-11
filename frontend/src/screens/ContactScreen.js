import React, { useEffect } from 'react'
import { Tab } from 'react-bootstrap'
import { MetaTags } from 'react-meta-tags'
import styles from '../css/styles.css'
const API_KEY = "AIzaSyCLebddnSKiWeYC4d5nfjgSSIM42NNT3kg"
const ContactScreen = ({ match }) => {
  
  return (
      <html lang="en">
          <head>  
              <MetaTags>
                <meat charset="UTF-8"></meat>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" type="text/css" href="../css/styles.css"></link>
                <title>Contacts</title>
              </MetaTags>
          </head>
              <body>
              
              <section>
              <h1 style={{ textAlign: 'center' , color: 'darkgoldenrod' ,fontSize:24 , backgroundColor: "rgba(125, 56, 207, 0.8)"}}>  ***** DOCTORS : CONTACT AND MORE INFORMATION *****  </h1>
                <div className="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Doctor's Name</th>
                        <th>Hosptal/Clinic</th>
                        <th>LOCATION</th>
                        <th>SPECIALITY</th>
                        <th>APPONTMENT TIME</th>
                        <th>CONTACT NO.</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="tbl-content">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      <tr>
                        <td> 001</td>
                        <td> DR. KENISON SHRESTHA </td>
                        <td> EXPERT CLINIC </td>
                        <td> LAGANKHEL,<br/> LALITPUR</td>
                        <td> PSYCIATRY </td>
                        <td> 6 AM - 10 AM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}>
                          <b> 9862031120 </b> </td>
                      </tr>
                      <tr>
                        <td> 002 </td>
                        <td> DR. ANIL KUMAR BHATTA </td>
                        <td> DERM DYNAMICS SKIN HAIR AND LASER CLINIC </td>
                        <td> KUMARIPATI, LALITPUR </td>
                        <td> DERMATOLOGIST, VENEROLOGIST AND AESTHECIAN </td>
                        <td> 10 AM - 4 PM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}>  9814343143 </td>
                      </tr>
                      <tr>
                        <td> 003 </td>
                        <td> DR. HEM BAHADUR LIMBU </td>
                        <td> HELPING HANDS COMMUNITY HOSPITAL </td>
                        <td> CHABHIL CHOWK </td>
                        <td> CARDIOLOGIST  </td>
                        <td> 7 AM - 5 PM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}>9808054321</td>
                      </tr>
                      <tr>
                        <td> 004</td>
                        <td> DR. SUSHMA DUWAL </td>
                        <td> GLOBAL EYE CENETR </td>
                        <td> BATTISPUTALI, OLD BANESHWOR</td>
                        <td> CONSULATANT GENERAL OPTHALMOLOGIST </td>
                        <td> 6 AM - 2 PM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}>9851001589</td>
                      </tr>
                      <tr>
                        <td> 005</td>
                        <td> DR. SANDESH PRASAD MASKEY </td>
                        <td> STAR HOSPITAL LIMITED </td>
                        <td> SANEPA, RING ROAD, LALITPUR</td>
                        <td> PLASTIC SURGEON </td>
                        <td> 8 AM - 8 PM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}>9812344321</td>
                      </tr>
                      <tr>
                        <td> 006</td>
                        <td> DR. SWASTI SHARMA </td>
                        <td> GREEN CITY INFERTILITY CARE CENTER </td>
                        <td> BASUNDHARA, KATHMANDU</td>
                        <td> GYNAECOLOGIST AND FERTILITY SPECIALIST </td>
                        <td> 9 AM - 3 PM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}> 9740778899</td>
                      </tr>
                      <tr>
                        <td> 007 </td>
                        <td> DR. SHRSITHI TIWARI </td>
                        <td> CHILHOOD ASTHMA ALLERGY CLINIC PRIVET LIMITED </td>
                        <td> KATHMANDU</td>
                        <td> MEDICAL ONCLOGIST </td>
                        <td> 11 AM - 6 PM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}>9851913579</td>
                      </tr>
                      <tr style={{textTransform: 'uppercase'}}>
                        <td> 008 </td>
                        <td> Dr. Dibas Khadka </td>
                        <td> Bir Hospital </td>
                        <td> Kanti Path, Kathmandu</td>
                        <td> Internal Medicine, Hepatology </td>
                        <td> 2 PM - 7 PM </td>
                        <td style={{fontSize:20, color: "#ffed4a" }}>9862031120</td>                        
                      </tr>                 
                    </tbody>
                    </table>
                </div>

              </section>
              <section>
                  {/* <iframe
                      width="1200"
                      height="900"
                      style="border:0"
                      loading="lazy"
                      allowfullscreen
                      referrerpolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLebddnSKiWeYC4d5nfjgSSIM42NNT3kg">
                  </iframe> */}
                  <p style={{color: 'red'}}> For more search options, press <a href = "https://maps.google.com/maps?ll=27.700769,85.30014&z=17&t=m&hl=en-US&gl=US&mapclient=embed&q=27%C2%B042%2702.8%22N%2085%C2%B018%2700.5%22E%2027.700769%2C%2085.300140@27.700769,85.30014"> <b> <i>view larger map </i></b> </a></p>
                  <iframe name="gMap" src={`https://www.google.com/maps/embed/v1/place?q=${27.700769},${85.300140}&key=${API_KEY}`} width="1000" height="700"></iframe>
              </section>
              </body>
      </html>
)  
}

export default ContactScreen

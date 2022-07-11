import React, { useEffect } from 'react'
import { Tab } from 'react-bootstrap'
import { MetaTags } from 'react-meta-tags'
import styles from '../css/styles.css'
import { Component } from 'react'
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
              <section style={{ textAlign: 'right', background: null }}>
              <div >
                <img src= './images/img5.png' alt='' style={{ height: 350, width: 500}}/> 
                </div>
                <div >
                <img src= './images/img4.jpg' alt='' style={{ height: 350, width: 500}}/> 
                </div>
                <div >
                <img src= './images/img1.jpg' alt='' style={{ height: 380, width: 500}}/> 
                </div>
                <div >
                <img src= './images/img2.jpg' alt='' style={{ height: 350, width: 500}}/> 
                </div>
                <div >
                <img src= './images/img3.jpg' alt='' style={{ height: 350, width: 500}}/> 
                </div>
               
               
              </section>
              <section style={{position: 'absolute', right:300, top: 109 ,backgroundColor: "rgba(255, 255, 255, 0.6", left: -20 , textAlign: 'center', backgroundSize: 'cover', width: 700, fontSize: 20,color: 'royalblue', flexDirection: 'row', justifyContent: 'space-between'}}>
              <h1 style={{ textAlign: 'center' , fontSize:24, color: 'light blue' }}>  About PharmaHome </h1>
                <b>
                <p>
                PharmaHome is an online healthcare delivery app which delivers medicines to all over Nepal.
                </p>
                <p>
                PharmaHome is an online medicines delivery company with a huge database of health-related services ranging from appointments with doctors and specialists in the medical field to various types of pharmaceutical and sanitation products. We have but one <b style={{color:'red'}}>major goal: <br/> To make these services accessible to the people who need it the most.</b>                </p>
                <p>
                The online medicine delivery app which currently provides delivery services within the valley intends to further expand its products and services along with reach to all corners of our Nepal.  PharmaHome is a social enterprise, which serves as an intermediary between pharmacies and people by making medicines available to those who cannot access them, for whatever the reason whether they are sick and unable to stop by at a near pharmacy or because they live in remote areas. PharmaHome was founded in Kathmandu, Nepal with the goal of making medicines available at affordable prices through high-quality and reliable distribution. Although medicine delivery is one of the major focuses of our services, we are not limited to it. This app is ideal for patients who need home remedies, prescriptions, or over-the-counter medications. We also have appointment and contact information on various medicinal professionals so that online or offline appointments can be booked for checkups. The app should be easy to use and integrate with healthcare stakeholders including hospitals and pharmacists who can provide medical advice to patients who are not sure about what they need. The delivery service through a network of partners centers will make it possible for these physicians and pharmacists to respond within 24 hours of when the patient has ordered for proper delivery options.                </p>
                <p>
                PharmaHome is a seamless and cost-effective way to deliver medicine to patients in Nepal. It all started with the identification of a personal need. On the rise of Covid Virus Pandemic, people were mostly left to isolation every few houses. Even the necessary medicinal supplies were unavailable to the ones who were stricken by illness, thus further increasing the chaos on the pandemic, so the PharmaHome team took it on themselves to find an alternative. On an active quest and continuous research for reliable and effective method of home delivery, we finally established an online Pharmacy store with doctor consultation, blogs for general health tips and a map to point to the nearest pharmacy for convenience that adds up to our promise of authentic and professional pharmaceutical delivery.                </p>
                <p>
                On the market where there are varied prices on medicines from one pharmacy to the next, Pharma Home’s goal is to provide quality medicine at a reasonable and affordable price. To encourage the selling of products online, we have started a free first delivery of any medicine within 200 Rupees. Currently only the rural areas surrounding the Kathmandu valley is available for medicine delivery, but soon the delivery services is looking forward to expanding over the national region. All orders made within the app are safe and secure!Therefore, PharmaHome was founded to fulfill the needs of Nepali patients so that people can easily order any medicine which they want to order from this app and receive it on their footsteps. By 2024 we had an idea to introduce a "smart pharmacy" by using technology.                </p>
                </b>
              </section>            
              </body>
              <div className='anime'> WELOME TO PHARMAHOME !!!</div>
              
      </html>
)  
}


export default ContactScreen

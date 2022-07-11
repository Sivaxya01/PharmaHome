import React, { useEffect } from 'react'
import { MetaTags } from 'react-meta-tags'
import styles from '../css/styles.css'



const ContactScreen = ({ match }) => {
  
  return (
      <html lang="en">
          <head>  
              <MetaTags>
                <meat charset="UTF-8"></meat>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" type="text/css" href="/css/contact.css"></link>
                <title>Pharma Blog</title>
              </MetaTags>
          </head>
              <body>
              <div class="container">
        <div class="grid">
            <div class="card">
                <div class="card_img">
                    
                </div>
                <div class="card_body">
                    <h2 class="card_title">Have a Healthy life Style</h2>
                    <p>Lifestyle medicine is a medical specialty that uses therapeutic lifestyle interventions as a primary modality to treat chronic conditions including, but not limited to, cardiovascular diseases, type 2 diabetes, and obesity. Lifestyle medicine certified clinicians are trained to apply evidence-based, whole-person, prescriptive lifestyle change to treat and, when used intensively, often reverse such conditions. Applying the six pillars of lifestyle medicine—a whole-food, plant-predominant eating pattern, physical activity, restorative sleep, stress management, avoidance of risky substances and positive social connections—also provides effective prevention for these conditions.</p>
                    <p class="card_author">by <a href="#" class="author_link">Sakar Kathiwoda</a></p>
                    <a href="#" class="read_more">Read article</a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                    
                </div>
                <div class="card_body">
                    <h2 class="card_title">Safety tips for Covid 19</h2>
                    <p>Preventive measures include physical or social distancing, quarantining, ventilation of indoor spaces, covering coughs and sneezes, hand washing, and keeping unwashed hands away from the face. The use of face masks or coverings has been recommended in public settings to minimise the risk of transmissions.Food businesses need to ensure adequate sanitary facilities are provided and ensure food workers thoroughly and frequently wash their hands. Soap and water is adequate for hand washing.</p>
                    <p class="card_author">by <a href="#" class="author_link">Shibakshya Rai</a></p>
                    <a href="#" class="read_more">Read article</a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                   
                </div>
                <div class="card_body">
                    <h2 class="card_title">Pharma Home is best</h2>
                    <p>The online medicine delivery app which currently provides delivery services within the valley intends to further expand its products and services along with reach to all corners of our Nepal. PharmaHome is a social enterprise, which serves as an intermediary between pharmacies and people by making medicines available to those who cannot access them, for whatever the reason whether they are sick and unable to stop by at a near pharmacy or because they live in remote areas. PharmaHome was founded in Kathmandu, Nepal with the goal of making medicines available at affordable prices through high-quality and reliable distribution.</p>
                    <p class="card_author">by <a href="#" class="author_link">Sulav Rijal</a></p>
                    <a href="#" class="read_more">Read article</a>
                </div>
            </div>
        </div>
    </div>

              </body>
      </html>
)  
}

export default ContactScreen

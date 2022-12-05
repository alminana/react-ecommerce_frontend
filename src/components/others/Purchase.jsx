import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import parse from 'html-react-parser';
export class Purchase extends Component {

     constructor(){
          
          super();
          this.state={
               purchase_guide:""
          }
     }

     componentDidMount(){
          const parse = require('html-react-parser');

          let SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

          if(SiteInfoPurchase == null){
               axios.get(AppURL.AllSiteInfo).then(response =>{
                    let StatusCode = response.status;
                    if(StatusCode==200){
                         let JsonData = (response.data)[0]['purchase_guide'];
                         this.setState({purchase_guide:JsonData});


                    }
         
      }).catch(error=>{

      });
    

     }

     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                         <h4 className="section-title-login">Purchase Page </h4>
                         <p className="section-title-contact">
                         { parse(this.state.purchase_guide) }
                         </p>
                         </Col>
                    </Row>
               </Container>
               </Fragment>
          )
     }
}

export default Purchase
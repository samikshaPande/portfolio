import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  displayStyle = "none";
  modalData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  summaryList : String[] = [
    "6 years of experience in software industry  and having an in-depth knowledge and extensive work experience in developing web applications.",
    "Hands on experience in developing Single Page Applications (SPA) using JavaScript frameworks like Angular.",
    "Good experience working with Bootstrap and CSS3 media queries to support for Responsive Web Design.",
    "Experience in building cross browser compatibility applications using Bootstrap, Angular.",
    "Excellent command on Angular modules, components, directives, services, routing, dependency Injection and data bindings.",
    "Experience in Object Oriented programming concepts in Java.",
    "Proficient in Core Java, J2EE and the frameworks like Spring, Spring Boot, Restful services.",
    "Experience in working with RESTFUL web services and implementing RESTFUL API's.",
    "Well acquainted with the agile methodology."
  ];

  workList = [
    {
      position: "Application Developer", cd:"ibm", company: "IBM India", duration: "2021-2022", 
      logo:"./../../assets/images/IBM_logo.png", projectName:"Services Procurement@IBM", 
      projectDesc:"SP@IBM is transitioning  the legacy CSA application to a microservices, angular and cloud-based solution enhancing functionality. CSA is a global application to facilitate the procurement of services by allowing requesters and buyers to interact with pre-configured suppliers directly. Requesters will be able to create their requests, submit it to suppliers, review the suppliers' responses and select the response and bridge it to Bond and for financial approvals and PO processing.",
      task: [
        "Responsible for development of scalable, reusable and multi-browser compatible single page web applications.",
        "Developed user interaction screens using Angular 8 and  Carbon Design system.",
        "Designed and developed user Interface to build and implement multi-region Application Architecture.",
        "Provided technical support to the application during Hypercare duration after Go-live."
      ]
    },
    {
      position: "Associate Developer", cd:"cts", company: "Cognizant Technology Solutions", 
      duration: "2019-2021", logo:"./../../assets/images/CTS_logo.png", projectName:"Collateral Management System and Margin Pledge Application", 
      projectDesc:"Collateral Management System is a web-based system allowing Asset Management Company and Bank to manage and keep track of the collaterals pledged with them. It enables banks to record and retrieve a wide range of collateral details. And Margin Pledge Application allows investors to use stocks as securities to avail loan.",
      task: [
        "Responsible for end to end Development of application, development of backend services, integration of services at frontend, development of user interface.",
        "Developed functional components using prototypes and wireframes.",
        "Developed RESTful APIs to handle requests from clients and swagger to test API’s",
        "Worked on production readiness, production deployments and production support. ",

      ]
    },
    {
      position: "System Engineer", cd:"tcs", company: "Tata Consulatancy Services", duration: "2016-2019",
      logo:"./../../assets/images/TCS_logo.png",
      subCompany: [{
        projectName:"PIM Bemmaning Application ", 
        projectDesc:"PostNord is Swedish and Danish government owned company which offers communications and logistics solutions to, from and within the Nordic region. PIM Bemmaning Web Application helps Postnord to manage the data of the company's employees.",
        name: "Postnord", task: [
          "Responsible for Development of UI using Angular and primeNg.",
          "Created various angular custom directives and developed components that can be reused at various places in the application.",
          "Experience integrating RESTful services (APIs). Used JSON for data transfer between frontend and backend.",
          "Collaboration with back-end developers in the process of developing RESTful APIs.",
        ]
      }, {
        projectName:"Nikken Rental System", 
        projectDesc:"Nikken Corporation is a subsidiary of Mitsubishi Corporation which operates in the construction equipment rental business. Development of the NIKKEN RENTAL system intended to build components and services that would enhance the system currently in place.",
        name: "Nikken Corporation", task: [
          "Responsible for development of application using Spring MVC.",
          "Developed User interface using JSP, HTML, CSS3, Javascript and JSON.",
          "Execution of all possible test cases and ensuring 100% code coverage using tools like Cobertura.",
          "A clear documentation to justify all executed test case evidence.",
         ]
      },
      {
        projectName:"Pinacle Pass Application", 
        projectDesc:"A Corporate online and Mobile banking portal. The App provides quick and secure access to company’s financial information to make informed financial decisions and perform key treasury management functions remotely.",
        name: "Pittsburgh National Corporation (PNC)", task: [
          "Developed screen for iPhone and iPad using AngularJs, Ionic framework and IBM Mobile First platform.",
          "Worked on defects and change Requests in the maintenance and support phase of the project. ",
        ]
      },]
    }
  ]

  openModal(data:any){
    this.displayStyle = 'block';
    this.modalData = data;
  }

  closePopup() {
    this.displayStyle = 'none';
    this.modalData = {};
  }
  

}

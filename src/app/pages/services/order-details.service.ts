import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // Services Details

  foodDetails = [
    {
      id:1,
      foodName:"Programming & Tech",
      foodDetails:"Develop by programmers",
      foodPrice:"Starting with web development for client-side (frontend) and server-side (backend), the category also offers specialists in Wordpress and e-commerce development, mobile or desktop apps, support & cybersecurity, as well as user testing and QA",
      foodImg:"/../../../../../../assets/img/Capture_2.jpg"
    },
    {
      id:2,
      foodName:"DataInception Consulting Services",
      foodDetails:"Engage, collaborate, evolve and implement",
      foodPrice:"Our consulting team brings a strategic perspective to complex challenges. We build data strategies and roadmaps that eliminate gaps and drawbacks and when possible, deliver a leading edge. Our business models and approaches help you support a data-driven culture that includes employees, suppliers, management and customers. By combining personnel and analytical approaches, your business can create a new fact-based, decision-making ethos centered around data",
      foodImg:"/../../../../../../assets/img/Capture_7.jpg"
    },
    {
      id:3,
      foodName:"Artificial intelligence (AI)",
      foodDetails:"AI services",
      foodPrice:"Reinvent mission critical workflows with AI to create efficient processes, augment human capabilities, and improve business outcomes.",
      foodImg:"/../../../../../../assets/img/Captur_8.jpg"
    },
    {
      id:4,
      foodName:"Digital Marketing",
      foodDetails:"Social Marketing",
      foodPrice:"We are a Connecticut digital marketing agency specializing in Search Engine Optimization (SEO), Pay-Per-Click (PPC), Conversion Rate Optimization (CRO), Social Media Marketing, Content Marketing, Website Design, and Creative Services. As a highly experienced, full-service digital marketing company in CT we understand what it takes to create a successful campaign and believe that every strategy should be unique to your brand.",
      foodImg:"/../../../../../../assets/img/Capture_1.jpg"
    },
    {
      id:5,
      foodName:"Data",
      foodDetails:"Data Science",
      foodPrice:"Analyzing, processing, research, and data entry,Dashboard Building by using python, Tableau and Power BI are among the most popular data services and cover a wide range of services. Data engineering, visualization, and science are also standard services. Data analytic services cover everything from creating Google and Excel data-sheets, statistic data reports, and building BI, AI, and Big Data reports. Data processing services include data mining, automation, web scraping, formulations, and consultations. And hiring virtual assistants is common for solving research and data entry services, creating email lists and generate leads, and other administrative tasks required for data services.",
      foodImg:"/../../../../../../assets/img/Capture_6.jpg"
    }
  
  ]




}
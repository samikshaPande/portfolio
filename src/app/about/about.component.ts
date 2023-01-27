import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  aboutMeList : String[] = [
    "I am a front-end developer with over 6 years of experience in the industry. My expertise lies in Angular and Java development. I have a strong understanding of web technologies and am able to create visually appealing and user-friendly websites. I am also experienced in working with APIs and integrating them into my projects.",
    "Throughout my career, I have had the opportunity to work on a variety of projects, ranging from small websites to large-scale enterprise applications. I am a proactive problem-solver and enjoy finding creative solutions to complex development challenges.",
    "In my most recent role, I have been working as a senior developer on a large-scale Angular project, where I have been responsible for leading a team of developers and ensuring the timely delivery of high-quality code.",
    "I am constantly seeking to improve my skills and stay up to date with the latest technologies and industry trends. In my free time, I enjoy experimenting with new technologies and contributing to open-source projects.",
    "I am excited about the opportunity to bring my skills and experience to a new team and am confident that I can make a valuable contribution to any project."
  ];


}

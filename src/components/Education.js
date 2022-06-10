import React, { useState } from "react";
import Card from "./CardE";

const Education = () => {
  const [intern, setIntern] = useState([
    {
      url:
        "https://firebasestorage.googleapis.com/v0/b/databasedemo-dab5d.appspot.com/o/ETGSI12813-1.jpg?alt=media&token=49dc9bf1-0d2d-4fab-9987-0d8abce694b3",
      github: "https://github.com/akshaysutar8860/summer_olympic_data_analysis",
      title: "Elite-Techno-Groups",
      info:
        "this was one month internship on data-analysis,machine-learning,artificial-intelligance.they provided mentorship on above mentioned tecnologies.also did assignments given by the mentor"
    },
    {
      url:
        "https://firebasestorage.googleapis.com/v0/b/databasedemo-dab5d.appspot.com/o/464cd5e2-a5d3-4abf-bd37-159f35f60200-merged-1.jpg?alt=media&token=a9057766-750b-4d6a-8140-9d55148bce4d",
      github: "##",
      title: "I-neuron",
      info:
        "this was a internship in which we completed a group project google playstore app data analysis.python,machine-learning,deep-learning"
    }
  ]);

  const [course, setCourse] = useState([
    {
      url:
        "https://firebasestorage.googleapis.com/v0/b/databasedemo-dab5d.appspot.com/o/0001.jpg?alt=media&token=d7e4bd0b-52ba-45a2-a959-d93487a7827b",
      github: "https://github.com/akshaysutar8860/letsupgradepython",
      title: "letsUpgrade",
      info: "completed python course on letsupGrade platform"
    },
    {
      url:
        "https://firebasestorage.googleapis.com/v0/b/databasedemo-dab5d.appspot.com/o/0002.jpg?alt=media&token=13d4cf5c-6609-4b8e-b383-e799946f29d8",
      title: "Udemy",
      github: "#",
      info: "completed java essential for project devolopment courese on udemy "
    },
    {
      url:
        "https://firebasestorage.googleapis.com/v0/b/databasedemo-dab5d.appspot.com/o/LinkedIn%20Learning%20Certificate%20(1)-1.jpg?alt=media&token=b236d71a-9d37-4a7d-a6ab-051d05e7aa5b",
      title: "LinkedIn",
      info:
        "this course is about project management and devolope project management skills"
    },
    {
      url:
        "https://firebasestorage.googleapis.com/v0/b/databasedemo-dab5d.appspot.com/o/Akshay%20Sutar%20-%20Intro%20to%20Machine%20Learning.png?alt=media&token=331461bf-a96d-4234-8e0c-02a479356c0d",
      title: "kaggle",
      github: "#",
      info: "completed kaggle mini coureses for data science,ML,AI"
    }
  ]);
  return (
    <div className="mt-20 m-2">
      <button className="bg-indigo-200 p-2 text-md">Internships</button>
      <div className="internships flex flex-col sm:flex-row mb-20">
        {intern.map((val, idx) => {
          return (
            <Card
              key={idx}
              url={val.url}
              github={val.github}
              title={val.title}
              info={val.info}
            />
          );
        })}
      </div>
      <button className="bg-indigo-200 p-2 text-md">Courses</button>
      <div className="Courses flex flex-col sm:flex-row mb-20">
        {course.map((val, idx) => {
          return (
            <Card
              url={val.url}
              github={val.github}
              title={val.title}
              info={val.info}
            />
          );
        })}
      </div>
      <div className="academics">
        <button className="bg-indigo-200 p-2 text-md mb-5">academics</button>
        <div className="w-1/2 p-10 text-sm mt-10">
          <p className="font-thin">
            <span className="text-2xl font-bold text-indigo-500 mr-4 bg-indigo-300 p-1">
              BSC:
            </span>
            completed Bachelor degree in computer science at Devchand College
            Arjunnagar under Shivaji university Kolhapur
          </p>
        </div>
        <div className="w-1/2 p-10 text-sm mt-10">
          <p className="font-thin">
            <span className="text-2xl font-bold text-indigo-500 mr-4 bg-indigo-300 p-1">
              HSC:
            </span>
            completed HSC in Devchand College Arjunnagar under with percentage
            of 68
          </p>
        </div>
      </div>
      <div className="w-1/2 p-10 text-sm mt-10">
        <p className="font-thin">
          <span className="text-2xl font-bold text-indigo-500 mr-4 bg-indigo-300 p-1">
            SSC:
          </span>
          completed SSC at Malage vidyalay malage bk with the percentage of 90
        </p>
      </div>
    </div>
  );
};
export default Education;

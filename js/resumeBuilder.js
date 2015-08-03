//(function () {
//  'use strict';

var bio = {
  "name": "Jean-Michel Legrand",
  "role": "Front Engineer",
  "contacts": {
    "mobile": "33-6-6-82-26-26-65",
    "email": "jml.legrand@gmail.com",
    "twitter": "jmllegrand",
    "github": "jmllegrand",
    "location": "Paris"
  },

  "welcomeMessage": "First heard about Agile in US in 2001 while the manifesto was written. " +
  " Since then, Jean-Michel has been working on a number of high business profile projects" +
  " 2 main business context: Insurance and Clearing & Custody " +
    "Positions held: From COach to Scrum Master to Developper",
  "skills": ["Team Leadership, Team Player", "Lean / Agile values", "Scrum, XP & Kanban", "JS", "Spring MVC", "SVN, Jira, Jenkins"],
  "biopic": "images/fry.jpg",
  "display": function () {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    // use $.each() to not only iterate over arrays but over objets as well
    $.each(bio.contacts, function (property, value) {
      $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", property).replace("%data%", value));
    });

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function (element) {
        $("#skills").append(HTMLskills.replace("%data%", element));
      });
    }
  }
};

var work = {
  jobs: [
    {
      employer: "defact-o",
      title: "boss",
      location: "Paris",
      dates: "2014-present",
      description: "One man business company - Consulting work on large scale agile projects"
    },
    {
      employer: "valtech",
      title: "senior consultant",
      location: "Paris",
      dates: "2006-2014",
      description: "Consulting related to agile stuff "
    },
    {
      employer: "softeam",
      title: "consultant",
      location: "Paris",
      dates: "2002-2005",
      description: "Consulting a for large project in the banking industry"
    }
  ],
  display: function () {
    work.jobs.forEach(function (job) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
  }
};

var projects = {
  projects: [
    {
      title: "new sesame",
      dates: "2014-present",
      description: "Reengineering of the sales tools for bank advisor - Target 2 major retail banking actors in France",
      images: []
    },
    {
      title: "acetp",
      dates: "2002-2005",
      description: "reengineering reengineeringreengineeringreengineeringreengineeringreengineeringreengineeringreengineering",
      images: []
    }
  ],
  display: function () {
    projects.projects.forEach(function (project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
      project.images.forEach(function (image) {
        $(".project-entry:last").append(formattedProjectImages[HTMLprojectImage.replace("%data%", image)]);
      });
    });
  }
};

var education = {
  "schools": [
    {
      "name": "Carnegie Mellon University",
      "location": "Pittsburgh",
      "degree": "Master degree",
      "dates": 2001,
      "major": ["Computer Science"],
      "url": "http://www.cmu.edu/"
    },
    {
      "name": "Esigelec",
      "location": "Rouen",
      "degree": "BA",
      "dates": 1998,
      "major": ["Eletrical Engineering"],
      "url": "http://www.esigelec.fr/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front Nanodegree",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com"
    }
  ],
  display: function () {
    education.schools.forEach(function (school) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      school.major.forEach(function (major) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
      });
    });

    if (education.onlineCourses.length) {
      $("#education").append(HTMLonlineClasses);
    }
    education.onlineCourses.forEach(function (onlineCourse) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", onlineCourse.url));
    });
  }
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


/**
 * REF : http://udayanshevade.github.io/Udacity-FEND-Resume-Dragonborn/
 * http://lei-clearsky.github.io/nanodegree-fewd-p2/
 */

//})();



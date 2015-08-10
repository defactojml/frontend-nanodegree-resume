var resumeBuilder = (function () {
  'use strict';

  var bio = {
    "name": "Jean-Michel Legrand",
    "role": "Scrum Master / Front Engineer",
    "location": "Paris (France)",
    "contacts": {
      "mobile": "33 6 82 26 26 65",
      "email": "jml.legrand@gmail.com",
      "twitter": "jmllegrand",
      "github": "defactojml"
    },

    "welcomeMessage": "First heard about Agile in US in 2001 while the manifesto was written. " +
    " Since then, Jean-Michel has been working on a number of high business profile projects in 2 main " +
    "business contexts: Insurance and Clearing & Custody",
    "softSkills": ["Team Leadership, Team Player", "Lean / Agile values", "Scrum, XP & Kanban"],
    "techSkills": ["JS (ES5)", "Spring MVC", "SVN, Jira, Jenkins"],
    "biopic": "images/fry.jpg",

    "display": function () {
      $("#topInfo").append(HTMLheaderName.replace("%data%", bio.name));
      $("#topInfo").append(HTMLheaderRole.replace("%data%", bio.role));
      //$("#topInfo").append(HTMLheaderLocation.replace("%data%", bio.location));


      // use $.each() to not only iterate over arrays but over objets as well
      /*$.each(bio.contacts, function (property, value) {
       $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", property).replace("%data%", value));
       $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", property).replace("%data%", value));
       });*/

      //$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

      $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
      $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
      $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));


      $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

      if (bio.softSkills.length || bio.techSkills.length) {
        if (bio.softSkills.length) {
          $("#skills").append(HTMLsoftSkillsStart);
          bio.softSkills.forEach(function (element) {
            $("#softSkills").append(HTMLSkill.replace("%data%", element));
          });
        }

        if (bio.techSkills.length) {
          $("#skills").append(HTMLtechSkillsStart);
          bio.techSkills.forEach(function (element) {
            $("#techSkills").append(HTMLSkill.replace("%data%", element));
          })
        }
      }

    }
  };

  var work = {
    "jobs": [
      {
        "employer": "Defact-o",
        "title": "Freelancer",
        "location": "Paris",
        "dates": "2014-present",
        "description": "Consulting on large scale agile projects"
      },
      {
        "employer": "Valtech",
        "title": "Senior Consultant",
        "location": "Paris",
        "dates": "2006-2014",
        "description": "Consulting related to agile "
      },
      {
        "employer": "Softeam",
        "title": "Consultant",
        "location": "Paris",
        "dates": "2002-2005",
        "description": "Consulting for large project in the banking industry"
      },
      {
        "employer": "Robotics Institute",
        "title": "Developper",
        "location": "Pittsburgh, PA",
        "dates": "1998-2001",
        "description": "Developpment on applied research projects"
      }
    ],
    "display": function () {
      work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));

        $(".work-entry:last").append(HTMLworkTitle.replace("%data%", job.title));
        //$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
      });
    }
  };

  var projects = {
    "projects": [
      {
        "title": "new sesame",
        "dates": "2014-present",
        "description": "Reengineering the bank tellers' insurance products intranet - Platform which targets 2 major retail banking actors in France",
        "images": []
      },
      {
        "title": "cockpit",
        "dates": "2006",
        "description": "Development of a platform providing integrated solutions related to planning and project management (for Agile distributed projects)",
        "images": []
      },
      {
        "title": "acetp",
        "dates": "2002-2005",
        "description": "International project for clearing/custody system",
        "images": []
      },
      {
        "title": "perclos",
        "dates": "1998-1999",
        "description": "Development of an embedded system to detect drowsyness behind the wheels",
        "images": []
      }
    ],
    "display": function () {
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
        "location": "Pittsburgh, PA",
        "degree": "MS",
        "dates": 2001,
        "major": ["Software Engineering"],
        "url": "http://www.cmu.edu/"
      },
      {
        "name": "Esigelec",
        "location": "Rouen, France",
        "degree": "BA",
        "dates": 1998,
        "major": ["Electrical Engineering"],
        "url": "http://www.esigelec.fr/"
      }
    ],
    "onlineCourses": [
      {
        "title": "Front-End Web Nanodegree",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com"
      }
    ],
    "display": function () {
      education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolLocation.replace("%data%", school.location));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree) + HTMLschoolMajor.replace("%data%", school.major[0]));
        /*school.major.forEach(function (major) {
         $(".education-entry:last").append(HTMLschoolDegreeMajor.replace("%dataMajor%", major));
         });*/
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));

      });

      if (education.onlineCourses.length) {
        $("#education").append(HTMLonlineClasses);
      }
      education.onlineCourses.forEach(function (onlineCourse) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", onlineCourse.school));
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", onlineCourse.title));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
      });
    }
  };

  var others = {
    "certifications": [
      {
        "name": "Certified Scrum Master (CSM)",
        "dates": 2006
      }
    ],
    "publications": [
      {
        "name": "A drowsy driver detection system for heavy vehicles",
        "publishing": "IEEE",
        "dates": 2001
      }
    ],
    "display": function () {
      others.certifications.forEach(function (certification) {
        $("#certification").append(HTMLcertificationStart);
        $(".certification-entry:last").append(HTMLcertificationName.replace("%data%", certification.name));
        $(".certification-entry:last").append(HTMLcertificationDates.replace("%data%", certification.dates));
      });

      others.publications.forEach(function (publication) {
        $("#publication").append(HTMLpublicationStart);
        $(".publication-entry:last").append(HTMLpublicationName.replace("%data%", publication.name));
        $(".publication-entry:last").append(HTMLpublicationDates.replace("%data%", publication.dates));
      });

    }
  };

  bio.display();
  work.display();
  projects.display();
  education.display();
  others.display();

  $("#mapDiv").append(googleMap);

  return {
    bio: bio,
    education: education,
    work: work
  }
})();



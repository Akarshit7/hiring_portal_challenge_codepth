export const formFieldData = {
    "questionErrorLocation": "bottom",
    "logoHeight": "100px",
    "logoFit": "cover",
    "logoPosition": "right",
    "elements": [{
      "type": "panel",
      "name": "personal-info",
      "title": "Personal Information",
      "elements": [{
        "type": "text",
        "name": "firstName",
        "title": "First name",
        "isRequired": true
      }, {
        "type": "text",
        "name": "lastName",
        "startWithNewLine": false,
        "title": "Last name",
        "isRequired": true
      }, {
        "type": "text",
        "name": "birthdate",
        "title": "Date of birth",
        "inputType": "date",
        "isRequired": true
      }]
    }, {
      "type": "panel",
      "name": "location",
      "title": "Your Location",
      "elements": [{
        "type": "dropdown",
        "name": "country",
        "title": "Country",
        "choicesByUrl": {
          "url": "https://surveyjs.io/api/CountriesExample"
        }
      }, {
        "type": "text",
        "name": "city",
        "title": "City/Town"
      }, {
        "type": "text",
        "name": "zip",
        "startWithNewLine": false,
        "title": "Zip code",
        "inputType": "number",
        "validators": [{
          "type": "numeric"
        }]
      }, {
        "type": "text",
        "name": "address",
        "title": "Street address"
      }]
    }, {
      "type": "text",
      "name": "email",
      "title": "Email",
      "inputType": "email",
      "placeholder": "mail@example.com"
    }, {
      "type": "text",
      "name": "salary",
      "title": "Expected salary (in US dollars)",
      "inputType": "number",
      "validators": [{
        "type": "numeric"
      }]
    }, {
      "type": "dropdown",
      "name": "position",
      "title": "What position are you applying for?",
      "choices": [{
        "value": "Frontend Developer",
        "text": "Frontend Developer"
      }, {
        "value": "Backend Developer",
        "text": "Backend Developer"
      }, {
        "value": "Full-Stack Developer",
        "text": "Full-Stack Developer"
      }, {
        "value": "Intern",
        "text": "Intern"
      }]
    }, {
      "type": "text",
      "name": "startDate",
      "title": "Date available to start work",
      "isRequired": true,
      "inputType": "date"
    }, {
      "type": "file",
      "name": "resume",
      "title": "Upload your resume",
      "acceptedTypes": "application/pdf"
    }],
    "showQuestionNumbers": false,
    "completeText": "Apply",
  };
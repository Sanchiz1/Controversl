---
sidebar_position: 4
---

# API

## OpenAPI Documents

API OpenAPI documents.

Open your browser and navigate to http://localhost:5000/openapi/v1.json to access generated document.

## Swagger Documentation

API includes Swagger documentation for easy exploration and testing of endpoints.

Open your browser and navigate to http://localhost:5000/swagger to access the Swagger UI.

## Endpoints

### `GET /generateQuiz`

Generates a quiz with random questions.

#### Example Request

```bash
curl "http://localhost:5000/generateQuiz"
```

#### Response
Returns an array of quiz questions in JSON format.

##### Example Response

```json
[
  {
    "question": "Is the Earth flat?",
    "correctAnswer": "False",
    "explanation": "The Earth is an oblate spheroid."
  },
  {
    "question": "Is water made of hydrogen and oxygen?",
    "correctAnswer": "True",
    "explanation": "Water is H2O, composed of two hydrogen atoms and one oxygen atom."
  }
]
```

### `GET /generateQuizByTheme`

Generates a quiz based on a specific theme.

#### Query Parameters

- `theme` (string, required): The theme for the quiz.

#### Example Request

```bash
curl "http://localhost:5000/generateQuizByTheme?theme=science"
```

#### Response
Returns an array of quiz questions in JSON format.

##### Example Response

```json
[
  {
    "question": "Is the speed of light constant?",
    "correctAnswer": "True",
    "explanation": "The speed of light in a vacuum is constant at approximately 299,792 km/s."
  },
  {
    "question": "Is Pluto a planet?",
    "correctAnswer": "False",
    "explanation": "Pluto is classified as a dwarf planet."
  }
]
```
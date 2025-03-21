# Controversl

Controversl is an AI-powered quiz application designed to spark curiosity and engage users with thought-provoking questions. Whether you're looking for a fun way to test your knowledge or dive into themed quizzes, Controversl has you covered.

## About

The app uses Gemini API to generate quizzes, either randomly or based on a selected theme. Users answer questions and receive results with score and detailed explanations.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. Clone the repository:
   
    ```sh
    git clone https://github.com/sanchiz1/controversl.git
    cd controversl
    ```

2. Set Up the API Key

    The application requires an API key for the Gemini API. You can configure this in one of two ways:

    Option 1: Add to `appsettings.json`

    Open the `src/Controversl.API/appsettings.json` file and update the `GeminiSettings` section with your API key:

    ```json
    "GeminiSettings": {
      "Key": "your-api-key",
      "Url": "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
    }
    ```

    Option 2: Add to User Secrets (for windows)

    If you prefer not to store the API key in the source code, use .NET's user secrets feature:

    Navigate to the API project directory:
      ```sh
      cd src/Controversl.API
      ```
    
    Initialize user secrets (if not already done):

      ```sh
      dotnet user-secrets init
      ```
    
    Add the API key to user secrets:
    
      ```sh
      dotnet user-secrets set "GeminiSettings:Key" "your-api-key"
      ```

3. Build and Start the Containers
   
    Use Docker Compose to build and start the containers:

    ```sh
    docker-compose up --build
    ```

4. Access services

   - Client: http://localhost:3000
   - API: http://localhost:5000
   - API swager: http://localhost:5000/swagger
   - Docs: http://localhost:3001
   - Storybook: http://localhost:6006

## Want to contribute?

- Fork the relevant repository.
- Crete a branch for your submission.
- Apply your work there.
- Push your new branch.
- Submit a pull request.

## Authors

- [Oleksandr Zaitsev](https://github.com/Sanchiz1)


## License

Licensed under [MIT](https://github.com/Sanchiz1/Controversl/blob/main/LICENSE)

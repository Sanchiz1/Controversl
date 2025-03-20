---
sidebar_position: 3
---

# Setup

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

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

    Option 2: Add to User Secrets

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
# Weather App

This is a simple Node.js application that fetches weather data using the OpenWeatherMap API and displays it on a web page.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:

    ```plaintext
    API_KEY=your_api_key_here
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The application will be accessible at `http://localhost:5000`.

## Usage

Once the application is running, you can access it in your web browser. By default, it will display weather data for New York City. You can modify the latitude and longitude coordinates in the `url` variable in `index.js` to fetch weather data for a different location.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [Axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env.


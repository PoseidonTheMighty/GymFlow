# Gymflow

Welcome to **Gymflow**, a dynamic and user-friendly gym website designed to inspire and empower your fitness journey. This repository contains the source code for the website, which has been built using **HTML**, **CSS**, and **JavaScript**. It incorporates interactive elements, animations, and powerful features to enhance user experience, including a Fitness AI assistant.

## Features

### Frontend
- **Responsive Design**: The website is fully responsive, ensuring it looks great on all devices.
- **Scroll Animations**: Eye-catching animations that enhance user engagement as they scroll through the website.
- **Various HTML Elements**: Rich and interactive content including forms, buttons, image galleries, and more, all styled with CSS.

### Backend
- **Authentication System** (Firebase):
  - User login functionality.
  - Logout feature for user account security.
  - Password reset feature for recovering forgotten passwords.

- **Fitness AI Assistant**:
  - Built using a modified version of **Gemini.AI**.
  - Specially tailored to answer fitness-related questions only, providing users with quick and reliable workout tips, diet advice, and more.

- **Shop and Cart**:
  - A dedicated shop section where users can browse fitness-related products.
  - A shopping cart feature to add, remove, and manage items for purchase.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gymflow.git
   ```
2. Navigate to the project directory:
   ```bash
   cd gymflow
   ```
3. Open the project in your favorite code editor.

4. To view the website, open the `index.html` file in any browser.

## Firebase Setup

To enable the authentication system, set up Firebase:

1. Go to the [Firebase Console](https://firebase.google.com/).
2. Create a new project.
3. Set up authentication (Email/Password provider).
4. Add your Firebase configuration to the JavaScript file (`firebase-config.js`):
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

## Gemini.AI Setup

To enable the Fitness AI Assistant, you need to provide your Gemini.AI API key:

1. Sign up or log in to your Gemini.AI account.
2. Generate an API key from the Gemini.AI dashboard.
3. Add the API key to the JavaScript file handling the AI functionality (`gemini-config.js`):
   ```javascript
   const geminiConfig = {
       apiKey: "YOUR_GEMINI_AI_API_KEY"
   };
   ```

## Usage

1. Open the website in a browser.
2. Explore the different sections of the website, including:
   - Fitness AI Assistant: Ask fitness-related questions and get instant answers.
   - Login/Logout: Access user-specific features with your account.
   - Password Reset: Recover your account if needed.
   - Shop: Browse and select fitness products.
   - Cart: Add or remove items and view your selected products.
3. Enjoy the seamless animations and intuitive design while exploring fitness content.

## Technologies Used

- **HTML5**: For structuring the content of the website.
- **CSS3**: For styling the website, including scroll animations.
- **JavaScript**: For interactivity, Firebase integration, and AI functionality.
- **Firebase**: For user authentication.
- **Gemini.AI (modified)**: To create the Fitness AI Assistant.

## Screenshots

![image](https://github.com/user-attachments/assets/1f10f4fe-155a-4cfa-b0d6-847caf42f3e7)
![image](https://github.com/user-attachments/assets/39f443f7-780d-4a3f-9c44-44fc94f77189)
![image](https://github.com/user-attachments/assets/7f9edd40-b00a-4098-bfb0-3483445f46ea)




Add screenshots of your website here to showcase its design and features.

## Contributing

Contributions are welcome! If you'd like to improve the website, feel free to:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

Thank you for checking out Gymflow! Stay fit and keep flowing!


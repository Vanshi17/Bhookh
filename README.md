# Bhookh App - React Native Assignment  

## Overview  
The **Bhookh App** is a basic restaurant app designed to simulate functionalities similar to Swiggy. This assignment focused on implementing clean code, best practices, and a solid app architecture. Key features included implementing a login screen, a home screen with recipes fetched from an API, and adhering to the provided design specifications.  

---

## Getting Started

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

---

## Project Features  

### Completed Features  
1. **Login Screen**  
   - Fully implemented login screen based on the provided Figma design.  
   - Accepts username and password inputs with basic form validation:  
     - Ensures both fields are filled.  
     - Displays error messages for invalid inputs.  
   - Simulated authentication logic using mock JSON with three users.  
   - Displays an "Invalid credentials" message for unmatched inputs.  
   - Successfully validates credentials and simulates login functionality.  

2. **Clean Code Practices**  
   - Modularized code using the **MVC architecture**, separating data, UI, and controllers into distinct modules.  
   - Followed React Native's best practices:  
     - **Reusable components** were created to avoid redundancy.  
     - Used **meaningful variable and function names**.  
     - Avoided excessive nesting and code duplication.  
   - State managed effectively using **React Hooks**.  

3. **UI Design**  
   - Mimicked the design using a color picker extension to match the Figma file.  
   - Styled components using **StyleSheet.create** for consistent and responsive styling.  

4. **Error Handling**  
   - Handled API errors gracefully, displaying user-friendly messages.  

5. **TypeScript Integration**  
   - Used **TypeScript** to enhance type safety and improve code reliability.  

---

## Challenges Faced  

1. **Navigation Issue**  
   - Unable to successfully implement navigation, which prevented transitioning from the Login Screen to the Home Screen upon successful login.

2. **Incomplete Home Screen**  
   - API integration partially completed; the Home Screen design and data display were not fully implemented.  

3. **Setting Up Issues**  
   - Faced challenges in setting up the project initially, which delayed the development process.  

---

## Approach  

1. **Architecture**  
   - Followed the **MVC architecture** to ensure clear separation of concerns:  
     - **Model**: Handled data fetching and state management using React native hooks.  
     - **View**: Managed UI components and their styling.  
     - **Controller**: Managed logic for handling events and interactions.  

2. **Reusable and Modular Code**  
   - Focused on writing reusable and modular components to ensure scalability.  

3. **Error Handling**  
   - Implemented comprehensive error handling to manage issues such as invalid inputs and API errors effectively.  

4. **Styling**  
  - Styled components using StyleSheet.create for consistent and maintainable design.
  - Attempted to replicate the design by utilizing a color picker extension to match the provided Figma design.
    
---

## Acknowledgements
This project was developed as part of the React Native Assignment for the upGrad React Native Technology Intern role.

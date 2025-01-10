# Frontend Project - React & Vite

Welcome to the quePasa frontend repository! This is a React-based frontend application, built with Vite, designed for private chat messaging with user authentication and authorization. The backend is powered by Spring Boot and communicates with the frontend via REST APIs.

## Features

- **User Authentication:** Secure login and registration using JWT tokens.
- **Messaging System:** Real-time private chats for users.
- **Session Management:** Automatic token refresh for seamless user experience.
- **Modern Development Setup:** Powered by React, Vite, and TypeScript for fast development and performance.

## Prerequisites

To run this project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Analisi-i-Arquitectura-de-Software/projecte-02-front.git
2. Navigate to the project directory:
   ```bash
   cd projecte-02-front
3. Install dependencies:
   ```bash
   npm install
4. Running the application:
   ```bash
   npm run dev
   
---

## System Design Diagrams

Below is an overview of the system's design, covering the database model, use case diagram, and C4 model. Each section provides a visual representation of the architecture and functionality.


### **Database Model**
The database model illustrates the structure of the application's data and the relationships between entities. This diagram serves as a blueprint for the database schema, helping to understand how data is organized and accessed.

<div align="center">
  <img src="https://github.com/user-attachments/assets/7de8ddfd-f024-46ed-b1b1-61c826172efc" alt="Database Model">
</div>

### **Use Case Diagram**
The use case diagram outlines the key interactions between users and the system. It highlights the primary functionalities and shows the roles of different actors, making it easier to grasp the overall workflow.

<div align="center">
  <img src="https://github.com/user-attachments/assets/1517f37a-d36a-4699-80df-60d0714ce298" alt="Use Case Diagram">
</div>

## **C4 Model**

The C4 model provides a structured way to visualize the system's architecture across multiple levels of abstraction. Below are the context, container, and component diagrams:

### **Context**
The context diagram presents a high-level view of the system and its interactions with external entities (users, services, or other systems). It answers "what does this system do?" and "who interacts with it?".

<div align="center">
  <img src="https://github.com/user-attachments/assets/66828cf8-f3cc-4cb5-bad7-c28cac3de747" alt="Context Diagram">
</div>

### **Containers**
The container diagram dives deeper, showcasing the major components (e.g., applications, databases, and services) and how they communicate. This view helps understand the system's infrastructure and deployment.

<div align="center">
  <img src="https://github.com/user-attachments/assets/2bcb549b-81ff-4222-a02a-dfe9f672722d" alt="Container Diagram">
</div>

### **Components**
The component diagram focuses on the internal structure of a specific container, detailing the key modules and their interactions. It provides insight into how specific functionalities are implemented.

<div align="center">
  <img src="https://github.com/user-attachments/assets/15304270-2572-49a6-aef6-de8ed40833fb" alt="Component Diagram">
</div>

These diagrams collectively provide a comprehensive view of the system's design, aiding both development and documentation efforts.


   
   

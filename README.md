# EcoBreeze

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Vite](https://img.shields.io/badge/Powered%20by-Vite-646cff)](https://vitejs.dev/)  
[![FreeRTOS](https://img.shields.io/badge/RTOS-FreeRTOS-orange.svg)](https://www.freertos.org/)  
[![AWS](https://img.shields.io/badge/Hosting-AWS-232F3E.svg)](https://aws.amazon.com/)

> AI-powered home temperature and cost optimizer

EcoBreeze runs on an ESP32 with FreeRTOS to sample your room temperature and switch your fan or AC via MQTT. All the heavy lifting—data storage, forecasting, optimization and scheduling—happens on AWS so you get a lean, reliable system that keeps you comfy and cuts your energy bill.

## Highlights

-   adaptive cooling powered by real-time forecasting
-   cost-aware scheduling that leans on off-peak rates
-   ESP32 firmware built on FreeRTOS for timing
-   scalable backend hosted on AWS (IoT, Lambda, DynamoDB, etc.)
-   slick Vite + React dashboard for live monitoring and overrides

## Quick Start

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Frontend Dashboard Setup

1. **Navigate to the UI directory:**

    ```bash
    cd ThermoCentsUI
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start development server:**

    ```bash
    npm run dev
    ```

4. **Build for production:**
    ```bash
    npm run build
    ```

### Project Structure

```
ThermoCents/
├── ThermoCentsUI/    # Vite + React + TypeScript dashboard
├── backend/           # AWS Lambda functions & API (coming soon)
├── firmware/          # ESP32 FreeRTOS code (coming soon)
└── README.md
```

### Development Commands

-   `npm run dev` - Start development server with hot reload
-   `npm run build` - Build optimized production bundle
-   `npm run preview` - Preview production build locally
-   `npm run lint` - Run ESLint
-   `npm run type-check` - TypeScript type checking

### Tech Stack

-   **Frontend**: Vite + React + TypeScript + SWC
-   **Backend**: AWS Lambda + API Gateway (planned)
-   **Database**: AWS DynamoDB (planned)
-   **IoT**: AWS IoT Core + MQTT (planned)
-   **Firmware**: ESP32 + FreeRTOS (planned)

# EcoBreeze

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Vite](https://img.shields.io/badge/Powered%20by-Vite-646cff)](https://vitejs.dev/)  
[![FreeRTOS](https://img.shields.io/badge/RTOS-FreeRTOS-orange.svg)](https://www.freertos.org/)  
[![AWS](https://img.shields.io/badge/Hosting-AWS-232F3E.svg)](https://aws.amazon.com/)

> AI-powered home temperature and cost optimizer  

EcoBreeze runs on an ESP32 with FreeRTOS to sample your room temperature and switch your fan or AC via MQTT. All the heavy lifting—data storage, forecasting, optimization and scheduling—happens on AWS so you get a lean, reliable system that keeps you comfy and cuts your energy bill.

## Highlights

- adaptive cooling powered by real-time forecasting  
- cost-aware scheduling that leans on off-peak rates  
- ESP32 firmware built on FreeRTOS for timing  
- scalable backend hosted on AWS (IoT, Lambda, DynamoDB, etc.)  
- slick Vite + React dashboard for live monitoring and overrides  

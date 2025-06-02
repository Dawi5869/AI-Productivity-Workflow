# AI Productivity Workflow: Discord-Based Daily Automation

<video src="assets/0526.mp4" autoplay loop muted playsinline width="600"></video>

## 🧠 Overview
This project is a personal productivity automation system that uses Discord as the command hub and Make.com as the automation engine. By triggering a single slash command (`/start-daily`), the workflow delivers a curated summary of daily news across technical domains, sends a journaling prompt via Google Form, and responds with a motivational or reflective message based on the user’s input. The system is designed to reduce friction and help maintain momentum throughout the day.

## 🛠 Tools & Technologies
- **Make.com** – Main automation platform for scheduling, branching logic, and webhook handling  
- **Discord.js** – Handles the bot and slash command (`/start-daily`)  
- **Gemini 1.5 Flash** – AI model used for summarizing RSS news feeds  
- **RSS Feeds** – Used to pull the latest articles in tech, AI, aerospace, and engineering  
- **Google Forms + Google Sheets** – Collect and store journal entries  
- **Webhook API** – For Make-Discord communication

## ⚙️ Features
- **Single Trigger Command**: `/start-daily` runs the full workflow from Discord
- **News Summary Delivery**: Retrieves top articles by category (AI, tech, aerospace, etc.) and summarizes them using Gemini 1.5 Flash
- **Daily Journaling Prompt**: Sends a Google Form link to Discord for reflection or goal tracking
- **Motivational Response**: After journal submission, Discord replies with an AI-written message tailored to the context of the day
- **Modular & Expandable**: Built in Make.com with logical paths that can easily be extended or customized

## 💡 Key Takeaways
- Designed a cross-platform automation system using Make, Gemini, and Discord APIs
- Practiced clean branching logic and webhook configuration to make workflows efficient and low-maintenance
- Gained practical experience creating a tool that supports daily productivity, reflection, and learning

## 📸 Demo
Here is a link to a quick demo video on YouTube: https://youtu.be/-X-WKNikei4

## 📬 Contact
Want to adapt this for your own productivity or workspace?  
Reach out at dawi5869@colorado.edu



# AI Productivity Workflow: Discord-Based Daily Automation

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
- **Motivational Response**: After journal submission, Discord replies with a prewritten message tailored to the context of the day
- **Modular & Expandable**: Built in Make.com with logical paths that can easily be extended or customized

## 💡 Key Takeaways
- Designed a cross-platform automation system using Make, Gemini, and Discord APIs
- Practiced clean branching logic and webhook configuration to make workflows efficient and low-maintenance
- Gained practical experience creating a tool that supports daily productivity, reflection, and learning

## 📸 Demo & Screenshots
- Workflow overview diagram
- Example Discord bot message
- Screenshot of journaling form

## 📁 File Structure
/src
├─ bot.js # Discord bot logic
├─ config.json # Bot token, app ID, and slash command config
└─ /commands # Slash command definition (currently only /start-daily)
/make # Sample webhook payload and Make scenario export
README.md


## 🚀 How to Use
1. Clone this repo  
2. Create and configure a Discord bot via the Discord Developer Portal  
3. Set up your Make.com scenario (webhooks, RSS module, Gemini summarization, Discord webhook reply)  
4. Create a Google Form for journaling and link its submit URL in the workflow  
5. Run the bot locally or deploy on a lightweight host (e.g. Replit, Render)

## 🔗 Links
- [Make.com](https://www.make.com/)  
- [Gemini 1.5 Flash Overview](https://deepmind.google/technologies/gemini/)  
- *(Optional: Add public Make scenario or journaling form template links here)*

## 📬 Contact
Want to adapt this for your own productivity or workspace?  
Reach out at [your.email@example.com](mailto:your.email@example.com) or [LinkedIn](https://www.linkedin.com/in/yourprofile)



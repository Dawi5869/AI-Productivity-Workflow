# AI Productivity Workflow: Discord News & Journaling Bot

## 🧠 Overview
This project is a custom automation system built to streamline my daily productivity using AI, Make.com, and Discord. It delivers daily news updates across technical domains, manages journaling prompts, and sends tailored motivational messages based on user input — all triggered by Discord slash commands. The goal was to reduce friction in staying informed, reflective, and focused using smart, modular workflows.

## 🛠 Tools & Technologies
- Make.com (workflow automation)
- OpenAI API (ChatGPT-4 for summaries and responses)
- Discord.js (Node.js bot interface)
- RSS Feeds (news retrieval)
- Google Sheets & Google Forms (journaling backend)
- Webhooks & APIs (system communication)

## ⚙️ Features
- `/test_tech_article`, `/test_ai_article`, etc. — Discord slash commands trigger news summaries by category
- Uses RSS feeds to fetch recent articles, summarizes them with GPT, and sends formatted messages to Discord
- Daily journaling prompt via Google Form, with entries saved in Sheets and analyzed via AI
- Sends a personalized reflection or motivational message to Discord based on your journal entry
- Modular branching logic in Make.com for scalable command handling

## 💡 Key Takeaways
- Learned to chain APIs and platforms like Discord, OpenAI, and Make.com to build useful personal tools
- Built flexible, repeatable automation paths that can scale or be adapted to client use cases
- Gained hands-on experience with webhook configuration, RSS filtering, and API-based text generation

## 📸 Demo & Screenshots
![Workflow Overview](images/workflow-overview.png)
![Discord Bot Output](images/discord-bot-message.png)

## 📁 File Structure

🏠 Plotly

Turn flat floor plans into immersive 3D spaces before a single brick is laid.

Plotly is a modern web application that transforms 2D floor plan images into visually rich, creative 3D floor plans, helping users see their future homes instead of imagining them.
Built for architects, homeowners, designers, and curious minds who want clarity before construction.

✨ Why Plotly?

Most floor plans are static, technical, and hard to visualize.
Plotly bridges the gap between blueprints and reality.

Upload a 2D floor plan → Plotly converts it into a 3D spatial representation that feels intuitive, human, and real.

🚀 Live Demo

👉 Deployed on Puter
🔗 https://puter.com/app/plotly

🖼️ Screenshots

(Add screenshots of your application here)

<img width="1920" height="887" alt="Screenshot (96)" src="https://github.com/user-attachments/assets/67633757-243d-4406-bf54-a9a7f45c7526" />
<img width="1920" height="891" alt="image" src="https://github.com/user-attachments/assets/9d46ba63-d598-4693-87a4-4e8314f91253" />
<img width="1920" height="891" alt="image" src="https://github.com/user-attachments/assets/9d46ba63-d598-4693-87a4-4e8314f91253" />
<img width="1920" height="882" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/88a4caff-e729-47e3-a80b-ebd2362f1ccb" />
<img width="1920" height="882" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/88a4caff-e729-47e3-a80b-ebd2362f1ccb" />
<img width="1920" height="888" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/8f70c565-f468-4b6a-bd3b-9a6a93b8ffe3" />
<img width="1920" height="888" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/8f70c565-f468-4b6a-bd3b-9a6a93b8ffe3" />
<img width="1920" height="889" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/70f6ba7f-d0e7-4db9-b85e-b154e3fc6037" />
<img width="1920" height="889" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/70f6ba7f-d0e7-4db9-b85e-b154e3fc6037" />
<img width="1920" height="882" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/ebb4bf83-2ba8-4599-adf3-6ce10458fbfb" />
<img width="1920" height="882" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/ebb4bf83-2ba8-4599-adf3-6ce10458fbfb" />
<img width="1920" height="883" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/f03753fc-1760-4639-95e9-1c6bd4aee316" />
<img width="1920" height="883" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/f03753fc-1760-4639-95e9-1c6bd4aee316" />
<img width="1920" height="884" alt="Screenshot (91)" src="https://github.com/user-attachments/assets/9f40326d-07ad-4dd2-a720-ebd7f3f7e406" />
<img width="1920" height="884" alt="Screenshot (91)" src="https://github.com/user-attachments/assets/9f40326d-07ad-4dd2-a720-ebd7f3f7e406" />
<img width="1920" height="882" alt="Screenshot (92)" src="https://github.com/user-attachments/assets/24eb929a-1528-4502-aef3-b95332de4bc0" />
<img width="1920" height="882" alt="Screenshot (92)" src="https://github.com/user-attachments/assets/24eb929a-1528-4502-aef3-b95332de4bc0" />
<img width="1920" height="888" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/91dcc7d9-8b79-4869-be2b-72eebe202b70" />
<img width="1920" height="888" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/91dcc7d9-8b79-4869-be2b-72eebe202b70" />
<img width="1920" height="891" alt="Screenshot (95)" src="https://github.com/user-attachments/assets/27c023f6-1c18-4d56-b918-f5d9a76e7617" />
<img width="1920" height="891" alt="Screenshot (95)" src="https://github.com/user-attachments/assets/27c023f6-1c18-4d56-b918-f5d9a76e7617" />


🧠 Key Features

📤 Upload 2D floor plan images

🧩 Intelligent layout interpretation

🏠 Auto-generated 3D visualization

🎨 Clean, modern UI with smooth interactions

🔐 Authentication powered by Puter

⚡ Fast, lightweight, and responsive

🌐 Deployed and accessible from anywhere

🛠️ Tech Stack
Technology	Purpose
React.js	Core UI framework
React Router v7 (Framework Mode)	Routing & document management
Vite	Lightning-fast bundler
Tailwind CSS	Utility-first styling
Puter.js	Auth, deployment & cloud integration
TypeScript	Type safety & scalability
🏗️ Project Architecture
Plotly/
├── app/                 # React Router v7 app structure
│   ├── root.tsx         # HTML shell & global layout
│   └── routes/          # Application routes
├── components/          # Reusable UI components
├── lib/                 # Puter actions & utilities
├── public/              # Static assets (favicon, etc.)
├── build/               # Production build output
├── react-router.config.ts
├── vite.config.ts
└── package.json

🔐 Authentication

Plotly uses Puter Authentication to:

Detect signed-in users

Handle login / logout seamlessly

Manage user identity without custom backend overhead

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/plotly.git
cd plotly

2️⃣ Install dependencies
npm install

3️⃣ Environment variables

Create a .env.local file:

VITE_PUTER_WORKER_URL=your_worker_url_here


(Make sure .env.local is in .gitignore)

4️⃣ Run locally
npm run dev


App will be live at:

http://localhost:5173

🏗️ Build for Production
npm run build


Preview production build:

npm run preview

🌍 Deployment

Plotly is deployed on Puter.

Redeploy flow:

Make changes

Run npm run build

Upload/overwrite the build output on Puter

Hard refresh 🚀

🔮 Future Roadmap

🛋️ Auto furniture placement

🎭 Material & texture customization

🕶️ AR / VR walkthrough support

🤖 AI-powered interior suggestions

💰 Cost estimation before construction

📐 Editable floor plan adjustments

🧑‍💻 Author

Shubham Kumar
Full Stack Developer | UI-focused Engineer
Passionate about turning complex ideas into intuitive digital experiences.

⭐ Support

If you like this project:

⭐ Star the repository

🍴 Fork it

🧠 Share feedback

Every star fuels the next feature ✨

📜 License

This project is licensed under the MIT License.

🏁 Final Note

Plotly is not just a project.
It’s a preview of how homes should be designed in the digital age.

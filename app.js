/* ============================================================
   AI CODING ACADEMY — Main Application
   16-week adaptive AI & Python curriculum, ages 8–16
   ============================================================ */

'use strict';

// ============================================================
// QUESTION BANK — 30 items across 4 domains (CAT subset)
// b = difficulty (-3 to 3), a = discrimination (0.8–2.0)
// ============================================================
const QUESTIONS = [
  // ---- Computational Thinking (CT) ----
  { id:'CT01', domain:'CT', b:-2.0, a:1.2,
    emoji:'🎨', text:'What comes next in the pattern?',
    detail:'🔴 🔵 🔴 🔵 🔴 ___',
    opts:['🔵','🔴','🟢','⬜'], ans:0 },
  { id:'CT02', domain:'CT', b:-1.5, a:1.3,
    emoji:'📋', text:'Put these steps in the correct order to get ready for school:',
    detail:'A) Go to school  B) Wake up  C) Eat breakfast  D) Get dressed',
    opts:['B → D → C → A','B → C → D → A','A → B → C → D','C → B → D → A'], ans:0 },
  { id:'CT03', domain:'CT', b:-0.8, a:1.5,
    emoji:'🤖', text:'A robot moves 3 steps forward, then 1 step backward. How far is it from the start?',
    detail:'',
    opts:['1 step forward','2 steps forward','3 steps forward','4 steps forward'], ans:1 },
  { id:'CT04', domain:'CT', b:0.0, a:1.8,
    emoji:'🔍', text:'Which of these tells a computer HOW to do something (not just what)?',
    detail:'',
    opts:['Show the score','Add 1 to score when a coin is collected','Make the game fun','Display the screen'], ans:1 },
  { id:'CT05', domain:'CT', b:0.5, a:1.9,
    emoji:'⚙️', text:'A function adds 5 to any number given to it. If you give it 9, what comes out?',
    detail:'',
    opts:['5','9','14','45'], ans:2 },
  { id:'CT06', domain:'CT', b:1.0, a:2.0,
    emoji:'🐛', text:'A robot should turn LEFT when it hits a wall, but it turns RIGHT. What is the most likely problem?',
    detail:'',
    opts:['The sensor is broken','The code has the wrong direction','The battery is low','The wall is too big'], ans:1 },
  { id:'CT07', domain:'CT', b:1.5, a:1.8,
    emoji:'🔄', text:'A loop runs for every number from 1 to 5. How many times does it run?',
    detail:'',
    opts:['4 times','5 times','6 times','Forever'], ans:1 },
  { id:'CT08', domain:'CT', b:2.5, a:1.5,
    emoji:'🗺️', text:'Path A→B→C costs 10 total. Path A→D→C costs 8 total. Which path should a navigation AI choose?',
    detail:'',
    opts:['A→B→C','A→D→C','Both are the same','Cannot be determined'], ans:1 },

  // ---- Python Syntax (PY) ----
  { id:'PY01', domain:'PY', b:-1.8, a:1.0,
    emoji:'🐍', text:'What appears on the screen when this runs?',
    detail:'print("Hello World")',
    opts:['Hello World','"Hello World"','hello world','Nothing — it crashes'], ans:0 },
  { id:'PY02', domain:'PY', b:-1.2, a:1.2,
    emoji:'📦', text:'After this runs, what is the value of x?',
    detail:'x = 5',
    opts:['x','5','"x"','Error'], ans:1 },
  { id:'PY03', domain:'PY', b:-0.2, a:1.7,
    emoji:'➕', text:'After these two lines run, what is x?',
    detail:'x = 10\nx = x + 3',
    opts:['10','3','13','x+3'], ans:2 },
  { id:'PY04', domain:'PY', b:0.4, a:1.9,
    emoji:'🔀', text:'What does this print?',
    detail:'if 5 > 3:\n    print("A")\nelse:\n    print("B")',
    opts:['A','B','AB','Error'], ans:0 },
  { id:'PY05', domain:'PY', b:0.9, a:2.0,
    emoji:'🔁', text:'How many times does "Hi" get printed?',
    detail:'for i in range(4):\n    print("Hi")',
    opts:['3 times','4 times','5 times','Infinite'], ans:1 },
  { id:'PY06', domain:'PY', b:1.4, a:1.8,
    emoji:'📝', text:'What is the value of mylist[2]?',
    detail:'mylist = [10, 20, 30, 40]',
    opts:['10','20','30','40'], ans:2 },
  { id:'PY07', domain:'PY', b:2.0, a:1.6,
    emoji:'🧮', text:'What does this print?',
    detail:'def add(a, b):\n    return a + b\nprint(add(3, 4))',
    opts:['3','4','7','a+b'], ans:2 },
  { id:'PY08', domain:'PY', b:2.5, a:1.4,
    emoji:'🔢', text:'What is the result?',
    detail:'len([1, 2, 3]) + len([4, 5])',
    opts:['5','6','8','Error'], ans:0 },

  // ---- Mathematical Reasoning (MA) ----
  { id:'MA01', domain:'MA', b:-1.5, a:1.3,
    emoji:'📈', text:'What comes next in this sequence?',
    detail:'2, 4, 6, 8, ___',
    opts:['9','10','12','16'], ans:1 },
  { id:'MA02', domain:'MA', b:-0.8, a:1.4,
    emoji:'🎲', text:'A bag has 3 red balls and 2 blue balls. Which colour are you most likely to pick at random?',
    detail:'',
    opts:['Red','Blue','Same chance','Cannot tell'], ans:0 },
  { id:'MA03', domain:'MA', b:0.2, a:1.7,
    emoji:'📊', text:'f(x) = x + 3. What is f(7)?',
    detail:'',
    opts:['3','7','10','21'], ans:2 },
  { id:'MA04', domain:'MA', b:0.8, a:1.8,
    emoji:'🔢', text:'What comes next?',
    detail:'3, 6, 12, 24, ___',
    opts:['36','42','48','72'], ans:2 },
  { id:'MA05', domain:'MA', b:1.6, a:1.7,
    emoji:'🌀', text:'Each number is the sum of the two before it. What comes next?',
    detail:'1, 1, 2, 3, 5, 8, ___',
    opts:['10','11','13','14'], ans:2 },
  { id:'MA06', domain:'MA', b:2.0, a:1.6,
    emoji:'🪙', text:'Two coins are flipped. What is the chance that BOTH land heads?',
    detail:'',
    opts:['1/2','1/3','1/4','1/6'], ans:2 },
  { id:'MA07', domain:'MA', b:2.5, a:1.5,
    emoji:'📐', text:'f(x) = 2x². What is f(4)?',
    detail:'',
    opts:['16','32','8','64'], ans:1 },

  // ---- AI Concepts (AI) ----
  { id:'AI01', domain:'AI', b:-1.2, a:1.1,
    emoji:'🤖', text:'An AI looks at pictures and says "cat" or "dog". What kind of task is this?',
    detail:'',
    opts:['Translation','Classification','Generation','Calculation'], ans:1 },
  { id:'AI02', domain:'AI', b:-0.6, a:1.4,
    emoji:'🧠', text:'An AI keeps making mistakes. What is the best way to help it improve?',
    detail:'',
    opts:['Restart it','Give it more correct examples','Replace it entirely','Ignore the mistakes'], ans:1 },
  { id:'AI03', domain:'AI', b:0.1, a:1.8,
    emoji:'☁️', text:'An AI trained only on sunny-day photos struggles with rainy-day photos. Why?',
    detail:'',
    opts:['It needs more computing power','The training data was biased','Rain is hard to photograph','It prefers sunny weather'], ans:1 },
  { id:'AI04', domain:'AI', b:0.7, a:1.9,
    emoji:'🏠', text:'Which information is MOST useful for predicting whether it will rain tomorrow?',
    detail:'',
    opts:['The color of your car','Yesterday\'s temperature and humidity','Your neighbour\'s name','The day of the week'], ans:1 },
  { id:'AI05', domain:'AI', b:1.2, a:1.8,
    emoji:'🕸️', text:'The "neural" in "neural network" is inspired by what?',
    detail:'',
    opts:['Brain cells (neurons)','Computer wires','The word "new" in Latin','Internet cables'], ans:0 },
  { id:'AI06', domain:'AI', b:1.8, a:1.6,
    emoji:'⚖️', text:'An AI predicting medical treatment is 95% accurate overall, but only 60% accurate for one ethnic group. What is this called?',
    detail:'',
    opts:['Underfitting','Algorithmic bias','Overfitting','Data shortage'], ans:1 },
  { id:'AI07', domain:'AI', b:2.4, a:1.5,
    emoji:'🏷️', text:'Training data has labels: [cat photo → "cat", dog photo → "dog"]. What type of learning is this?',
    detail:'',
    opts:['Unsupervised learning','Reinforcement learning','Supervised learning','Transfer learning'], ans:2 },
];

// ============================================================
// CURRICULUM — 16 weeks × 4 gates
// ============================================================
const PHASES = [
  { id:1, title:'The Smart Pet', weeks:'1–4',
    ai4k12:'Perception & Representation', color:'#10B981',
    desc:'Build an interactive virtual pet using Pygame Zero. Learn variables, conditionals, and how computers represent the world.' },
  { id:2, title:'The Data Detective', weeks:'5–8',
    ai4k12:'Learning (supervised)', color:'#3b82f6',
    desc:'Transition from sprites to data. Clean real datasets, visualise patterns, and train your first classifier.' },
  { id:3, title:'The Sorter Evolved', weeks:'9–12',
    ai4k12:'Natural Interaction & advanced Learning', color:'#8b5cf6',
    desc:'NLP basics, text classification, fairness auditing, and a full "AI for Good" pitch.' },
  { id:4, title:'Capstone Innovation', weeks:'13–16',
    ai4k12:'Societal Impact (culmination)', color:'#f97316',
    desc:'Define a real problem, build a working prototype, and present at Demo Day.' },
];

const WEEKS = [
  // Phase 1
  { week:1, phase:1, title:'Hello, Smart Pet!', ai4k12:'Perception — screens as sensors',
    pbl:'Challenging Problem: "How do virtual pets know we\'re there?"', lifeSkill:'Curiosity',
    deliverable:'Pet canvas with reactive background',
    tasks:['Install Pygame Zero and run your first window','Draw a circle — that\'s your pet!','Make the background change colour on a keypress','Add a name label above your pet'],
    code:`import pgzrun\n\nWIDTH, HEIGHT = 600, 400\npet_color = (100, 200, 150)\n\ndef draw():\n    screen.fill((30, 28, 50))\n    screen.draw.filled_circle((300, 200), 60, pet_color)\n    screen.draw.text("My Smart Pet", (220, 280),\n                    color="white", fontsize=30)\n\ndef on_key_down():\n    global pet_color\n    pet_color = (200, 100, 150)  # pet reacts!\n\npgzrun.go()`,
    mastery:72 },
  { week:2, phase:1, title:'Mood & Memory', ai4k12:'Representation — variables as memory',
    pbl:'Sustained Inquiry: Testing different states', lifeSkill:'Critical Thinking',
    deliverable:'Pet that changes colour based on mood variable',
    tasks:['Create energy, hunger, and happiness variables','Change pet colour based on mood level','Add a simple HUD showing stats','Let the pet "decay" slowly over time (hunger goes up)'],
    code:`mood = "happy"  # variable = memory\nenergy = 80\nhunger = 20\n\n# Variables store state — just like a sprite's .x and .y\nif hunger > 70:\n    mood = "grumpy"\n    pet_color = (200, 80, 80)\nelif energy < 20:\n    mood = "sleepy"\n    pet_color = (80, 80, 200)\nelse:\n    mood = "happy"\n    pet_color = (100, 200, 150)`,
    mastery:0 },
  { week:3, phase:1, title:'Personality & Choice', ai4k12:'Reasoning — if-then rules',
    pbl:'Student Voice: Choose your pet\'s personality', lifeSkill:'Decision Making',
    deliverable:'Interactive pet with 3+ behaviours',
    tasks:['Add keyboard controls (feed, play, sleep)','Implement 3 different personality modes','Create sound effects for each action','Write your pet\'s personality in a comment block'],
    code:`def on_key_down(key):\n    global hunger, energy, happiness\n    if key == keys.F:  # Feed\n        hunger = max(0, hunger - 20)\n        happiness = min(100, happiness + 5)\n    elif key == keys.P:  # Play\n        energy = max(0, energy - 15)\n        happiness = min(100, happiness + 20)\n    elif key == keys.S:  # Sleep\n        energy = min(100, energy + 30)`,
    mastery:0 },
  { week:4, phase:1, title:'Smart Pet Demo Day', ai4k12:'Societal Impact — AI helpers discussion',
    pbl:'Public Product: Present your Smart Pet', lifeSkill:'Communication',
    deliverable:'"Smart Pet" demo + care ethics discussion',
    tasks:['Polish your pet\'s visuals and animations','Prepare a 2-minute demo script','Answer: "Should AI pets replace real pets?"','Submit your project to the family showcase folder'],
    code:`# Week 4: Final Polish\n# Add particle effects, sounds, and a title screen\n\ndef draw_title_screen():\n    screen.fill((15, 14, 23))\n    screen.draw.text("🐾 My Smart Pet 🐾",\n        center=(300, 180),\n        color="white", fontsize=40)\n    screen.draw.text("Press SPACE to start",\n        center=(300, 250),\n        color=(150, 140, 200), fontsize=22)`,
    mastery:0 },
  // Phase 2
  { week:5, phase:2, title:'Data as Sprites', ai4k12:'Perception — data as world-sensing',
    pbl:'Authenticity: Real family dataset', lifeSkill:'Organisation',
    deliverable:'Personal "database" of favourites visualised in Pygame',
    tasks:['Create a CSV file with 20 rows of data about anything you like','Load the CSV with pandas','Visualise each row as a coloured circle','Explain: how is a CSV row like a sprite?'],
    code:`import pgzrun\nimport pandas as pd\n\n# Each row = a "data sprite" with properties\npets_df = pd.read_csv('my_data.csv')\n\n# Just like Actor objects have .x, .y, .image\n# DataFrame rows have .energy, .name, .colour\nfor _, row in pets_df.iterrows():\n    # row['energy'] is like sprite.energy\n    color = (row['energy']*25, 150, 100)\n    screen.draw.filled_circle((x, y), 20, color)`,
    mastery:0 },
  { week:6, phase:2, title:'Cleaning the Evidence', ai4k12:'Representation — structured data',
    pbl:'Sustained Inquiry: Cleaning messy data', lifeSkill:'Attention to Detail',
    deliverable:'Cleaned dataset + documentation of decisions',
    tasks:['Find 5 problems in the provided messy dataset','Use dropna(), fillna() to clean it','Filter rows using Boolean conditions','Write a "data cleaning log" explaining each choice'],
    code:`import pandas as pd\n\ndf = pd.read_csv('messy_pets.csv')\n\n# Boolean filtering = collision detection!\n# "if sprite.x > wall" → "df[df['energy'] > 5]"\nenergetic = df[df['energy'] > 5]\n\n# Remove rows with missing data\nclean_df = df.dropna(subset=['pet_type'])\n\n# Fix bad values\nclean_df = clean_df[clean_df['energy'].between(0, 10)]\nprint(f"Removed {len(df) - len(clean_df)} bad rows")`,
    mastery:0 },
  { week:7, phase:2, title:'The Evidence Board', ai4k12:'Learning — feature engineering',
    pbl:'Critique & Revision: Peer feedback on visualisation', lifeSkill:'Analysis',
    deliverable:'"Evidence Board" scatter plot + written hypothesis',
    tasks:['Create a scatter plot with matplotlib','Choose two features as your x and y axes','Colour-code by pet type','Write a hypothesis: what clusters do you see?'],
    code:`import matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.read_csv('clean_pets.csv')\n\n# Scatter plot = your Pygame Zero screen,\n# but for DATA instead of pixels!\ncolors = {'cat':'#ef4444','dog':'#3b82f6',\n          'bird':'#10b981','robot':'#f59e0b'}\n\nfor pet_type, group in df.groupby('pet_type'):\n    plt.scatter(group['energy'], group['noise'],\n                c=colors[pet_type], label=pet_type,\n                s=100, alpha=0.7)\nplt.xlabel('Energy Level')\nplt.ylabel('Noise Level')\nplt.legend()\nplt.title('Pet Universe Map')\nplt.show()`,
    mastery:0 },
  { week:8, phase:2, title:'The Detective\'s Brain', ai4k12:'Learning — supervised learning',
    pbl:'Public Product: Classifier demo', lifeSkill:'Scientific Thinking',
    deliverable:'Working k-NN classifier with accuracy report',
    tasks:['Split data into train (80%) and test (20%) sets','Train a KNeighborsClassifier on your data','Predict pet types for the test set','Calculate accuracy and explain what it means'],
    code:`from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import train_test_split\nimport numpy as np\n\n# The "brain" — learns from examples\nbrain = KNeighborsClassifier(n_neighbors=3)\n\n# fit() = "teaching by showing examples"\n# Like update() in Pygame Zero — runs until it knows\nbrain.fit(X_train, y_train)\n\n# predict() = asking the brain what it learned\n# Like: if keys.space — "what should happen now?"\npredictions = brain.predict(X_test)\naccuracy = (predictions == y_test).mean()\nprint(f"My detective is {accuracy:.0%} accurate!")`,
    mastery:0 },
  // Phase 3
  { week:9, phase:3, title:'Teaching Computers to Read', ai4k12:'Natural Interaction — language',
    pbl:'Student Voice: Choose your text domain', lifeSkill:'Communication',
    deliverable:'Simple sentiment analyser on topic of your choice',
    tasks:['Collect 30 text examples (positive & negative)','Vectorise text using CountVectorizer','Train a simple classifier on your texts','Test it on 5 new sentences you write yourself'],
    code:`from sklearn.feature_extraction.text import CountVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\n\n# Text → numbers (computers can\'t read words directly)\nvectorizer = CountVectorizer()\nX = vectorizer.fit_transform(texts)\n\n# Train sentiment classifier\nclassifier = MultinomialNB()\nclassifier.fit(X, labels)\n\n# Predict new text\nnew_text = ["This game is amazing!"]\nnew_X = vectorizer.transform(new_text)\nresult = classifier.predict(new_X)\nprint(f"Sentiment: {result[0]}")`,
    mastery:0 },
  { week:10, phase:3, title:'Better Features, Better Brain', ai4k12:'Learning — pipelines',
    pbl:'Authenticity: Real-world text data', lifeSkill:'Perseverance',
    deliverable:'Improved classifier with TF-IDF and metrics',
    tasks:['Replace CountVectorizer with TfidfVectorizer','Build a full sklearn Pipeline','Compute precision, recall, and F1 score','Compare your two models in a table'],
    code:`from sklearn.pipeline import Pipeline\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\n# A Pipeline chains steps automatically\npipe = Pipeline([\n    ('tfidf', TfidfVectorizer(max_features=500)),\n    ('clf', LogisticRegression())\n])\npipe.fit(X_train, y_train)\npreds = pipe.predict(X_test)\nprint(classification_report(y_test, preds))`,
    mastery:0 },
  { week:11, phase:3, title:'Is My AI Fair?', ai4k12:'Societal Impact — accuracy vs fairness',
    pbl:'Critique & Revision: Bias auditing', lifeSkill:'Ethical Reasoning',
    deliverable:'Fairness report + model adjustments',
    tasks:['Split your test data by a demographic feature','Compare accuracy across groups','Identify the biggest disparity','Propose one way to make your model more fair'],
    code:`# Fairness audit\ngroups = ['group_A', 'group_B']\nfor group in groups:\n    mask = test_df['group'] == group\n    group_preds = pipe.predict(X_test[mask])\n    group_acc = (group_preds == y_test[mask]).mean()\n    print(f"{group} accuracy: {group_acc:.1%}")\n\n# If accuracy differs significantly → bias detected!\n# Ask: why might this happen?\n# Possible causes: imbalanced training data,\n# features that correlate with group membership`,
    mastery:0 },
  { week:12, phase:3, title:'"AI for Good" Pitch', ai4k12:'All 5 Big Ideas integrated',
    pbl:'Public Product: Prototype pitch to family', lifeSkill:'Persuasion',
    deliverable:'"AI for Good" working prototype + pitch deck',
    tasks:['Choose a real-world problem AI could help solve','Build a minimal working prototype','Create a 3-slide pitch (Problem, Solution, Demo)','Present to family and collect feedback'],
    code:`# Example: AI for Good — Plant Disease Detector\n# (Students choose their own domain)\n\nfrom sklearn.ensemble import RandomForestClassifier\nimport numpy as np\n\n# Real use case: help farmers detect sick plants\n# Features: leaf_color, spot_size, humidity, temperature\nmodel = RandomForestClassifier(n_estimators=50)\nmodel.fit(X_train, y_train)\n\n# Feature importance — what matters most?\nfor feature, importance in zip(\n    feature_names, model.feature_importances_):\n    print(f"{feature}: {importance:.1%}")`,
    mastery:0 },
  // Phase 4
  { week:13, phase:4, title:'Capstone: Define the Problem', ai4k12:'Societal Impact',
    pbl:'Challenging Problem: Student-identified', lifeSkill:'Research',
    deliverable:'Capstone charter document + feasibility review',
    tasks:['Write a one-paragraph problem statement','Define your target user and their need','Sketch a solution architecture diagram','Get charter approved by a parent/mentor'],
    code:`# Capstone Charter Template\n"""\nProject Title: _______________\nProblem: [1-2 sentences describing the real problem]\nTarget User: [Who will benefit?]\nAI Approach: [What type of ML / AI will you use?]\nData Needed: [What data will you collect or find?]\nSuccess Metric: [How will you know it works?]\nWeek 16 Demo Goal: [What will you show?]\n"""`,
    mastery:0 },
  { week:14, phase:4, title:'Capstone: Build Sprint', ai4k12:'Learning + Natural Interaction',
    pbl:'Sustained Inquiry: Iterative development', lifeSkill:'Persistence',
    deliverable:'Working prototype + peer critique session',
    tasks:['Build the core feature of your capstone','Commit code every day (use Git)','Hold a 10-minute peer critique with a sibling','Revise based on feedback — document changes'],
    code:`# Daily commit habit\n# (Run in terminal each day)\n\n# git add .\n# git commit -m "Day 2: added data loading"\n# git log --oneline  # see your progress!\n\n# Good commit messages:\n# ✅ "Add CSV loader with error handling"\n# ✅ "Fix: hunger stat now resets on feed"\n# ❌ "changes"\n# ❌ "fixed stuff"`,
    mastery:0 },
  { week:15, phase:4, title:'Capstone: Polish & Test', ai4k12:'Representation & Reasoning',
    pbl:'Critique & Revision: Final refinement', lifeSkill:'Attention to Detail',
    deliverable:'Refined product + documentation',
    tasks:['Write a README explaining your project','Test with 3 people who weren\'t involved','Fix the top 2 issues found in testing','Record a 1-minute demo video'],
    code:`# Good README structure:\n"""\n# My Capstone Project\n\n## What it does\nOne clear sentence.\n\n## How to run it\npip install -r requirements.txt\npython main.py\n\n## How it works\nBrief explanation of the AI approach.\n\n## What I learned\nHonest reflection — what surprised you?\n\n## What I\'d improve next\nIf you had 2 more weeks...\n"""`,
    mastery:0 },
  { week:16, phase:4, title:'🎓 Demo Day!', ai4k12:'All 5 Big Ideas — culmination',
    pbl:'Public Product: Family showcase', lifeSkill:'Leadership & Communication',
    deliverable:'Live presentation to family / community',
    tasks:['Set up your demo station 30 minutes early','Present your project (8–12 minutes)','Answer questions from the audience','Celebrate with your family! 🎉'],
    code:`# Demo Day Checklist:\n"""\n✅ Project runs without errors\n✅ Demo data is loaded and ready\n✅ Backup screenshots in case of tech issues\n✅ Presentation slides (3-5 max)\n✅ Practised at least twice\n✅ Can explain it to someone who knows nothing about AI\n✅ Know your accuracy / success metric number\n✅ Have one "what I\'d do next" idea ready\n"""`,
    mastery:0 },
];

// Gate configurations
const GATES = {
  A: { label:'Gate A', name:'Foundations', emoji:'🌱', weeks:'1–4', ageRange:'8–9', color:'var(--gate-a)',
       glow:'rgba(16,185,129,0.5)', start:1,
       description:'Perfect starting point! You\'ll build a Smart Pet game with Pygame Zero while learning the fundamentals of how computers think.' },
  B: { label:'Gate B', name:'Discovery', emoji:'🔍', weeks:'1–8', ageRange:'9–11', color:'var(--gate-b)',
       glow:'rgba(59,130,246,0.5)', start:1,
       description:'Great entry point! You\'ll move through game fundamentals and into real data — cleaning, visualising, and training your first AI.' },
  C: { label:'Gate C', name:'Development', emoji:'⚡', weeks:'5–12', ageRange:'11–13', color:'var(--gate-c)',
       glow:'rgba(139,92,246,0.5)', start:5,
       description:'You\'re ready to skip straight to data! We\'ll start with your first machine learning classifier and level up to NLP.' },
  D: { label:'Gate D', name:'Deployment', emoji:'🚀', weeks:'9–16', ageRange:'13–16', color:'var(--gate-d)',
       glow:'rgba(249,115,22,0.5)', start:9,
       description:'Advanced placement! You\'ll dive into NLP, neural networks, fairness in AI, and build a full capstone project for Demo Day.' },
};

// ============================================================
// PRE-LOADED LEARNER PROFILES (the 4 kids)
// ============================================================
const DEMO_LEARNERS = [
  { id:'meer', name:'Meer', age:16, avatar:'🟦', color:'var(--meer)', hex:'#2563EB',
    gate:'D', currentWeek:11, masteryPct:0.67, streakDays:12, weeklyHours:12.5,
    lastActive: Date.now() - 2*24*60*60*1000,
    currentProject:'Handwritten Digit Recognizer',
    ai4k12:{ perception:0.80, representation:0.90, learning:0.60, interaction:0.70, societal:0.90 },
    pbl:{ challengingProblem:'complete', sustainedInquiry:'complete', authenticity:'complete',
          studentVoice:'in_progress', reflection:'complete', critiqueRevision:'not_started', publicProduct:'not_started' },
    rhythm:[2.5, 1.8, 2.2, 2.8, 2.1, 0.8, 0.3],
    convo:'Meer is learning about neural networks. Ask: "Can you show me your confusion matrix and explain what mistakes your AI makes?"' },
  { id:'lil_kos', name:'Lil Kos', age:10, avatar:'🟪', color:'var(--lil-kos)', hex:'#7C3AED',
    gate:'B', currentWeek:3, masteryPct:0.35, streakDays:0, weeklyHours:1.5,
    lastActive: Date.now() - 5*24*60*60*1000,
    currentProject:'Smart Pet — Personality Mode',
    ai4k12:{ perception:0.55, representation:0.45, learning:0.20, interaction:0.10, societal:0.30 },
    pbl:{ challengingProblem:'complete', sustainedInquiry:'in_progress', authenticity:'not_started',
          studentVoice:'in_progress', reflection:'not_started', critiqueRevision:'not_started', publicProduct:'not_started' },
    rhythm:[0.5, 0.0, 0.8, 0.0, 0.0, 0.2, 0.0],
    convo:'Lil Kos is learning about if-then rules. Ask: "If your pet is hungry AND tired, what should it do? Can you add that to the code?"' },
  { id:'sal', name:'Sal', age:12, avatar:'🟨', color:'var(--sal)', hex:'#F59E0B',
    gate:'C', currentWeek:7, masteryPct:0.58, streakDays:5, weeklyHours:6.5,
    lastActive: Date.now() - 1*24*60*60*1000,
    currentProject:'Data Detective — Evidence Board',
    ai4k12:{ perception:0.75, representation:0.70, learning:0.55, interaction:0.40, societal:0.60 },
    pbl:{ challengingProblem:'complete', sustainedInquiry:'complete', authenticity:'complete',
          studentVoice:'complete', reflection:'in_progress', critiqueRevision:'not_started', publicProduct:'not_started' },
    rhythm:[1.2, 0.8, 1.5, 2.0, 1.0, 0.0, 0.0],
    convo:'Sal is making scatter plots. Ask: "Which two features did you choose for your axes? Why those ones instead of the others?"' },
  { id:'jazz', name:'Jazz', age:8, avatar:'🟩', color:'var(--jazz)', hex:'#10B981',
    gate:'A', currentWeek:2, masteryPct:0.18, streakDays:3, weeklyHours:2.0,
    lastActive: Date.now() - 1*60*60*1000,
    currentProject:'Smart Pet — Mood & Memory',
    ai4k12:{ perception:0.40, representation:0.25, learning:0.10, interaction:0.05, societal:0.15 },
    pbl:{ challengingProblem:'complete', sustainedInquiry:'in_progress', authenticity:'not_started',
          studentVoice:'not_started', reflection:'not_started', critiqueRevision:'not_started', publicProduct:'not_started' },
    rhythm:[0.5, 0.5, 0.0, 0.8, 0.0, 0.0, 0.2],
    convo:'Jazz just learned about variables. Ask: "What three things does your pet remember? What would happen if pets forgot everything every day?"' },
];

const AVATARS = ['🐱','🐶','🦊','🐼','🦁','🐸','🐧','🦄','🐉','🎮','🚀','⭐'];

// ============================================================
// STATE
// ============================================================
let state = {
  view: 'welcome',
  role: null,
  learner: null,
  learners: [],
  selectedLearnerDetail: null,
  parentTab: 'overview',
  weekDetail: null,
  cat: {
    questions: [],
    responses: [],
    theta: 0.0,
    se: 1.0,
    administered: new Set(),
    currentQ: null,
    answered: false,
    domainScores: { CT:[], PY:[], MA:[], AI:[] },
    startTime: null,
  },
};

// ============================================================
// STORAGE
// ============================================================
function saveState() {
  const toSave = {
    learners: state.learners,
    learner: state.learner,
  };
  try { localStorage.setItem('aca_state', JSON.stringify(toSave)); } catch(e) {}
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('aca_state') || '{}');
    if (saved.learners && saved.learners.length) state.learners = saved.learners;
    if (saved.learner) state.learner = saved.learner;
  } catch(e) {}
  // Always ensure demo learners are present
  if (!state.learners.length) state.learners = [...DEMO_LEARNERS];
  else {
    // Merge in demo learners if not already present
    DEMO_LEARNERS.forEach(d => {
      if (!state.learners.find(l => l.id === d.id)) state.learners.push(d);
    });
  }
}

// ============================================================
// CAT ENGINE — 2-PL IRT adaptive testing
// ============================================================
const CAT = {
  prob(theta, a, b) {
    return 1 / (1 + Math.exp(-a * (theta - b)));
  },
  info(theta, a, b) {
    const p = this.prob(theta, a, b);
    return a * a * p * (1 - p);
  },
  selectNext() {
    const available = QUESTIONS.filter(q => !state.cat.administered.has(q.id));
    if (!available.length) return null;
    // Ensure domain balance — prefer underrepresented domains
    const counts = { CT:0, PY:0, MA:0, AI:0 };
    state.cat.administered.forEach(id => {
      const q = QUESTIONS.find(q=>q.id===id);
      if (q) counts[q.domain]++;
    });
    const minCount = Math.min(...Object.values(counts));
    const underRep = Object.keys(counts).filter(d => counts[d] === minCount);
    const pool = available.filter(q => underRep.includes(q.domain));
    const candidates = pool.length >= 2 ? pool : available;
    // Max information selection
    return candidates.reduce((best, q) => {
      const inf = this.info(state.cat.theta, q.a, q.b);
      return inf > best.inf ? { q, inf } : best;
    }, { q: candidates[0], inf: -Infinity }).q;
  },
  updateTheta(correct, q) {
    // MLE step using simplified EAP
    const thetas = Array.from({length: 80}, (_,i) => -4 + i*0.1);
    let likelihoods = thetas.map(() => 1.0);
    // Recompute over all administered items
    state.cat.administered.forEach(id => {
      const item = QUESTIONS.find(x => x.id === id);
      const resp = state.cat.responses.find(r => r.id === id);
      if (!item || !resp) return;
      thetas.forEach((t, i) => {
        const p = CAT.prob(t, item.a, item.b);
        likelihoods[i] *= resp.correct ? p : (1 - p);
      });
    });
    const sum = likelihoods.reduce((a,b) => a+b, 0);
    const norm = likelihoods.map(l => l/sum);
    const meanTheta = thetas.reduce((acc, t, i) => acc + t*norm[i], 0);
    const variance = thetas.reduce((acc, t, i) => acc + norm[i]*(t-meanTheta)**2, 0);
    state.cat.theta = meanTheta;
    state.cat.se = Math.sqrt(variance);
  },
  shouldStop() {
    const n = state.cat.administered.size;
    return n >= 20 || (n >= 10 && state.cat.se < 0.4);
  },
  place() {
    const t = state.cat.theta;
    let gate, startWeek;
    if (t < -0.8)     { gate = 'A'; startWeek = 1; }
    else if (t < 0.5) { gate = 'B'; startWeek = 1; }
    else if (t < 1.8) { gate = 'C'; startWeek = 5; }
    else              { gate = 'D'; startWeek = 9; }
    // Domain score summaries
    const domainPcts = {};
    ['CT','PY','MA','AI'].forEach(d => {
      const items = state.cat.responses.filter(r => r.domain === d);
      domainPcts[d] = items.length ? Math.round(items.filter(r=>r.correct).length / items.length * 100) : 50;
    });
    return { gate, startWeek, domainPcts, theta: state.cat.theta };
  },
};

// ============================================================
// HELPERS
// ============================================================
function timeAgo(ts) {
  const diff = Date.now() - ts;
  const h = diff / 3600000;
  if (h < 1) return 'Just now';
  if (h < 24) return `${Math.floor(h)}h ago`;
  if (h < 48) return 'Yesterday';
  return `${Math.floor(h/24)} days ago`;
}

function statusColor(lastActive) {
  const days = (Date.now() - lastActive) / 86400000;
  if (days < 2) return '#22c55e';
  if (days < 5) return '#eab308';
  return '#ef4444';
}

function statusLabel(lastActive) {
  const days = (Date.now() - lastActive) / 86400000;
  if (days < 2) return 'Active';
  if (days < 5) return 'Slow';
  return 'Stalled';
}

function gateClass(gate) { return `badge-gate-${gate.toLowerCase()}`; }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function $(sel) { return document.querySelector(sel); }

// ============================================================
// ROUTER
// ============================================================
function navigate(view, params={}) {
  state.view = view;
  Object.assign(state, params);
  render();
  window.scrollTo(0,0);
}

// ============================================================
// VIEWS — render functions
// ============================================================

// SVG icon helper
const Icon = {
  brain: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  lock:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  check: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  home:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  back:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
  close: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  rocket:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
};

// ---- WELCOME ----
function renderWelcome() {
  const phaseIcons = ['🌱','🔍','⚡','🚀'];
  return `
  <div class="screen-welcome">
    <div class="welcome-ambient"></div>

    <nav class="welcome-nav">
      <div class="welcome-logo">
        <div class="welcome-logo-mark">${Icon.brain}</div>
        <div>
          <div class="welcome-logo-name">AI Coding Academy</div>
          <div class="welcome-logo-sub">Ages 8–16 · Python + AI</div>
        </div>
      </div>
      <button class="btn btn-ghost btn-sm" data-action="go-parent">${Icon.users} Family</button>
    </nav>

    <div class="welcome-hero">
      <div class="welcome-left">
        <div class="welcome-eyebrow">
          <span class="welcome-eyebrow-dot"></span>
          Adaptive Placement · 16 Weeks
        </div>
        <h1 class="welcome-headline display">
          Learn AI.<br><em>Build the future.</em>
        </h1>
        <p class="welcome-sub">A project-based Python &amp; AI curriculum that adapts to every learner — from first-time coders to young engineers ready to deploy.</p>
        <div class="welcome-learner-row">
          ${DEMO_LEARNERS.map(l => `
            <div class="learner-pill">
              <div class="learner-dot" style="background:${l.hex}"></div>
              ${l.name}
            </div>
          `).join('')}
        </div>
        <div class="welcome-actions">
          <button class="btn btn-primary btn-lg btn-full" data-action="go-student">
            ${Icon.rocket} Start My Journey
          </button>
          <div class="welcome-divider">— or —</div>
          <button class="btn btn-ghost btn-lg btn-full" data-action="go-parent">
            ${Icon.users} Open Family Dashboard
          </button>
        </div>
      </div>

      <div class="welcome-right">
        <div class="preview-card">
          <div class="preview-header">
            <span class="preview-title">16-Week Curriculum</span>
            <span class="preview-badge">4 Gates</span>
          </div>
          <div class="preview-phases">
            ${PHASES.map((p, i) => `
              <div class="preview-phase">
                <div class="phase-icon" style="background:${p.color}20;color:${p.color}">${phaseIcons[i]}</div>
                <div class="preview-phase-info">
                  <div class="preview-phase-name">${p.title}</div>
                  <div class="preview-phase-sub">${p.ai4k12}</div>
                </div>
                <div class="preview-wk">Wk ${p.weeks}</div>
              </div>
            `).join('')}
          </div>
          <div class="preview-stats">
            <div class="preview-stat">
              <div class="preview-stat-num">30</div>
              <div class="preview-stat-label">Questions</div>
            </div>
            <div class="preview-stat">
              <div class="preview-stat-num">4</div>
              <div class="preview-stat-label">Gates</div>
            </div>
            <div class="preview-stat">
              <div class="preview-stat-num">80%</div>
              <div class="preview-stat-label">Mastery gate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ---- SETUP ----
function renderSetup() {
  return `
  <div class="screen-setup slide-in">
    <div class="setup-back">
      <button class="btn-icon" data-action="go-welcome">${Icon.back}</button>
    </div>
    <div class="setup-progress-dots">
      <div class="dot active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <h2 style="margin-bottom:0.375rem">Tell us about you</h2>
    <p style="margin-bottom:2rem;font-size:0.9375rem">We'll use this to personalise your learning path.</p>

    <div class="setup-form">
      <div class="form-group">
        <label class="form-label" for="learner-name">Your name</label>
        <input id="learner-name" class="form-input" type="text" placeholder="e.g. Jazz" autocomplete="off" />
      </div>
      <div class="form-group">
        <label class="form-label">Your age</label>
        <div class="age-row">
          <span class="age-num" id="age-display">12</span>
          <input id="age-slider" type="range" min="8" max="16" value="12" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Pick an avatar</label>
        <div class="avatar-grid">
          ${AVATARS.map((a,i) => `
            <div class="avatar-opt ${i===0?'selected':''}" data-avatar="${a}" data-idx="${i}">${a}</div>
          `).join('')}
        </div>
      </div>
      <div class="setup-footer">
        <button class="btn btn-primary btn-full btn-lg" data-action="start-assessment">
          Take the Placement Challenge ${Icon.arrow}
        </button>
      </div>
    </div>
  </div>`;
}

// ---- ASSESSMENT ----
function renderAssessment() {
  const q = state.cat.currentQ;
  if (!q) return `<div class="screen-assessment"><p>Loading…</p></div>`;
  const n = state.cat.administered.size;
  const progress = (n / 20) * 100;
  const thetaNorm = Math.max(0, Math.min(100, (state.cat.theta + 3) / 6 * 100));
  const gateLabel = thetaNorm < 25 ? 'Gate A' : thetaNorm < 50 ? 'Gate B' : thetaNorm < 75 ? 'Gate C' : 'Gate D';
  const domainLabel = {CT:'Logic',PY:'Python',MA:'Maths',AI:'AI Concepts'}[q.domain];
  return `
  <div class="screen-assessment fade-in">
    <div class="assessment-header">
      <div class="assessment-meta">
        <span class="domain-pill domain-${q.domain}">${domainLabel}</span>
        <span class="q-counter">${n+1} / ~15</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${progress}%;background:linear-gradient(90deg,var(--gate-a),var(--gate-b),var(--gate-c))"></div>
      </div>
      <div class="ability-strip">
        <span>Ability estimate</span>
        <div class="ability-track">
          <div class="ability-fill" style="width:${thetaNorm}%"></div>
        </div>
        <span class="ability-label">${gateLabel}</span>
      </div>
    </div>

    <div class="q-body">
      <div class="q-card">
        <div class="q-category">
          <span class="domain-pill domain-${q.domain}">${domainLabel}</span>
          <div class="q-category-line"></div>
          <span style="font-size:1.5rem">${q.emoji}</span>
        </div>
        <div class="q-text">${q.text}</div>
        ${q.detail ? `<div class="q-detail">${q.detail}</div>` : ''}
      </div>

      <div class="options" id="options-grid">
        ${q.opts.map((opt, i) => {
          let cls = '';
          if (state.cat.answered && state.cat.selected===i) cls = i===q.ans ? 'correct' : 'wrong';
          return `
          <button class="opt-btn ${cls}" data-action="opt" data-opt="${i}" ${state.cat.answered?'disabled':''}>
            <span class="opt-letter">${'ABCD'[i]}</span>
            <span>${opt}</span>
          </button>`;
        }).join('')}
      </div>

      ${state.cat.answered ? `
        <div class="q-footer">
          <button class="btn btn-primary btn-full btn-lg" data-action="next-question">
            ${CAT.shouldStop() ? 'See My Placement ' + Icon.arrow : 'Next Question ' + Icon.arrow}
          </button>
        </div>
      ` : `
        <p class="q-hint">Select the best answer</p>
      `}
    </div>
  </div>`;
}

// ---- GATE REVEAL ----
function renderReveal() {
  const placement = state.placement;
  if (!placement) { navigate('welcome'); return ''; }
  const gate = GATES[placement.gate];
  const gateColors = { A:'#10b981', B:'#3b82f6', C:'#a855f7', D:'#f97316' };
  const gc = gateColors[placement.gate];
  return `
  <div class="screen-reveal">
    <div class="reveal-ambient"></div>
    <div id="confetti-container"></div>
    <div class="reveal-inner">
      <p class="label reveal-label" style="margin-bottom:0.5rem;letter-spacing:0.12em">Your placement</p>
      <div class="reveal-gate-badge" style="background:linear-gradient(135deg,${gc}22,${gc}44);border:1.5px solid ${gc}44;box-shadow:0 0 48px ${gc}30">
        <span style="font-size:3rem">${gate.emoji}</span>
      </div>
      <h1 class="reveal-h1">${gate.label}: ${gate.name}</h1>
      <p class="reveal-desc">${gate.description}</p>
      <div class="reveal-details">
        <div class="reveal-row">
          <span class="reveal-row-label">Entry point</span>
          <span class="reveal-row-val" style="color:${gc}">Week ${placement.startWeek}</span>
        </div>
        <div class="reveal-row">
          <span class="reveal-row-label">Ideal age range</span>
          <span class="reveal-row-val">${gate.ageRange} years</span>
        </div>
        <div class="reveal-row">
          <span class="reveal-row-label">Curriculum span</span>
          <span class="reveal-row-val">Weeks ${gate.weeks}</span>
        </div>
      </div>
      <div class="reveal-domains">
        ${Object.entries(placement.domainPcts).map(([d,pct]) => `
          <div class="domain-chip">
            <div class="domain-chip-name">${{CT:'Logic',PY:'Python',MA:'Maths',AI:'AI'}[d]}</div>
            <div class="domain-chip-val" style="color:${gc}">${pct}%</div>
          </div>
        `).join('')}
      </div>
      <div class="reveal-cta">
        <button class="btn btn-primary btn-full btn-lg" data-action="go-learning-path">
          View My Learning Path ${Icon.arrow}
        </button>
      </div>
    </div>
  </div>`;
}

// ---- LEARNING PATH ----
function renderLearningPath() {
  const learner = state.learner;
  if (!learner) { navigate('welcome'); return ''; }
  const gate = GATES[learner.gate];
  const startWeek = gate.start;
  const currentWeek = learner.currentWeek || startWeek;
  const totalWeeks = 16 - startWeek + 1;
  const doneWeeks = Math.max(0, currentWeek - startWeek);
  const pct = Math.round(doneWeeks / totalWeeks * 100);
  const gateColor = { A:'#10b981', B:'#3b82f6', C:'#a855f7', D:'#f97316' }[learner.gate];
  return `
  <div class="screen-learning fade-in">
    <div class="lp-topbar">
      <div class="lp-user">
        <div class="lp-avatar" style="border-color:${learner.hex||gateColor}">${learner.avatar || '🎓'}</div>
        <div>
          <div class="lp-name">${learner.name}'s Path</div>
          <div class="lp-sub">${gate.label} · ${gate.name}</div>
        </div>
      </div>
      <div class="lp-actions">
        <span class="badge ${gateClass(learner.gate)}">${gate.emoji} ${gate.label}</span>
        <button class="btn-icon" data-action="go-welcome" title="Home">${Icon.home}</button>
      </div>
    </div>

    <div class="lp-body">
      <div class="lp-hero">
        <div class="lp-gate-badge" style="background:${gateColor}18;color:${gateColor}">${gate.emoji}</div>
        <div class="lp-hero-info">
          <div class="lp-hero-title">Overall progress</div>
          <div class="lp-hero-h2">${gate.name} — ${gate.weeks.includes('–') ? 'Weeks '+gate.weeks : gate.weeks}</div>
          <div class="progress-track" style="margin-bottom:0.875rem">
            <div class="progress-fill" style="width:${pct}%;background:${gateColor}"></div>
          </div>
          <div class="lp-hero-meta">
            <span class="lp-meta-chip"><div class="lp-meta-dot" style="background:${gateColor}"></div>${pct}% done</span>
            <span class="lp-meta-chip"><div class="lp-meta-dot" style="background:var(--text-tertiary)"></div>Week ${currentWeek}/16</span>
            <span class="lp-meta-chip"><div class="lp-meta-dot" style="background:var(--text-tertiary)"></div>${16 - currentWeek + 1} left</span>
          </div>
        </div>
      </div>

      ${PHASES.map(phase => {
        const phaseWeeks = WEEKS.filter(w => w.phase === phase.id);
        return `
        <div class="lp-phase">
          <div class="lp-phase-header">
            <div class="phase-bar" style="background:${phase.color}"></div>
            <span class="lp-phase-label">Phase ${phase.id}</span>
            <span class="lp-phase-name">${phase.title}</span>
            <span class="lp-phase-wk-range">Wk ${phase.weeks}</span>
          </div>
          <div class="week-list">
            ${phaseWeeks.map(w => {
              const isLocked = w.week < startWeek;
              const isActive = w.week === currentWeek;
              const isDone   = w.week < currentWeek;
              const cls = isLocked ? 'locked' : isActive ? 'active' : isDone ? 'done' : '';
              const numContent = isLocked ? Icon.lock : isDone ? Icon.check : w.week;
              return `
              <div class="week-row ${cls}" data-action="${isLocked?'':'open-week'}" data-week="${w.week}">
                <div class="week-num-circle" style="${isDone ? `background:${phase.color}15;border-color:${phase.color}40;color:${phase.color}` : isActive ? `background:var(--accent);border-color:var(--accent);color:#fff` : ''}">
                  ${isLocked ? Icon.lock : isDone ? Icon.check : w.week}
                </div>
                <div>
                  <div class="week-info-title">${w.title}</div>
                  <div class="week-info-del">${w.deliverable}</div>
                </div>
                <div class="week-status-icon">
                  ${isDone ? `<span style="color:${phase.color};font-size:0.75rem;font-weight:800;font-family:var(--font-mono)">${w.mastery||''}${w.mastery?'%':''}</span>` : isActive ? Icon.arrow : ''}
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ---- WEEK DETAIL ----
function renderWeekDetail() {
  const w = state.weekDetail;
  if (!w) { navigate('learning'); return ''; }
  const phase = PHASES.find(p => p.id === w.phase);
  const savedTasks = JSON.parse(localStorage.getItem(`tasks_${w.week}`) || '[]');
  return `
  <div class="screen-week fade-in">
    <div class="week-topbar">
      <button class="btn-icon" data-action="go-learning-path">${Icon.back}</button>
      <div class="week-topbar-info">
        <div class="week-topbar-title">Week ${w.week} · ${w.title}</div>
        <div class="week-topbar-sub">Phase ${w.phase} — ${phase.title}</div>
      </div>
      <span class="badge ${gateClass(state.learner?.gate||'B')}">${GATES[state.learner?.gate||'B']?.emoji} ${state.learner?.gate||'B'}</span>
    </div>

    <div class="week-body">
      <div class="week-hero">
        <span class="label" style="color:${phase.color};display:block;margin-bottom:0.5rem">Phase ${phase.id} · ${phase.title}</span>
        <h2 style="margin-bottom:1rem">${w.title}</h2>
        <div class="week-chips">
          <span class="chip chip-ai4k12">${w.ai4k12}</span>
          <span class="chip chip-pbl">${w.pbl.split(':')[0]}</span>
          <span class="chip chip-skill">${w.lifeSkill}</span>
        </div>
        <div class="week-deliverable">
          <span class="week-del-icon">🎯</span>
          <span class="week-del-text">${w.deliverable}</span>
        </div>
      </div>

      <div class="card">
        <div class="section-label">This Week's Tasks</div>
        <div class="task-list" id="task-list">
          ${w.tasks.map((t, i) => {
            const done = savedTasks.includes(i);
            return `
            <div class="task-item ${done?'done':''}" data-task="${i}">
              <div class="task-cb">${done ? Icon.check : ''}</div>
              <span class="task-text">${t}</span>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="card">
        <div class="section-label">Sample Code</div>
        <div class="code-block">${w.code}</div>
      </div>

      <div class="mastery-bar">
        <div class="mastery-icon-wrap">🏆</div>
        <div class="mastery-info">
          <strong>Mastery gate</strong>
          <p>Complete all tasks and score 80%+ to unlock Week ${w.week+1}.</p>
        </div>
        <div class="mastery-pct">${w.mastery ? w.mastery+'%' : '—'}</div>
      </div>

      <div class="week-actions">
        <button class="btn btn-ghost" data-action="go-learning-path">${Icon.back} Back to Path</button>
        ${w.week < 16 ? `<button class="btn btn-primary" data-action="open-week" data-week="${w.week+1}">Next Week ${Icon.arrow}</button>` : ''}
      </div>
    </div>
  </div>`;
}

// ---- PARENT DASHBOARD ----
function renderParentDashboard() {
  const learners = state.learners;
  const alertLearner = learners.find(l => (Date.now()-l.lastActive)/86400000 > 4);
  const streaker = learners.find(l => l.streakDays > 0);
  const convoLearner = learners[Math.floor(Date.now()/86400000) % learners.length];
  return `
  <div class="screen-parent fade-in">
    <div class="parent-topbar">
      <div class="parent-topbar-left">
        <div class="parent-logo-sm">${Icon.brain}</div>
        <div>
          <div class="parent-topbar-title">Family Dashboard</div>
          <div class="parent-topbar-sub">AI Coding Academy</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:0.625rem">
        <div class="sync-pill">
          <div class="sync-pulse"></div>
          Online
        </div>
        <button class="btn-icon" data-action="go-welcome" title="Home">${Icon.home}</button>
      </div>
    </div>

    <div class="parent-scroll">
      <div class="parent-inner">

        <!-- Learners -->
        <div>
          <div class="section-heading">Your Learners</div>
          <div class="learner-grid">
            ${learners.map(l => {
              const gate = GATES[l.gate];
              const sColor = statusColor(l.lastActive);
              const pct = Math.round(l.masteryPct * 100);
              return `
              <div class="lc" data-action="open-learner" data-learner="${l.id}"
                   style="border-color:${l.hex}28">
                <div style="position:absolute;top:0;left:0;right:0;height:2.5px;background:${l.hex};border-radius:var(--r-xl) var(--r-xl) 0 0"></div>
                <div class="lc-header">
                  <div class="lc-avatar" style="border-color:${l.hex};background:${l.hex}15">${l.avatar}</div>
                  <div class="lc-status" style="color:${sColor}">
                    <div class="lc-status-dot" style="background:${sColor}"></div>
                    ${statusLabel(l.lastActive)}
                  </div>
                </div>
                <div class="lc-name">${l.name}</div>
                <div class="lc-meta">Age ${l.age} · ${gate.emoji} ${gate.label}</div>
                <div class="lc-progress">
                  <div class="lc-pct-row">
                    <span class="lc-pct-left">Wk ${l.currentWeek}/16</span>
                    <span class="lc-pct-right" style="color:${l.hex}">${pct}%</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width:${pct}%;background:${l.hex}"></div>
                  </div>
                </div>
                <div class="lc-footer">
                  <span class="mini-tag">${l.streakDays}d</span>
                  <span class="mini-tag">${l.weeklyHours}h/wk</span>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>

        <!-- Insights -->
        <div>
          <div class="section-heading">Insights</div>
          <div class="insight-list">
            ${alertLearner ? `
            <div class="insight alert">
              <div class="insight-icon">⚠️</div>
              <div class="insight-body">
                <h4>${alertLearner.name} hasn't coded in a while</h4>
                <p>Last active ${timeAgo(alertLearner.lastActive)} — may be stuck on "${alertLearner.currentProject}".</p>
                <button class="insight-cta" data-action="open-learner" data-learner="${alertLearner.id}">View details ${Icon.arrow}</button>
              </div>
            </div>` : ''}
            ${streaker ? `
            <div class="insight celebration">
              <div class="insight-icon">🎉</div>
              <div class="insight-body">
                <h4>${streaker.name} is on a ${streaker.streakDays}-day streak</h4>
                <p>Consistent daily practice is the strongest predictor of completing the curriculum.</p>
              </div>
            </div>` : ''}
            <div class="insight tip">
              <div class="insight-icon">📅</div>
              <div class="insight-body">
                <h4>Demo Day lands on Week 16</h4>
                <p>Every learner presents their capstone to the family. Start pencilling in a date.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Conversation Starter -->
        <div class="convo-panel">
          <div class="convo-panel-header">
            <div class="convo-avatar" style="border-color:${convoLearner.hex};background:${convoLearner.hex}15">${convoLearner.avatar}</div>
            <div>
              <div class="convo-for">Tonight's conversation starter · ${convoLearner.name}</div>
              <div class="convo-title">Ask them this at dinner</div>
            </div>
          </div>
          <div class="convo-q">"${convoLearner.convo}"</div>
          <div class="convo-actions">
            <button class="btn btn-primary btn-sm" data-action="open-learner" data-learner="${convoLearner.id}">
              View ${convoLearner.name}'s progress
            </button>
            <button class="btn btn-ghost btn-sm" data-action="next-convo">
              New question ${Icon.arrow}
            </button>
          </div>
        </div>

        <!-- Demo Day -->
        <div class="demo-card">
          <div class="demo-header">
            <div>
              <h3>Demo Day — Week 16</h3>
              <p style="font-size:0.8125rem;margin-top:0.15rem">Family Showcase · Home</p>
            </div>
            <button class="btn btn-ghost btn-sm" data-action="noop">Schedule</button>
          </div>
          <div class="demo-schedule">
            ${[{l:learners[3],time:'2:10'},{l:learners[1],time:'2:25'},{l:learners[2],time:'2:45'},{l:learners[0],time:'3:10'}].map(({l,time}) => `
            <div class="demo-slot">
              <span class="demo-time">${time} PM</span>
              <div class="demo-dot" style="background:${l.hex}"></div>
              <div class="demo-slot-info">
                <div class="demo-slot-name">${l.name}</div>
                <div class="demo-slot-proj">${l.currentProject}</div>
              </div>
              <span class="badge ${gateClass(l.gate)}">${GATES[l.gate].emoji}</span>
            </div>`).join('')}
            <div class="demo-slot">
              <span class="demo-time">3:35 PM</span>
              <div class="demo-dot" style="background:var(--text-tertiary)"></div>
              <div class="demo-slot-info">
                <div class="demo-slot-name">Family Q&amp;A + Awards</div>
                <div class="demo-slot-proj">All learners · ~20 min</div>
              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-ghost btn-full" data-action="go-welcome">${Icon.back} Back to Home</button>
      </div>
    </div>

    ${renderLearnerDetailPanel()}
  </div>`;
}

// ---- LEARNER DETAIL PANEL ----
function renderLearnerDetailPanel() {
  const l = state.learners.find(x => x.id === state.selectedLearnerDetail);
  if (!l) return '';
  const gate = GATES[l.gate];
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const maxHours = Math.max(...l.rhythm, 0.1);
  const pblLabels = {
    challengingProblem:'Challenging Problem', sustainedInquiry:'Sustained Inquiry',
    authenticity:'Authenticity', studentVoice:'Student Voice & Choice',
    reflection:'Reflection', critiqueRevision:'Critique & Revision', publicProduct:'Public Product'
  };
  const pblSt = s => s==='complete' ? { cls:'pbl-done', txt:'Done' } : s==='in_progress' ? { cls:'pbl-prog', txt:'In progress' } : { cls:'pbl-pend', txt:'Not started' };
  const pblIc = s => s==='complete' ? Icon.check : s==='in_progress' ? '◑' : '○';
  const ai4Labels = { perception:'Perception', representation:'Representation & Reasoning', learning:'Learning', interaction:'Natural Interaction', societal:'Societal Impact' };
  return `
  <div class="detail-overlay" data-action="close-learner-overlay">
    <div class="detail-panel">
      <div class="detail-topbar">
        <div class="lc-avatar" style="border-color:${l.hex};background:${l.hex}15;width:2.75rem;height:2.75rem;font-size:1.4rem">${l.avatar}</div>
        <div style="flex:1">
          <div style="font-weight:700;letter-spacing:-0.01em">${l.name}'s Progress</div>
          <div style="font-size:0.6875rem;color:var(--text-tertiary)">${gate.emoji} ${gate.label} · Week ${l.currentWeek}/16 · Age ${l.age}</div>
        </div>
        <button class="btn-icon" data-action="close-learner">${Icon.close}</button>
      </div>

      <div class="detail-body">
        <!-- AI4K12 -->
        <div>
          <div class="section-label">AI4K12 Mastery</div>
          <div class="ai4k12-rows">
            ${Object.entries(l.ai4k12).map(([k,v]) => `
            <div class="ai4k12-row">
              <span class="ai4k12-label">${ai4Labels[k]}</span>
              <div class="ai4k12-track">
                <div class="ai4k12-fill" style="width:${v*100}%;background:${l.hex}"></div>
              </div>
              <span class="ai4k12-pct" style="color:${l.hex}">${Math.round(v*100)}%</span>
            </div>`).join('')}
          </div>
        </div>

        <!-- PBL -->
        <div>
          <div class="section-label">Gold Standard PBL — ${l.currentProject}</div>
          <div class="pbl-list">
            ${Object.entries(l.pbl).map(([k,v]) => {
              const s = pblSt(v);
              return `
              <div class="pbl-row">
                <span style="width:1.25rem;text-align:center;font-size:0.75rem;flex-shrink:0">${pblIc(v)}</span>
                <span class="pbl-row-name">${pblLabels[k]}</span>
                <span class="pbl-status ${s.cls}">${s.txt}</span>
              </div>`;
            }).join('')}
          </div>
        </div>

        <!-- Rhythm -->
        <div>
          <div class="section-label">Weekly Coding Rhythm</div>
          <div class="rhythm-wrap">
            ${l.rhythm.map((h, i) => `
            <div class="rhythm-col">
              <div class="rhythm-bar" style="height:${Math.max((h/maxHours)*100,h>0?6:0)}%;background:${l.hex}"></div>
              <span class="rhythm-day">${days[i]}</span>
            </div>`).join('')}
          </div>
        </div>

        <!-- Convo -->
        <div class="convo-panel" style="margin:0">
          <div class="convo-panel-header">
            <div style="font-size:1.1rem">💬</div>
            <div class="convo-title">Conversation Starter</div>
          </div>
          <div class="convo-q" style="font-size:0.875rem">"${l.convo}"</div>
        </div>

        <button class="btn btn-ghost btn-full" data-action="close-learner">Close ${Icon.close}</button>
      </div>
    </div>
  </div>`;
}

// ============================================================
// MAIN RENDER
// ============================================================
function render() {
  const app = document.getElementById('app');
  switch(state.view) {
    case 'welcome':   app.innerHTML = renderWelcome(); break;
    case 'setup':     app.innerHTML = renderSetup(); attachSetupListeners(); break;
    case 'assessment':app.innerHTML = renderAssessment(); break;
    case 'reveal':    app.innerHTML = renderReveal(); spawnConfetti(); break;
    case 'learning':  app.innerHTML = renderLearningPath(); break;
    case 'week':      app.innerHTML = renderWeekDetail(); attachWeekListeners(); break;
    case 'parent':    app.innerHTML = renderParentDashboard(); break;
    default:          app.innerHTML = renderWelcome();
  }
}

// ============================================================
// EVENT DELEGATION — all clicks handled here
// ============================================================
document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;

  switch(action) {
    case 'go-welcome':   navigate('welcome'); break;
    case 'go-student':   navigate('setup'); break;
    case 'go-parent':    navigate('parent'); break;
    case 'noop':         showToast('Coming soon!'); break;

    case 'start-assessment': {
      const name = $('#learner-name')?.value?.trim() || 'Learner';
      const age = parseInt($('#age-slider')?.value || '12');
      const avatar = document.querySelector('.avatar-opt.selected')?.dataset.avatar || '🎓';
      const hex = '#4f46e5';
      state.learner = { id:'new_'+Date.now(), name, age, avatar, hex, color:'var(--primary)',
                        gate:null, currentWeek:null, masteryPct:0, streakDays:0, weeklyHours:0,
                        lastActive:Date.now() };
      // Init CAT
      state.cat = { questions:[], responses:[], theta:0.0, se:1.0,
                    administered:new Set(), currentQ:null, answered:false, selected:null,
                    domainScores:{CT:[],PY:[],MA:[],AI:[]}, startTime:Date.now() };
      state.cat.currentQ = CAT.selectNext();
      navigate('assessment');
      break;
    }

    case 'opt': { // answer option
      if (state.cat.answered) return;
      const idx = parseInt(el.dataset.opt);
      const q = state.cat.currentQ;
      if (!q) return;
      const correct = idx === q.ans;
      state.cat.answered = true;
      state.cat.selected = idx;
      state.cat.administered.add(q.id);
      state.cat.responses.push({ id:q.id, domain:q.domain, correct });
      CAT.updateTheta(correct, q);
      render();
      break;
    }

    case 'next-question': {
      if (CAT.shouldStop()) {
        const placement = CAT.place();
        // Merge placement into learner
        state.learner.gate = placement.gate;
        state.learner.currentWeek = placement.startWeek;
        state.learner.hex = { A:'#10B981',B:'#3b82f6',C:'#8b5cf6',D:'#f97316' }[placement.gate];
        state.placement = placement;
        // Save learner
        if (!state.learners.find(l=>l.id===state.learner.id)) state.learners.push(state.learner);
        saveState();
        navigate('reveal');
      } else {
        state.cat.answered = false;
        state.cat.selected = null;
        state.cat.currentQ = CAT.selectNext();
        navigate('assessment');
      }
      break;
    }

    case 'go-learning-path': {
      navigate('learning');
      break;
    }

    case 'open-week': {
      const wNum = parseInt(el.dataset.week);
      const wData = WEEKS.find(w => w.week === wNum);
      if (wData) navigate('week', { weekDetail: wData });
      break;
    }

    case 'open-learner': {
      state.selectedLearnerDetail = el.dataset.learner;
      render();
      break;
    }
    case 'close-learner': {
      state.selectedLearnerDetail = null;
      render();
      break;
    }
    case 'close-learner-overlay': {
      // Only close when clicking the backdrop, not inside the panel
      if (!e.target.closest('.learner-detail-panel')) {
        state.selectedLearnerDetail = null;
        render();
      }
      break;
    }

    case 'next-convo': {
      showToast('Refreshing conversation starter…');
      break;
    }
  }
});


// ============================================================
// SCREEN-SPECIFIC LISTENERS (attached after render)
// ============================================================
function attachSetupListeners() {
  const slider = document.getElementById('age-slider');
  const display = document.getElementById('age-display');
  if (slider && display) {
    slider.addEventListener('input', () => { display.textContent = slider.value; });
  }
  document.querySelectorAll('.avatar-opt').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.avatar-opt').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
    });
  });
}

function attachWeekListeners() {
  const w = state.weekDetail;
  if (!w) return;
  document.querySelectorAll('.task-item').forEach(el => {
    el.addEventListener('click', () => {
      const key = `tasks_${w.week}`;
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      const idx = parseInt(el.dataset.task);
      const isDone = saved.includes(idx);
      const updated = isDone ? saved.filter(i=>i!==idx) : [...saved, idx];
      localStorage.setItem(key, JSON.stringify(updated));
      el.classList.toggle('done');
      const check = el.querySelector('.task-check');
      if (check) check.textContent = updated.includes(idx) ? '✓' : '';
    });
  });
}

// ============================================================
// CONFETTI (gate reveal animation)
// ============================================================
function spawnConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  const colors = ['#4f46e5','#10b981','#f59e0b','#ef4444','#3b82f6','#8b5cf6'];
  for (let i = 0; i < 60; i++) {
    const dot = document.createElement('div');
    const size = Math.random() * 8 + 4;
    dot.style.cssText = `
      position:fixed;
      width:${size}px;height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      border-radius:${Math.random()>0.5?'50%':'2px'};
      left:${Math.random()*100}vw;
      top:-20px;
      opacity:${Math.random()*0.8+0.2};
      animation:confetti-fall ${1.5+Math.random()*2}s ${Math.random()*0.8}s ease-in forwards;
    `;
    container.appendChild(dot);
  }
  const style = document.createElement('style');
  style.textContent = `
    @keyframes confetti-fall {
      to { transform:translateY(110vh) rotate(${Math.random()>0.5?720:-720}deg); opacity:0; }
    }
  `;
  document.head.appendChild(style);
}

// ============================================================
// SERVICE WORKER REGISTRATION
// ============================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ============================================================
// BOOT
// ============================================================
loadState();
render();

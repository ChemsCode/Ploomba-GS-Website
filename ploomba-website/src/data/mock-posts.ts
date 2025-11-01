export type Post = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  content: string; // Full content in HTML format
};

export const allPosts: Post[] = [
  {
    slug: 'rethinking-fieldwork-solving-soil-compaction',
    title: 'Rethinking Fieldwork: How Lightweight Autonomy Solves Soil Compaction',
    tag: 'Technology',
    excerpt: 'Heavy machinery compacts your soil, strangling yields. Our autonomous wagon is designed to be lightweight and intelligent, solving this problem while freeing up your team.',
    imageUrl: 'https://placehold.co/400x250/D90429/FFFFFF?text=Ploomba+Wagon+in+Field',
    author: 'Ploomba Engineering Team',
    date: 'November 1, 2025',
    content: `
      <p>For decades, the answer to farm efficiency has been "bigger is better." Bigger tractors, bigger harvesters. But this comes at a steep, hidden cost: <strong>soil compaction</strong>.</p>
      <p>Heavy machinery presses the life out of your soil, reducing water infiltration, harming root growth, and ultimately cutting into your yields. It's a problem that costs farmers thousands, and until now, the solutions have been limited.</p>
      
      <h2>A Smarter, Lighter Approach</h2>
      <p>This is why we designed the Ploomba Autonomous Wagon. At its core, it's a paradigm shift. Instead of relying on a single, multi-ton machine, our philosophy is to use lightweight, intelligent, and autonomous assistants.</p>
      <p>The wagon, with its 300 kg load capacity, is powerful enough to transport a picker's harvest or carry precision spraying equipment, but light enough to tread gently between rows. Its fully electric drivetrain doesn't just reduce your carbon footprint—it provides the steady, calculated torque needed to navigate fields without slipping or churning up soil.</p>

      <h2>More Than Just Transport</h2>
      <p>But reducing compaction is just the beginning. By making the wagon autonomous, it becomes a true "autonomous assistant for field work," just as our brochure states. It can follow a picker, transporting fruits and vegetables effortlessly, freeing that worker to focus 100% on harvesting. It can be dispatched for precision spraying, or—most importantly—it can analyze the fields as it passes.</p>
      <p>This is the future of farming: not bigger, but smarter. It's about using distributed, lightweight technology to build healthier soil and more resilient, efficient, and profitable operations.</p>
    `
  },
  {
    slug: 'ai-predicts-farm-yields',
    title: 'From Guesswork to Data-Driven Decisions: Using AI to Predict Yields',
    tag: 'Innovation',
    excerpt: 'Stop reacting to problems. Our Analysis Platform uses AI to help you recognize signs of pests and accurately estimate your yields months before harvest.',
    imageUrl: 'https://placehold.co/400x250/2B3036/FFFFFF?text=Ploomba+AI+Platform',
    author: 'Dr. Jane Smith, Head of Data Science',
    date: 'October 28, 2025',
    content: `
      <p>How much yield will you get from Field B? Are those yellow spots on Block 3 a sign of pests or a nutrient deficiency? For most of agricultural history, the answer has been a "best guess" based on experience.</p>
      <p>Experience is invaluable, but in a world of tight margins, guesswork is a liability. That's why we built our <strong>AI Tool and Analysis Platform</strong>.</p>
      
      <h2>Your Data, Working for You</h2>
      <p>Our platform is designed to turn raw data into actionable intelligence. As our autonomous wagons move through the fields, they don't just "see"—they analyze. This data, combined with information from your equipment and our Agro App, feeds directly into our AI models.</p>
      <p>What does this mean for you?</p>
      
      <h3>1. Accurately Estimate Your Yields</h3>
      <p>Our models use a library of data to "accurately estimate your yields," as stated in our mission. This allows you to plan logistics, secure contracts, and manage your finances with a level of confidence that "gut feeling" can't provide.</p>

      <h3>2. Recognize Pests and Diseases Early</h3>
      <p>The AI model library is trained to "recognize signs of pests and diseases." This means your Agro App can alert you to a potential problem *before* it spreads, allowing you to deploy targeted solutions—like our wagon's precision spraying—instead of costly, broad-spectrum pesticides.</p>

      <p>This is the core of "Professional Ag-Tech": giving you the data-driven tools you need to move from reacting to problems to proactively managing your farm.</p>
    `
  },
  {
    slug: 'farmer-first-business-model',
    title: 'Why "Farmer-First" Isn\'t Just a Slogan, It\'s Our Business Model',
    tag: 'Sustainability',
    excerpt: 'Technology can be complicated. Our "Farmer-First" value means we build tools that solve real problems, are easy to use, and are environmentally sustainable.',
    imageUrl: 'https://placehold.co/400x250/FFB703/FFFFFF?text=Farmer-First',
    author: 'Ploomba Leadership',
    date: 'October 25, 2025',
    content: `
      <p>You'll see "Farmer-First" listed as one of our core values. To us, this isn't just a marketing buzzword. It's the guiding principle behind every decision we make.</p>
      <p>Technology in agriculture is often confusing, expensive, or built without a clear understanding of the person who will be using it. The "Farmer-First" approach is our commitment to doing the opposite.</p>

      <h2>What Does "Farmer-First" Mean in Practice?</h2>
      
      <h3>1. It Means Solving Real Problems.</h3>
      <p>We're not interested in tech for tech's sake. We started Ploomba to solve concrete agricultural challenges: soil compaction, labor shortages, and yield uncertainty. Our autonomous wagon and AI platform are direct answers to these problems.</p>

      <h3>2. It Means Usability.</h3>
      <p>Our <strong>Agro App</strong> is the perfect example. It's designed to be your "personalized production journal." It's a tool for *you* to model production, manage your fields, and monitor your equipment—all from a single, intuitive interface. If you can't use it, we've failed.</p>

      <h3>3. It Means Sustainability.</h3>
      <p>A "Farmer-First" approach is inherently sustainable. Our electric wagons reduce on-farm emissions. Our precision spraying capabilities reduce chemical waste. By helping you do more with less, we're building a model that is both environmentally and economically sustainable for generations to come.</p>

      <p>As our brochure states, "We are currently seeking partners to continue the development." This is an open invitation. We want to work *with* farmers to build the next generation of ag-tech. That is what "Farmer-First" means to us.</p>
    `
  },
];
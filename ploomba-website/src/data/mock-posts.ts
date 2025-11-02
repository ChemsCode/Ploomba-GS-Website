// src/data/mock-posts.ts

// (The 'PostContent' and 'Post' types should already be here, keep them)
export type PostContent = {
  introduction: string;
  keyInsight: {
    title: string;
    text: string;
  };
  sectionOne: {
    title: string;
    body: string;
  };
  sectionTwo: {
    title: string;
    body: string;
  };
  conclusion: string;
};

export type Post = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  content: PostContent;
};

// --- NEW EXPANDED CONTENT ---
export const allPosts: Post[] = [
  {
    slug: 'rethinking-fieldwork-solving-soil-compaction',
    title: 'Rethinking Fieldwork: How Lightweight Autonomy Solves Soil Compaction',
    tag: 'Technology',
    excerpt: 'Heavy machinery compacts your soil, strangling yields. Our autonomous wagon is designed to be lightweight and intelligent, solving this problem.',
    imageUrl: '/ploomba_in_field_1.png',
    author: 'Ploomba Engineering Team',
    date: 'November 1, 2025',
    content: {
      introduction: "For decades, the answer to farm efficiency has been 'bigger is better.' Bigger tractors, bigger harvesters, heavier loads. But this philosophy comes at a steep, hidden cost: soil compaction. Year after year, this immense weight presses the life out of your soil, reducing porosity, harming root growth, and ultimately strangling your yields.",
      keyInsight: {
        title: "A Smarter, Lighter Approach",
        text: "Instead of relying on a single, multi-ton machine for every task, our philosophy is to use a fleet of lightweight, intelligent, and autonomous assistants. This is the core of our design."
      },
      sectionOne: {
        title: "The Problem with 'Bigger'",
        body: "Soil compaction is a physical problem that requires a physical solution. When soil is compacted, water infiltration plummets, leading to runoff and wasted resources. Plant roots struggle to penetrate the dense earth, limiting their access to nutrients and water. This directly impacts your crop's resilience and final output. It's a problem that costs farmers thousands per acre, and until now, the solutions—like deep tilling—have been costly, temporary, and fuel-intensive."
      },
      sectionTwo: {
        title: "More Than Just Transport",
        body: "The Ploomba Autonomous Wagon, with its 300 kg load capacity, is the first step in this new direction. It's powerful enough to transport a picker's harvest or carry precision spraying equipment, but light enough to tread gently between rows. Its fully electric drivetrain doesn't just reduce emissions; it provides steady, calculated torque to navigate fields without churning up soil. By making it autonomous, it becomes a true 'autonomous assistant for field work,' as our mission states. It can follow a picker, 'transporting fruits and vegetables effortlessly,' freeing that worker to focus 100% on harvesting. It's a platform for smarter, more delicate farming."
      },
      conclusion: "This is the future of farming: not bigger, but smarter. It's about using distributed, lightweight technology to build healthier soil, reduce waste, and create more resilient, efficient, and profitable operations for generations to come."
    }
  },
  {
    slug: 'ai-predicts-farm-yields',
    title: 'From Guesswork to Data-Driven Decisions: Using AI to Predict Yields',
    tag: 'Innovation',
    excerpt: 'Stop reacting to problems. Our Analysis Platform uses AI to help you recognize signs of pests and accurately estimate your yields months before harvest.',
    imageUrl: '/ai_model_straweberries.png',
    author: 'Dr. Jane Smith, Head of Data Science',
    date: 'October 28, 2025',
    content: {
      introduction: "How much yield will you get from Field B-North? Are those yellow spots on Block 3 a sign of pests or a simple nutrient deficiency? For most of agricultural history, the answer has been a 'best guess' based on experience, weather patterns, and a healthy amount of 'gut feeling.'",
      keyInsight: {
        title: "Data-Driven Intelligence",
        text: "Our platform is designed to turn raw data into actionable intelligence. Experience is invaluable, but in a world of tight margins and climate volatility, guesswork is a liability we can no longer afford."
      },
      sectionOne: {
        title: "Accurately Estimate Your Yields",
        body: "Our 'AI Tool' isn't a black box. It works by combining data from your 'Agro App,' public weather data, and—crucially—observations from our autonomous wagons. As the wagons analyze fields on their routes, they're collecting visual data. Our models use this to count blossoms, assess fruit development, and 'accurately estimate your yields.' This allows you to plan logistics, secure contracts, and manage your finances with a level of confidence that was previously impossible."
      },
      sectionTwo: {
        title: "Recognize Pests and Diseases Early",
        body: "The same visual data feeds our 'model library to recognize signs of pests and diseases.' The AI is trained to spot the subtle leaf discoloration of a fungal infection or the specific damage pattern of a new pest. This means your Agro App can alert you to a *potential* problem in Block 3, Row 12, days before it's visible to the naked eye. This allows you to deploy a targeted solution—like our wagon's 'precision spraying'—instead of a costly, field-wide application."
      },
      conclusion: "This is the core of 'Professional Ag-Tech.' It's not about replacing the farmer's intuition, but augmenting it. We're giving you the data-driven tools you need to move from reacting to problems to proactively managing your farm's future."
    }
  },
  {
    slug: 'farmer-first-business-model',
    title: "Why 'Farmer-First' Isn't Just a Slogan, It's Our Business Model",
    tag: 'Sustainability',
    excerpt: "Technology can be complicated. Our 'Farmer-First' value means we build tools that solve real problems, are easy to use, and are environmentally sustainable.",
    imageUrl: '/ploomba_in_field_2.png',
    author: 'Ploomba Leadership',
    date: 'October 25, 2025',
    content: {
      introduction: "You'll see 'Farmer-First' listed as one of our core values. In the world of tech, it's easy for that to sound like a marketing buzzword. To us, it's the guiding principle behind every line of code we write and every piece of hardware we design. It's a commitment to building things that are not just innovative, but genuinely useful.",
      keyInsight: {
        title: "Technology in Practice",
        text: "Technology in agriculture is often confusing, expensive, or built in a vacuum without a clear understanding of the person who will be using it. The 'Farmer-First' approach is our commitment to doing the opposite."
      },
      sectionOne: {
        title: "Solving Real, Grounded Problems",
        body: "We're not interested in 'tech for tech's sake.' We started Ploomba to solve concrete agricultural challenges we saw firsthand: crippling soil compaction from heavy machinery, persistent labor shortages during peak season, and the financial uncertainty of unpredictable yields. Our Autonomous Wagon, our Agro App, and our AI Platform are all direct answers to these specific, real-world problems."
      },
      sectionTwo: {
        title: "Usability and Sustainability",
        body: "Our 'Agro App' is the perfect example of this value in action. We designed it to be your 'personalized production journal'—a tool to 'model and estimate production' and 'manage your tech equipment' from one simple interface. If it's not intuitive, if it takes more time than it saves, we've failed. This approach is also inherently sustainable. Our electric wagons reduce on-farm emissions. Our precision spraying capabilities reduce chemical waste. By helping you do more with less, we're building a model that is both environmentally and economically sustainable."
      },
      conclusion: "As our brochure states, 'We are currently seeking partners to continue the development.' This is more than a sales pitch; it's an open invitation. We want to work *with* farmers to build the next generation of ag-tech. That is what 'Farmer-First' means to us."
    }
  },
];
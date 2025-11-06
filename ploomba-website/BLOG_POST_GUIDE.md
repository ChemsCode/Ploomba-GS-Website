# Blog Post Creation Guide

## Overview

This guide explains how to create and structure blog posts using our flexible block-based content system. No coding knowledge required—just edit JSON!

---

## Quick Start

Blog posts are defined in `src/data/mock-posts.ts`. Each post is a JSON object with metadata and a `content` array of blocks.

### Basic Structure

```typescript
{
  slug: 'your-post-url-slug',
  title: 'Your Post Title',
  tag: 'Technology', // or 'Innovation', 'Sustainability'
  excerpt: 'Short description for previews',
  imageUrl: '/path-to-header-image.png',
  author: 'Author Name',
  date: 'November 1, 2025',
  content: [
    // Your content blocks go here
  ]
}
```

---

## Available Block Types

### 1. Paragraph Block

Use for regular text content.

```typescript
{
  type: 'paragraph',
  text: 'Your paragraph text goes here. This is the main body text of your post.'
}
```

**When to use:**
- Main body content
- Explanations and descriptions
- Supporting information

---

### 2. Heading Block

Use for section titles and subheadings.

```typescript
{
  type: 'heading',
  level: 2,  // or 3 for subheadings
  text: 'Your Section Title'
}
```

**Levels:**
- `level: 2` - Major section heading (H2) - larger, bold
- `level: 3` - Subsection heading (H3) - slightly smaller

**When to use:**
- To break content into sections
- To create a visual hierarchy
- To make posts scannable

**Best practices:**
- Use H2 for main sections
- Use H3 for subsections within an H2
- Don't skip levels (go from H2 → H3, not H2 → H4)

---

### 3. Image Block

Use to add visual content.

```typescript
{
  type: 'image',
  src: '/ploomba_in_field_1.png',
  alt: 'Descriptive text for accessibility'
}
```

**Properties:**
- `src` - Path to image file (must be in `/public` folder)
- `alt` - Description for screen readers and SEO

**When to use:**
- To break up long text sections
- To show products or features
- To illustrate concepts visually

**Best practices:**
- Place images after 2-3 paragraphs
- Use descriptive alt text
- Images should be at least 800px wide

---

### 4. Quote Block

Use to highlight key insights or testimonials.

```typescript
{
  type: 'quote',
  text: 'Your important quote or key insight goes here.',
  author: 'Optional Attribution'  // Can be omitted
}
```

**Properties:**
- `text` - The quote content
- `author` - (Optional) Who said it or context

**When to use:**
- To emphasize key points
- To break up dense text
- For testimonials or expert opinions
- As compelling openings or closings

**Best practices:**
- Keep quotes concise and impactful
- Use 1-2 quotes per post maximum
- Only add author if relevant

---

## Content Structure Examples

### Example 1: Traditional Article Flow

```typescript
content: [
  { type: 'paragraph', text: 'Introduction...' },
  { type: 'heading', level: 2, text: 'Main Section' },
  { type: 'paragraph', text: 'Section content...' },
  { type: 'image', src: '/image.png', alt: 'Description' },
  { type: 'paragraph', text: 'More content...' },
  { type: 'heading', level: 2, text: 'Conclusion' },
  { type: 'paragraph', text: 'Closing thoughts...' }
]
```

**Good for:** Standard blog posts, how-to guides

---

### Example 2: Quote-Driven Article

```typescript
content: [
  { type: 'quote', text: 'Compelling opening question?', author: 'Common Problem' },
  { type: 'paragraph', text: 'Context and background...' },
  { type: 'heading', level: 2, text: 'The Solution' },
  { type: 'paragraph', text: 'Explanation...' },
  { type: 'image', src: '/solution.png', alt: 'Solution visual' },
  { type: 'quote', text: 'Key benefit or outcome' },
  { type: 'paragraph', text: 'Final thoughts...' }
]
```

**Good for:** Problem-solution posts, thought leadership

---

### Example 3: Structured List Article

```typescript
content: [
  { type: 'heading', level: 2, text: 'Introduction' },
  { type: 'paragraph', text: 'Brief intro...' },
  { type: 'heading', level: 2, text: 'Three Key Benefits' },
  { type: 'heading', level: 3, text: '1. First Benefit' },
  { type: 'paragraph', text: 'Description...' },
  { type: 'heading', level: 3, text: '2. Second Benefit' },
  { type: 'paragraph', text: 'Description...' },
  { type: 'heading', level: 3, text: '3. Third Benefit' },
  { type: 'paragraph', text: 'Description...' },
  { type: 'image', src: '/benefits.png', alt: 'Visual summary' }
]
```

**Good for:** Listicles, feature comparisons, benefit breakdowns

---

## Tips for Great Blog Posts

### Content Flow

1. **Hook readers early** - Start with a quote, question, or compelling statement
2. **Use visual breaks** - Add images every 3-4 paragraphs
3. **Break up text** - Use headings to create scannable sections
4. **End strong** - Close with a quote or clear call-to-action

### Image Placement Strategy

- **Early (blocks 2-3):** Grab attention, set visual tone
- **Middle (blocks 6-8):** Break up long text, illustrate concepts
- **Late (blocks 10-12):** Reinforce key points, product shots

### Heading Hierarchy

```
Post Title (H1 - automatic)
├── Main Section (H2)
│   ├── Subsection (H3)
│   └── Subsection (H3)
├── Main Section (H2)
└── Conclusion (H2)
```

### Quote Best Practices

- **Opening quote:** Use questions or challenges to hook readers
- **Mid-article quote:** Highlight key insights or benefits
- **Closing quote:** End with vision, call-to-action, or memorable statement
- **With author:** Use for testimonials, expert opinions, team statements

---

## Common Patterns

### Pattern 1: Problem-Solution-Proof

```typescript
content: [
  { type: 'paragraph', text: 'Problem description...' },
  { type: 'quote', text: 'Pain point quote' },
  { type: 'heading', level: 2, text: 'The Solution' },
  { type: 'paragraph', text: 'How we solve it...' },
  { type: 'image', src: '/solution.png', alt: 'Product' },
  { type: 'heading', level: 2, text: 'Real Results' },
  { type: 'paragraph', text: 'Benefits and outcomes...' }
]
```

### Pattern 2: Educational Deep-Dive

```typescript
content: [
  { type: 'heading', level: 2, text: 'What is X?' },
  { type: 'paragraph', text: 'Definition...' },
  { type: 'heading', level: 2, text: 'Why It Matters' },
  { type: 'paragraph', text: 'Context...' },
  { type: 'image', src: '/diagram.png', alt: 'Visual explanation' },
  { type: 'heading', level: 2, text: 'How It Works' },
  { type: 'heading', level: 3, text: 'Step 1' },
  { type: 'paragraph', text: 'Details...' },
  { type: 'heading', level: 3, text: 'Step 2' },
  { type: 'paragraph', text: 'Details...' }
]
```

### Pattern 3: Thought Leadership

```typescript
content: [
  { type: 'quote', text: 'Provocative statement or question' },
  { type: 'paragraph', text: 'Your perspective...' },
  { type: 'heading', level: 2, text: 'The Current State' },
  { type: 'paragraph', text: 'Analysis...' },
  { type: 'heading', level: 2, text: 'The Future' },
  { type: 'paragraph', text: 'Vision...' },
  { type: 'image', src: '/vision.png', alt: 'Future concept' },
  { type: 'quote', text: 'Memorable closing', author: 'Your Team' }
]
```

---

## Step-by-Step: Creating Your First Post

### Step 1: Open the File
Open `src/data/mock-posts.ts` in your code editor.

### Step 2: Copy Template
Copy an existing post structure or use this template:

```typescript
{
  slug: 'my-new-post',
  title: 'My Post Title',
  tag: 'Technology',
  excerpt: 'Brief description',
  imageUrl: '/header-image.png',
  author: 'Your Name',
  date: 'November 6, 2025',
  content: [
    // Add your blocks here
  ]
}
```

### Step 3: Add Your Content Blocks
Build your post block by block:

```typescript
content: [
  {
    type: 'paragraph',
    text: 'Your opening paragraph...'
  },
  {
    type: 'heading',
    level: 2,
    text: 'Your First Section'
  },
  {
    type: 'paragraph',
    text: 'Section content...'
  }
  // Keep adding blocks...
]
```

### Step 4: Add to the Array
Paste your new post into the `allPosts` array in `mock-posts.ts`.

### Step 5: Test
Save the file and view your post at: `localhost:3000/blog/my-new-post`

---

## Troubleshooting

### Common Issues

**Image not showing:**
- Make sure image is in `/public` folder
- Use `/image.png` not `./public/image.png`
- Check file extension matches exactly

**Quote not styled correctly:**
- Ensure `type: 'quote'` is spelled exactly
- Text must be in single or double quotes with proper escaping

**Heading too small/large:**
- Use `level: 2` for main sections
- Use `level: 3` for subsections
- Don't use level 1 (reserved for page title)

**Syntax error:**
- Every property needs a comma after it (except the last one)
- All strings need quotes: `'text'` or `"text"`
- Check for unclosed brackets `{ }` or `[ ]`

---

## Style Guidelines

### Writing Style
- Keep paragraphs 2-4 sentences
- Use active voice
- Write for farmers, not engineers
- Focus on benefits, not just features

### Technical Terms
- Explain jargon on first use
- Use quotes for Ploomba-specific terms: 'Agro App'
- Keep it accessible

### Voice & Tone
- Professional but approachable
- Confident but not arrogant
- Data-driven but empathetic
- Future-focused but practical

---

## Quick Reference

### Block Type Cheat Sheet

| Type | Required Fields | Optional Fields |
|------|----------------|-----------------|
| `paragraph` | `type`, `text` | - |
| `heading` | `type`, `level`, `text` | - |
| `image` | `type`, `src`, `alt` | - |
| `quote` | `type`, `text` | `author` |

### Recommended Post Length

- **Short post:** 4-6 blocks (~300-500 words)
- **Standard post:** 8-12 blocks (~600-900 words)
- **Long-form:** 15+ blocks (~1000+ words)

### Content Mix Recommendation

For a balanced post:
- 50-60% paragraphs
- 20-30% headings
- 10-15% images
- 5-10% quotes

---

## Examples from Our Blog

### See Real Posts

Check out these posts for inspiration:
- **rethinking-fieldwork-solving-soil-compaction** - Problem-solution structure
- **ai-predicts-farm-yields** - Educational deep-dive
- **farmer-first-business-model** - Thought leadership

Open `src/data/mock-posts.ts` to see exactly how they're built!

---

## Need Help?

- Review existing posts in `mock-posts.ts` for examples
- Copy and modify a post structure that works
- Test changes locally before committing
- Ask the development team for technical assistance

---

**Happy blogging! 🎉**


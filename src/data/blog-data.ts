export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  image: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "position-furniture-positivity",
    title: "How to position your furniture for positivity",
    date: "2022-10-10",
    displayDate: "10th Oct 2022",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    category: "Lifestyle",
    tags: ["Interior Design", "Wellness", "Productivity"],
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?</p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Position your desk to face the door</li>
        <li>Keep your space clutter-free</li>
        <li>Add plants for natural energy</li>
      </ul>
    `,
  },
  {
    slug: "getting-started-mcp-server",
    title: "Getting Started with MCP Server: The Future of Model Context Protocol",
    date: "2025-06-20",
    displayDate: "20th Jun 2025",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Learn what MCP Server is, how Model Context Protocol is revolutionizing AI infrastructure, and how you can deploy your own MCP server for scalable, secure, and modular AI workflows.",
    category: "Technology",
    tags: ["AI", "MCP", "Infrastructure"],
    content: `
      <p>The Model Context Protocol (MCP) is revolutionizing how we interact with AI models. By providing a standardized way to manage context, MCP enables more coherent, state-aware, and powerful AI applications.</p>
      <h2>What is MCP?</h2>
      <p>MCP stands for Model Context Protocol. It is a standard for managing the context window of Large Language Models (LLMs) in a structured and efficient way.</p>
      <h2>Why use an MCP Server?</h2>
      <p>Deploying your own MCP server allows you to:</p>
      <ul>
        <li>Maintain data privacy and security</li>
        <li>Scale your AI applications efficiently</li>
        <li>Customize context management strategies</li>
      </ul>
    `,
  },
  {
    slug: "building-smart-agents",
    title: "Building Smart Agents: Automate Your Workflow with AI",
    date: "2025-05-10",
    displayDate: "10th May 2025",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Discover how to create, train, and deploy intelligent agents that can automate repetitive tasks, interact with users, and integrate seamlessly with your MCP server.",
    category: "AI Development",
    tags: ["Agents", "Automation", "Workflow"],
    content: `
      <p>Smart agents are autonomous programs that can perform tasks on your behalf. When powered by AI, these agents can handle complex workflows, make decisions, and learn from their interactions.</p>
      <h2>Steps to Build a Smart Agent</h2>
      <ol>
        <li>Define the agent's goal and scope</li>
        <li>Choose the right LLM and tools</li>
        <li>Design the agent's memory and context</li>
        <li>Implement the agent loop</li>
        <li>Test and refine</li>
      </ol>
    `,
  },
  {
    slug: "bots-vs-agents",
    title: "Bots vs. Agents: What’s the Difference and When to Use Each?",
    date: "2025-04-15",
    displayDate: "15th Apr 2025",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Explore the key differences between bots and agents in the context of AI automation. Learn which is best for your use case and how to leverage both for maximum productivity.",
    category: "AI Concepts",
    tags: ["Bots", "Agents", "Comparison"],
    content: `
      <p>While the terms "bot" and "agent" are often used interchangeably, they represent different levels of capability and autonomy.</p>
      <h2>Bots</h2>
      <p>Bots are typically rule-based or follow a simple script. They are great for handling specific, repetitive tasks like answering FAQs or booking appointments.</p>
      <h2>Agents</h2>
      <p>Agents are more autonomous and goal-oriented. They can reason, plan, and adapt to new situations. They are better suited for complex workflows and open-ended tasks.</p>
    `,
  },
  {
    slug: "fine-tuning-llms",
    title: "Fine-Tuning LLMs for Your Business Needs",
    date: "2025-03-01",
    displayDate: "1st Mar 2025",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Unlock the full potential of Large Language Models (LLMs) by fine-tuning them for your specific business requirements. Step-by-step guide for beginners and pros alike.",
    category: "Machine Learning",
    tags: ["LLM", "Fine-Tuning", "Business"],
    content: `
      <p>Fine-tuning allows you to adapt a pre-trained LLM to your specific domain or task. This can significantly improve performance and accuracy.</p>
      <h2>When to Fine-Tune</h2>
      <p>Consider fine-tuning if:</p>
      <ul>
        <li>You have a specialized dataset</li>
        <li>You need the model to follow a specific format or style</li>
        <li>Off-the-shelf models are not performing well enough</li>
      </ul>
    `,
  },
  {
    slug: "integrating-llms-mcp",
    title: "Integrating LLMs with MCP Server: A Practical Guide",
    date: "2025-02-10",
    displayDate: "10th Feb 2025",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Learn how to connect and manage Large Language Models within your MCP Server setup. Tips, best practices, and sample code for seamless integration.",
    category: "Development",
    tags: ["Integration", "LLM", "MCP"],
    content: `
      <p>Integrating LLMs with an MCP server enables you to build powerful, context-aware applications. This guide covers the technical steps and best practices for a successful integration.</p>
      <h2>Prerequisites</h2>
      <ul>
        <li>An MCP server instance</li>
        <li>Access to an LLM API (e.g., OpenAI, Anthropic)</li>
        <li>Basic knowledge of Python or Node.js</li>
      </ul>
    `,
  },
];

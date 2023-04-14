import { IconType } from "components/core/Icon";

export const TOOLS: {
  name: string;
  description: string;
  domain?: string;
  icon?: IconType;
  imageUrl?: string;
  link: string;
  rounded?: boolean;
}[] = [
  {
    name: "Customerly",
    domain: "www.customerly.io",
    link: "https://customerly.io",
    description:
      "Customerly is the best tool you can use for marketing automation. It's also good for customer support and customer satisfaction.",
  },
  {
    name: "Localazy",
    domain: "localazy.com",
    link: "https://go.igorzanella.dev/localazy",
    description:
      "Localazy is a great tool to manage your translations. You can also order professional translations, or use the ML engines.",
  },
  {
    name: "Typeform",
    domain: "typeform.com",
    link: "https://go.igorzanella.dev/typeform",
    description:
      "Typeform is the best tool to create forms. You can use it for surveys, but also for lead generation or orders.",
    rounded: true,
  },
  {
    name: "Zapier",
    domain: "zapier.com",
    link: "https://zapier.com/",
    description:
      "Zapier is the best tool to integrate different apps together. You can use it to automate your business.",
    rounded: true,
  },
  {
    name: "Grammarly",
    domain: "www.grammarly.com",
    link: "https://go.igorzanella.dev/grammarly",
    description:
      "Grammarly is a writing tool that checks your grammar, spelling, and style. It's great if you want to improve their writing skills.",
  },
  {
    name: "MailTrack",
    domain: "mailtrack.io",
    link: "https://mailtrack.io/",
    description:
      "MailTrack is an email tracking software that notifies you when your message is opened. It's perfect for business and personal use.",
    rounded: true,
  },
  {
    name: "Clockify",
    domain: "clockify.me",
    link: "https://clockify.me/",
    description:
      "Clockify helps you track time spent on tasks, manage projects, and increase productivity. It's great for efficient time management.",
  },
  {
    name: "1Password",
    domain: "1password.com",
    link: "https://1password.com/",
    description:
      "1Password is a password manager that securely stores and autofills your credentials. It keeps your accounts safe and organized.",
    rounded: true,
  },
  {
    name: "Stripe",
    domain: "stripe.com",
    link: "https://stripe.com/",
    description:
      "Stripe is a payment processing platform that helps you accept and manage online payments securely. It's a game-changer!",
    rounded: true,
  },
  {
    name: "Revolut",
    domain: "revolut.com",
    link: "https://go.igorzanella.dev/revolut",
    description:
      "Revolut is a budgeting and banking app with low fees and instant currency exchange. Perfect for travelers and freelancers.",
    rounded: true,
  },
  {
    name: "FattureInCloud",
    domain: "fattureincloud.it",
    link: "https://go.igorzanella.dev/fattureincloud",
    description:
      "FattureInCloud is Italian invoicing software that simplifies billing and accounting for businesses. Save time and effort with ease.",
  },
  {
    name: "Iubenda",
    domain: "iubenda.com",
    link: "https://go.igorzanella.dev/iubenda",
    description:
      "Iubenda is a platform for generating legal documents. It simplifies compliance with privacy laws and saves time and money.",
  },
  {
    name: "Vercel",
    domain: "vercel.com",
    link: "https://vercel.com/",
    description:
      "Vercel deploys fast, scalable web apps. Simplify development and improve user experience with this cloud platform.",
  },
  {
    name: "Ahrefs",
    domain: "ahrefs.com",
    link: "https://ahrefs.com/",
    description:
      "Ahrefs simplifies SEO, boosts traffic, and improves search ranking. Essential for keyword research and analysis.",
    rounded: true,
  },
  {
    name: "AWS",
    domain: "aws.com",
    link: "https://aws.amazon.com/",
    description:
      "AWS is a flexible and secure cloud platform that helps build and scale, improve agility, reduce costs, and accelerate innovation.",
  },
  {
    name: "WebStorm",
    link: "https://www.jetbrains.com/webstorm/",
    icon: "webstorm",
    description:
      "Webstorm is an IDE that helps you write better code faster. It has intelligent coding assistance, debugging, and Git integration.",
  },
  {
    name: "PHPStorm",
    link: "https://www.jetbrains.com/phpstorm/",
    icon: "phpstorm",
    description:
      "PHPStorm is an intelligent IDE for PHP developers. It has smart coding assistance, debugging, and integration with popular tools.",
    rounded: true,
  },
  {
    name: "PyCharm",
    link: "https://www.jetbrains.com/pycharm/",
    icon: "pycharm",
    description:
      "PyCharm is an IDE for Python developers. It has intelligent coding assistance, debugging, and support for popular frameworks.",
    rounded: true,
  },
  {
    name: "GitKraken",
    domain: "www.gitkraken.com",
    link: "https://go.igorzanella.dev/gitkraken",
    description:
      "GitKraken is a Git client that simplifies the Git workflow. It has a visual interface, integrations, and collaboration features.",
  },
  {
    name: "SequelAce",
    link: "https://sequel-ace.com/",
    imageUrl:
      "https://raw.githubusercontent.com/Sequel-Ace/Sequel-Ace/main/docs/images/appIcon-1024.png",
    description:
      "SequelAce is a MySQL/MariaDB database client. It has an intuitive interface, advanced query features, and multiple tabs support.",
  },
  {
    name: "Postman",
    domain: "www.postman.com",
    link: "https://www.postman.com/",
    description:
      "Postman is a platform for API development. It simplifies API testing, documentation, and sharing with team members.",
  },
  {
    name: "Figma",
    domain: "www.figma.com",
    link: "https://www.figma.com/",
    description:
      "Figma is a collaborative interface design tool. It offers real-time collaboration, prototyping, and design system management.",
    rounded: true,
  },
  {
    name: "RayCast",
    domain: "www.raycast.com",
    link: "https://www.raycast.com/",
    description:
      "Raycast is a productivity tool for macOS. It offers a fast way to search and execute commands, integrations, and custom scripts.",
    rounded: true,
  },
  {
    name: "Rectangle",
    domain: "rectangleapp.com",
    link: "https://rectangleapp.com/",
    description:
      "Rectangle is a window management app for macOS. It offers shortcuts, snap areas, and custom layouts to organize windows.",
    rounded: true,
  },
  {
    name: "iTerm2",
    icon: "iterm",
    link: "https://iterm2.com/",
    description:
      "iTerm2 is a terminal emulator for macOS. It offers multiple tabs, split panes, and custom themes.",
    rounded: true,
  },
];

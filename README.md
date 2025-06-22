# UbuntuOS Web Portfolio

A personal portfolio website themed after Ubuntu 20.04, built with Next.js and Tailwind CSS.

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Form Setup](#contact-form-setup)
- [Star History](#star-history)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Ubuntu 20.04 inspired UI
- Built with Next.js & Tailwind CSS
- Responsive design
- Contact form with EmailJS integration

## Demo
[Live Demo](https://your-demo-link.com) <!-- Replace with your actual demo link if available -->

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo/Portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

- **Start the development server:**
  ```bash
  npm start
  # or
  yarn start
  ```
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- **Build for production:**
  ```bash
  npm run build
  # or
  yarn build
  ```

## Contact Form Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/). You may need to create a new Outlook or Gmail account for sending emails.
2. Create a new service in EmailJS, select and log in to your email account.
3. From the EmailJS dashboard, copy your **Service ID** and **User ID**.
4. Create a `.env` file in the root of your project and add:
   ```env
   NEXT_PUBLIC_USER_ID=your_user_id
   NEXT_PUBLIC_TEMPLATE_ID=template_fqqqb9g
   NEXT_PUBLIC_SERVICE_ID=your_service_id
   ```
   Replace `your_user_id` and `your_service_id` with your actual values from EmailJS.

## Star History
[![Star History Chart](https://api.star-history.com/svg?repos=SpideyHere01/portfolio&type=Date)](https://star-history.com/#SpideyHere01/portfolio&Date)

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to your branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

<a href="https://www.buymeacoffee.com/ronak9patel" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 140px !important;" ></a>

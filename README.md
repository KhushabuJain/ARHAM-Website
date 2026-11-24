# ARHAM — Engineering & Construction Consultancy Website

A modern, responsive, full-stack website developed for **ARHAM**, an engineering and construction consultancy providing integrated solutions for industrial and commercial buildings.

The platform showcases ARHAM's engineering expertise, services, company information, and project inquiry process. It also includes an inquiry management system, email notifications, visitor tracking, and an administrative portal.

**Live Website:** https://arhamdesign.com

---

## Overview

ARHAM provides integrated engineering solutions covering the project lifecycle, from planning and design to procurement, construction, and project completion.

This website serves as the company's digital presence, helping visitors explore its services, understand its capabilities, and submit project inquiries.

### Key Features

- Modern, responsive website for desktop, tablet, and mobile devices.
- Professional company overview and About page.
- Detailed engineering and turnkey service pages.
- Dedicated contact and project inquiry form.
- Server-side inquiry processing.
- PostgreSQL database integration for storing inquiry records.
- Email notifications through Resend.
- Customer inquiry confirmation emails.
- Administrative portal for managing inquiries.
- Visitor session and page-view tracking.
- Search-engine-friendly page metadata.
- Reusable React components and structured application architecture.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Full-stack React framework and App Router |
| React 19 | Component-based user interface |
| TypeScript | Type-safe application development |
| Tailwind CSS | Responsive styling and design system |
| Neon PostgreSQL | Cloud-hosted relational database |
| Resend | Transactional email notifications |
| Node.js | JavaScript runtime |
| Git & GitHub | Version control and source code management |
| Vercel | Application deployment and hosting |

---

## Services Showcased

The website presents ARHAM's engineering and construction capabilities, including:

1. Architectural Design
2. Structural Engineering
3. Mechanical Systems (HVAC)
4. Firefighting Solutions
5. Electrical Installations
6. Plumbing & Drainage
7. Green Building & Sustainable Design
8. Site Infrastructure Engineering
9. Project Management & Procurement
10. Civil Engineering

---

## Project Structure

```text
ARHAM-Connected/
├── public/
│   ├── images/
│   │   ├── services/
│   │   └── clients/
│   └── arham-logo.png
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── contact/
│   │   ├── turnkey-services/
│   │   ├── portfolio/
│   │   ├── admin/
│   │   │   └── login/
│   │   ├── actions/
│   │   └── api/
│   │       ├── inquiries/
│   │       └── tracker/
│   │
│   ├── components/
│   │   ├── admin/
│   │   ├── BrandLogo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   │
│   └── lib/
│       ├── resend.ts
│       └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*Note: This is a high-level structure. Additional files and components may exist in the application.*

---

## Getting Started

Follow these instructions to run the project locally.

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — use a version supported by the installed Next.js release.
- npm
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### 2. Clone the Repository

```bash
git clone https://github.com/KhushabuJain/ARHAM-Website.git
```

Navigate into the project directory:

```bash
cd ARHAM-Website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a local environment file named `.env.local` in the project root.

Add the required environment variables using the variable names and configuration from your project environment template and deployment settings.

The application uses environment-based configuration for services such as:

- Neon PostgreSQL database connection.
- Resend API integration.
- Administrative authentication and session security, where configured.

Example:

```env
DATABASE_URL=your_neon_database_connection_string
RESEND_API_KEY=your_resend_api_key
```

**Important:**
- Replace example values with your actual credentials.
- Do not commit `.env.local` or any file containing secrets to GitHub.
- Configure production environment variables separately in Vercel.
- Never expose API keys or database credentials in frontend code.

### 5. Run the Development Server

```bash
npm run dev
```

Open the following address in your browser:

http://localhost:3000

The application will automatically reload when you make code changes.

### 6. Create a Production Build

To verify that the application builds successfully:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## Database

ARHAM uses **Neon PostgreSQL** as its cloud database.

The database supports application data such as:

- Project inquiries and contact submissions.
- Visitor session information.
- Page-view tracking records.

The database connection is configured through environment variables.

Make sure the production database connection string is configured in the deployment environment before using database-dependent features.

---

## Email Integration

The website uses **Resend** to process transactional emails associated with project inquiries.

### Email Workflow

When a visitor submits the inquiry form:

1. The inquiry is processed by the server.
2. The inquiry information is stored in the database.
3. An email notification is sent to the ARHAM administrative inbox.
4. A confirmation email is sent to the visitor.

### Email Configuration

The email integration uses:

- Resend API.
- Verified sending domain: `arhamdesign.com`.
- Sender: `notifications@arhamdesign.com`.
- Inquiry notification recipient: `ho@arhamdesign.com`.

The Resend API key must be configured as a server-side environment variable:

```env
RESEND_API_KEY=your_resend_api_key
```

Do not publish the actual API key in this repository.

---

## Admin Portal

The application includes an administrative portal for accessing and managing submitted inquiries.

The admin functionality is intended for authorized users and includes inquiry-related information and management features.

**Important:** Keep administrative credentials and authentication secrets private. Do not share the admin login URL together with credentials in public documentation.

---

## Visitor Tracking & Analytics

The application includes visitor tracking functionality to record website activity.

Tracking capabilities include:

- Visitor session tracking.
- Page-view recording.
- Website activity data.
- Structured records for future analytics and reporting.

The collected data can support future reporting and integration with tools such as Microsoft Power BI, subject to the database access and reporting configuration.

---

## Deployment

The application is deployed using **Vercel**, with the source code maintained on GitHub.

### Deployment Workflow

1. Make the required changes locally.
2. Test the application using `npm run dev`.
3. Verify the production build using `npm run build`.
4. Commit and push the changes to GitHub.
5. Vercel automatically builds and deploys the updated application when connected to the GitHub repository.

### Git Commands

```bash
git add .
git commit -m "Update ARHAM website"
git push origin main
```

### Vercel Configuration

1. Open [Vercel](https://vercel.com/).
2. Import the ARHAM GitHub repository or open its existing Vercel project.
3. Ensure the framework is detected as Next.js.
4. Configure the required production environment variables.
5. Deploy the application.

### Domain Configuration

The official website domain is:

https://arhamdesign.com

The domain is managed through Squarespace. DNS records should point to the Vercel deployment according to the domain configuration instructions provided by Vercel.

---

## Security & Best Practices

- Keep API keys and credentials in environment variables.
- Never commit `.env.local` or other secret files.
- Keep database access on the server side.
- Protect administrative routes and authentication mechanisms.
- Validate inquiry form data on the server.
- Use HTTPS for production access.
- Review environment variables before deploying.

---

## Future Improvements

Potential future enhancements include:

- Expanded project portfolio and case studies.
- Additional client and partner showcases.
- Enhanced inquiry analytics and reporting.
- Further administrative dashboard improvements.
- Additional performance and accessibility optimizations.

---

## Repository

**GitHub:** https://github.com/KhushabuJain/ARHAM-Website

**Website:** https://arhamdesign.com

---

## License

This project is developed for ARHAM. The source code and associated branding assets are intended for the company's website and business use.
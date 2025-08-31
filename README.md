# 📚 School Management App

[![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

---

## 🚀 Overview

The **School Management App** is a full-stack project built with **Next.js 15 (App Router)**, **MySQL**, and **Cloudinary**.  
It allows users to **add, view, and manage schools** with modern UI, image upload support, and validation.  

This project demonstrates **backend integration, database management, image storage, and clean UI development** — ideal for production-ready applications.

---

## ✨ Features

- ➕ **Add Schools**: Insert details like name, address, city, state, contact, email, and school image.  
- 🏫 **Show Schools**: View all added schools in a **responsive card layout** with hover effects.  
- ☁️ **Image Uploads**: Upload images directly to **Cloudinary** with preview before submission.  
- ✅ **Form Validation**: Powered by `react-hook-form` (contact must be numeric, email format checked, required fields).  
- 🔄 **Loading States**: Submitting shows a **spinner** with feedback.  
- 🎨 **Modern UI**: Tailwind CSS with responsive design.  
- ⚡ **Full-Stack Ready**: MySQL integration via Railway & deployed on Vercel.  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS  
- **Backend:** Next.js API Routes  
- **Database:** MySQL (Railway)  
- **Storage:** Cloudinary (for images)  
- **Form Handling:** React Hook Form  
- **Deployment:** Vercel  

---

## 📂 Project Structure

```bash
school-app/
│── app/
│   ├── api/
│   │   ├── addSchool/route.js     # POST route for adding schools
│   │   └── getSchools/route.js    # GET route for fetching schools
│   ├── add-school/page.js         # Add School form
│   ├── show-school/page.js        # Display schools
│   ├── layout.js                  # Layout with Navbar
│   └── page.js                    # Landing page
│
│── components/
│   └── Navbar.js                  # Navigation bar
│
│── lib/
│   └── db.js                      # MySQL connection
│
│── public/                        # Static assets
│── .env.local                     # Environment variables
│── README.md
```

## 🗄️ Database Schema

**Table: `schools`**

| Column       | Type        | Constraints        |
|--------------|------------|--------------------|
| id           | INT        | Primary Key, Auto Increment |
| name         | VARCHAR(255) | NOT NULL |
| address      | TEXT       | NOT NULL |
| city         | VARCHAR(100) | NOT NULL |
| state        | VARCHAR(100) | NOT NULL |
| contact      | VARCHAR(15) | NOT NULL |
| email_id     | VARCHAR(100) | NOT NULL |
| image_url    | TEXT       | (Stored in Cloudinary) |

---

## 📡 API Endpoints

### ➕ Add School
`POST /api/addSchool`
### ➕ Get Schools
`GET /api/getSchool`

### 🔑 Environment Variables  

Create a `.env.local` file in the root of your project and add the following:  

```env
# MySQL Database (Railway)
DATABASE_HOST=your-database-host  
DATABASE_PORT=your-database-port  
DATABASE_USER=your-database-username  
DATABASE_PASSWORD=your-database-password  
DATABASE_NAME=your-database-name  

# Cloudinary (Image Storage)
CLOUDINARY_NAME=your-cloudinary-cloud-name  
CLOUDINARY_API_KEY=your-cloudinary-api-key  
CLOUDINARY_API_SECRET=your-cloudinary-api-secret  
```


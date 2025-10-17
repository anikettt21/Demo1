# TechFix Hub - Computer Repair & Sales Website

A complete full-stack website for a local computer repair and sales shop built with React, Node.js, Express, and MySQL.

## 🌟 Features

### Frontend (React + Tailwind CSS)
- **Homepage**: Hero section, services overview, testimonials
- **Shop Page**: Product grid with filtering, search, and cart functionality
- **Repair Services**: Service request form with file upload
- **About Us**: Company story, team, and achievements
- **Contact**: Contact form, map, and business information
- **Admin Dashboard**: Product management, repair requests, and customer messages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions with Framer Motion

### Backend (Node.js + Express)
- **RESTful API**: Complete CRUD operations for all entities
- **Authentication**: JWT-based admin authentication
- **Database**: MySQL with proper schema and relationships
- **File Upload**: Support for image uploads
- **CORS**: Configured for frontend integration

### Database (MySQL)
- **Products**: Store computer products and accessories
- **Repairs**: Track repair service requests
- **Messages**: Store customer inquiries
- **Admin Users**: Manage admin authentication

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd techfix-hub
   ```

2. **Set up the database**
   ```bash
   # Create MySQL database
   mysql -u root -p < database/techfix_hub.sql
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Configure environment variables**
   ```bash
   # Edit server/.env file
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=techfix_hub
   JWT_SECRET=your_jwt_secret_key
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ```

5. **Start the backend server**
   ```bash
   cd server
   npm run dev
   # Server will run on http://localhost:5000
   ```

6. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

7. **Start the frontend development server**
   ```bash
   cd client
   npm start
   # App will run on http://localhost:3000
   ```

## 📁 Project Structure

```
techfix-hub/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts (Cart)
│   │   ├── types/         # TypeScript types
│   │   └── assets/        # Static assets
│   └── public/            # Public files
├── server/                # Express Backend
│   ├── routes/            # API routes
│   ├── config/            # Database configuration
│   └── server.js          # Main server file
├── database/              # Database files
│   └── techfix_hub.sql    # Database schema and seed data
└── README.md              # This file
```

## 🛠️ API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Repair Requests
- `GET /api/repairs` - Get all repair requests
- `GET /api/repairs/:id` - Get repair request by ID
- `POST /api/repairs` - Create new repair request
- `PUT /api/repairs/:id` - Update repair request (Admin)
- `DELETE /api/repairs/:id` - Delete repair request (Admin)

### Messages
- `GET /api/messages` - Get all messages
- `GET /api/messages/:id` - Get message by ID
- `POST /api/messages` - Create new message
- `DELETE /api/messages/:id` - Delete message (Admin)

### Authentication
- `POST /api/auth/login` - Admin login

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#64748B)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Headings**: Inter font family
- **Body**: System font stack

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=techfix_hub
JWT_SECRET=your_jwt_secret_key_here
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

### Database Schema

The database includes the following tables:
- `products` - Store computer products and accessories
- `repairs` - Track repair service requests
- `messages` - Store customer inquiries
- `admin_users` - Manage admin authentication

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Configure environment variables for API endpoints

### Backend (Railway/Render/Heroku)
1. Set up MySQL database
2. Configure environment variables
3. Deploy the server code
4. Run database migrations

### Database (PlanetScale/AWS RDS)
1. Create MySQL database
2. Import the schema: `mysql -u username -p database_name < database/techfix_hub.sql`
3. Update connection strings in backend

## 🧪 Testing

### Manual Testing
1. Test all CRUD operations in admin dashboard
2. Verify cart functionality
3. Test form submissions
4. Check responsive design on different devices

### API Testing
Use tools like Postman or curl to test API endpoints:

```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test products endpoint
curl http://localhost:5000/api/products
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@techfixhub.com or create an issue in the repository.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons
- Unsplash for high-quality images

---

**TechFix Hub** - "Repair. Upgrade. Reuse."
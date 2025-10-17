#!/bin/bash

# TechFix Hub Startup Script
echo "🚀 Starting TechFix Hub..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if MySQL is running
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL is not installed. Please install MySQL first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies if needed
if [ ! -d "client/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd client && npm install && cd ..
fi

if [ ! -d "server/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd server && npm install && cd ..
fi

echo "✅ Dependencies installed"

# Start the backend server
echo "🔧 Starting backend server..."
cd server
npm run dev &
SERVER_PID=$!
cd ..

# Wait a moment for server to start
sleep 3

# Start the frontend development server
echo "🎨 Starting frontend development server..."
cd client
npm start &
CLIENT_PID=$!
cd ..

echo ""
echo "🎉 TechFix Hub is starting up!"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:5000"
echo "📊 Admin Dashboard: http://localhost:3000/admin"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait
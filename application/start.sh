#!/bin/sh

# Wait for a specific amount of time (e.g., 30 seconds)
sleep 30

# Start the application
npx prisma migrate deploy

# Start the application
exec npm run start

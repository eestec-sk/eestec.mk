import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '../../../../../lib/prisma';

export async function POST(req: Request) {
  const { firstName, lastName, email, password } = await req.json();

  // Basic server-side validation
  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Validate first and last names (only English letters)
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(firstName)) {
    return NextResponse.json({ message: 'First name must contain only English letters' }, { status: 400 });
  }

  if (!nameRegex.test(lastName)) {
    return NextResponse.json({ message: 'Last name must contain only English letters' }, { status: 400 });
  }

  // Validate email format
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: 'Email is invalid' }, { status: 400 });
  }

  // Validate password length
  if (password.length < 8) {
    return NextResponse.json({ message: 'Password must be at least 8 characters' }, { status: 400 });
  }

  const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { Email: email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User with given email already exists' }, { status: 400 });
    }

    // Hash the password with bcrypt, using a salt of 12
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        Email: email,
        Password: hashedPassword,
        FirstName: formattedFirstName,
        LastName: formattedLastName,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error has occurred during user creation.' }, { status: 500 });
  }
}

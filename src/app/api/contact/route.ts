import { NextRequest, NextResponse } from 'next/server';
import { createContact, ContactFormData } from '@/lib/db';

// This tells Next.js not to statically generate this route
export const dynamic = 'force-dynamic';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactData(data: Partial<ContactFormData>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push('Nome é obrigatório');
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.push('Email é obrigatório');
  } else if (!emailRegex.test(data.email)) {
    errors.push('Email inválido');
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.push('Mensagem é obrigatória');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validation = validateContactData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dados inválidos', 
          errors: validation.errors 
        },
        { status: 400 }
      );
    }

    // Create the contact submission
    const contactData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() || undefined,
      phone: body.phone?.trim() || undefined,
      service: body.service?.trim() || undefined,
      message: body.message.trim()
    };

    const contact = createContact(contactData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!', 
        data: {
          id: contact.id,
          created_at: contact.created_at
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro ao processar o pedido. Tente novamente mais tarde.' 
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
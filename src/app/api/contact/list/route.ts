import { NextResponse } from 'next/server';
import { getAllContacts } from '@/lib/db';

export async function GET() {
  try {
    const contacts = getAllContacts();

    return NextResponse.json(
      { 
        success: true, 
        count: contacts.length,
        data: contacts 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro ao buscar as mensagens. Tente novamente mais tarde.' 
      },
      { status: 500 }
    );
  }
}
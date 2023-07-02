import data from './data.json';
import { NextResponse } from 'next/server'

export async function GET(request) {

    // console.log('request', request);

    return NextResponse.json( data )
    

    
}
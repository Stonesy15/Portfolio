// app/components/ContactSectionClient.tsx
"use client";
import dynamic from 'next/dynamic';

const ContactSection = dynamic(() => import('./contact-section'), { ssr: false });

export default ContactSection;

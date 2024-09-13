'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function offer() {
    const router = useRouter();

    useEffect(() => {
        router.push('/offer/websites');
    }, [router]);

    return null;
}
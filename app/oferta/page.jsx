'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function offer() {
    const router = useRouter();

    useEffect(() => {
        router.push('/oferta/strony-internetowe');
    }, [router]);

    return null;
}
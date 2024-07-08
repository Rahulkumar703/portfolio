'use client';

import { useRouter } from "next/navigation";

const NotFound = () => {

    const router = useRouter();

    router.replace('/explorer/not-found');

    return null;
}

export default NotFound
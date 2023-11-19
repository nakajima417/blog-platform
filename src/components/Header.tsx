import { useUser } from '@auth0/nextjs-auth0/client';

const Profile = () => {
    const { user, isLoading } = useUser();
}
import { signIn, useSession } from 'next-auth/client';
import { useState } from 'react';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession();
    const [loading, setLoading] = useState(false);

    async function handleSubscribe() {
        if (!session) {
            signIn('github');
            return;
        }

        try {
            setLoading(true);
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId,
                }),
            });

            const data = await response.json();

            if (data.sessionId) {
                // Redirecionar para o Stripe Checkout
                window.location.href = data.sessionUrl;
            }
        } catch (error) {
            console.error('Erro ao criar sessão de checkout:', error);
            alert('Erro ao processar pagamento. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
            disabled={loading}
        >
            {loading ? 'Carregando...' : 'Subscribe now'}
        </button>
    );
}
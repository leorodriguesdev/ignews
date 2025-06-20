import Link from 'next/link';
import { useRouter } from 'next/router';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    const router = useRouter();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link 
                        href="/"
                        className={router.pathname === '/' ? styles.active : ''}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/posts"
                        className={router.pathname.startsWith('/posts') ? styles.active : ''}
                    >
                        Posts
                    </Link>
                </nav>
                <SignInButton/>
            </div>
        </header>
    );
}
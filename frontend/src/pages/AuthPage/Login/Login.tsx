import { Link } from 'react-router-dom';

import { Button, Input } from '../../../components/ui';
import { useLoginForm } from './useLoginForm';

export function Login() {
    const { register, onSubmit, errors, isLoading } = useLoginForm();

    return (
        <>
            <h1 className={'text-center text-xl font-medium'}>Авторизация</h1>
            <form onSubmit={onSubmit} className={'flex flex-col gap-2'}>
                <Input
                    fullWidth
                    error={errors?.login?.message}
                    type={'text'}
                    placeholder={'Логин'}
                    required
                    label={'Логин'}
                    {...register('login')}
                />
                <Input
                    fullWidth
                    error={errors?.password?.message}
                    type={'text'}
                    placeholder={'Пароль'}
                    required
                    label={'Пароль'}
                    {...register('password')}
                />
                <Button isLoading={isLoading} type={'submit'}>
                    Войти
                </Button>
            </form>
            <p className={'mt-1 text-center text-sm font-light'}>
                Нету аккаунта?{' '}
                <Link className={'text-yellow-500 hover:underline'} to='/auth/register'>
                    Регистрация
                </Link>
            </p>
        </>
    );
}

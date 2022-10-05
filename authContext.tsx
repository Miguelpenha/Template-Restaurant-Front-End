import { FC, createContext, useState, useEffect, useContext } from 'react'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import api from './api/base'

interface IAuthContext {
    isLogged: boolean
    sigIn: (login: string, password: string) => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: FC = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN]:token } = parseCookies()

        if (token) {
            api.post('/auth/verify', { token }).then(({ data }: { data: { newToken: string, verified: boolean } }) => {
                if (data.newToken) {
                    setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN, data.newToken, {
                        path: '/',
                        secure: true,
                        domain: process.env.NEXT_PUBLIC_DOMAIN,
                        maxAge: 52560000 * 60 * 1 // 100 year
                    })

                    setIsLogged(true)
                } else if (!data.verified) {
                    destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN)

                    setIsLogged(false)
                }
            })
        }
    }, [])
    
    async function sigIn(login: string, password: string) {
        const { authenticated, token }: { authenticated: boolean, token: string } = (await api.post('/auth/login', { login, password })).data
        
        if (authenticated) {
            setIsLogged(true)
            
            setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN, token, {
                path: '/',
                secure: true,
                domain: process.env.NEXT_PUBLIC_DOMAIN,
                maxAge: 52560000 * 60 * 1 // 100 year
            })
        }
    }

    return (
        <AuthContext.Provider value={{ isLogged, sigIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
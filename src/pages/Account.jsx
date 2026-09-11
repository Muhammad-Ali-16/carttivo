import { useState } from 'react'

const inputClass =
    'w-full bg-(--bg-primary) border border-black/10 px-3 py-2.5 text-sm text-black/80 outline-none focus:border-(--bg-secondary) transition-colors'

const labelClass = 'block text-xs font-semibold text-black/55 mb-1.5'

const tabClass = (active) =>
    `flex-1 py-3 text-sm font-semibold transition-colors border-b-2 cursor-pointer ${
        active
            ? 'border-(--bg-secondary) text-black/80'
            : 'border-transparent text-black/40 hover:text-black/60'
    }`

const primaryBtnClass =
    'w-full bg-(--bg-dark) hover:bg-(--bg-secondary) rounded-full text-white text-sm font-semibold py-3 mt-2 transition-opacity hover:opacity-90 cursor-pointer'

function Auth() {
    const [mode, setMode] = useState('login')

    return (
        <section className="checkout-main bg-(--bg-primary) font-Inter py-12">
            <div className="width-common py-10 md:py-14 flex justify-center">
                <div className="w-full max-w-md">

                    {/* >----------------->Tabs<---------------< */}
                    <div className="flex border-b border-black/10">
                        <button
                            type="button"
                            onClick={() => setMode('login')}
                            className={tabClass(mode === 'login')}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode('signup')}
                            className={tabClass(mode === 'signup')}
                        >
                            Sign up
                        </button>
                    </div>

                    {/* >----------------->Login-Form<---------------< */}
                    {mode === 'login' ? (
                        <form action="" className="mt-8 flex flex-col gap-4">
                            <div>
                                <label htmlFor="login-email" className={labelClass}>Email address</label>
                                <input id="login-email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label htmlFor="login-password" className={labelClass + ' mb-0'}>Password</label>
                                    <a href="#" className="text-xs font-semibold text-(--bg-secondary) hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <input id="login-password" name="password" type="password" placeholder="••••••••" className={inputClass} />
                            </div>

                            <label className="flex items-center gap-2.5 mt-1 text-xs text-black/55">
                                <input type="checkbox" className="accent-(--bg-secondary)" />
                                Keep me signed in
                            </label>

                            <button type="submit" className={primaryBtnClass}>
                                Log in
                            </button>

                            <p className="text-center text-xs text-black/55 mt-2">
                                Don't have an account?
                                <button type="button" onClick={() => setMode('signup')} className="font-semibold text-(--bg-secondary) hover:underline">
                                    Sign up
                                </button>
                            </p>
                        </form>
                    ) : (

                    /* >----------------->Signup-Form<---------------< */
                        <form action="" className="mt-8 flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first-name" className={labelClass}>First name</label>
                                    <input id="first-name" name="firstName" type="text" placeholder="Jane" className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className={labelClass}>Last name</label>
                                    <input id="last-name" name="lastName" type="text" placeholder="Doe" className={inputClass} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="signup-email" className={labelClass}>Email address</label>
                                <input id="signup-email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="signup-phone" className={labelClass}>Phone number</label>
                                <input id="signup-phone" name="phone" type="tel" placeholder="+1 800 555 8899" className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="signup-password" className={labelClass}>Password</label>
                                <input id="signup-password" name="password" type="password" placeholder="At least 8 characters" className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="confirm-password" className={labelClass}>Confirm password</label>
                                <input id="confirm-password" name="confirmPassword" type="password" placeholder="Re-enter your password" className={inputClass} />
                            </div>

                            <label className="flex items-start gap-2.5 mt-1 text-xs text-black/55">
                                <input type="checkbox" className="accent-(--bg-secondary) mt-0.5" />
                                Email me with news and offers
                            </label>

                            <button type="submit" className={primaryBtnClass}>
                                Create account
                            </button>

                            <p className="text-center text-xs text-black/55 mt-2">
                                Already have an account?
                                <button type="button" onClick={() => setMode('login')} className="font-semibold text-(--bg-secondary) hover:underline">
                                    Log in
                                </button>
                            </p>
                        </form>
                    )}

                </div>
            </div>
        </section>
    )
}

export default Auth
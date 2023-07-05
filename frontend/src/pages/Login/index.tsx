import { useState } from 'react'
import { Link } from 'react-router-dom'

interface formData {
    email: string,
    password: string
}

const Login = () => {
    const iniData:formData = {
        email: '',
        password: ''
    }
    const [data, setData] = useState<formData>(iniData)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(data)
    }
    const fillForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const resetForm= () => {
        setData(iniData)
    }
    return (
        <div className='flex flex-col items-center justify-center mt-40'>
            <form onSubmit={handleSubmit}>
                <div className='text-2xl font-semibold text-center my-3'>Log in</div>
                <div className='my-1'>
                    <label htmlFor="email">Email:</label>
                    <input required className='bg-blue-300 rounded-md ml-2 px-2 py-1 outline-none' autoFocus type="email" name="email" id="email" value={data.email}  onChange={fillForm}/>
                </div>
                <div className='my-1'>
                    <label htmlFor="password">Password:</label>
                    <input required className=' bg-blue-300 rounded-md ml-2 px-2 py-1 outline-none' type="password" name="password" id="password" value={data.password} onChange={fillForm} />
                </div>
                <div className='flex items-center justify-center px-4 mt-4'>
                    <button className='mr-2 px-2 py-1 rounded-md bg-green-400' type='submit'>Log in</button>
                    <button className='ml-2 px-2 py-1 rounded-md bg-red-400' type='reset' onClick={resetForm}>Reset</button>
                </div>
                <div className='text-center mt-4'>
                    <Link to='/register' className='text-blue-400 underline'>Don't have an account?</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
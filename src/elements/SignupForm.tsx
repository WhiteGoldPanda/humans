import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface SignupFormData {
  username: string;
  age: number;
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
  age: yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
});

export function SignupForm() {
const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
  resolver: yupResolver(schema),
});
const onSubmit = (data: SignupFormData) => {
  console.log('Form submitted:', data);
}

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                {...register('username')}
                className={`border p-2 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input
                id="age"
                type="number"
                {...register('age')}
                className={`border p-2 ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
    </form>
)

};
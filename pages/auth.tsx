import ButtonBrand from '@/src/components/buttons/ButtonBrand'
import InputBrand from '@/src/components/form/InputBrand'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

type Props = {}

const Auth = (props: Props) => {
  const schema = yup
    .object({
      name: yup
        .string()
        .required('Обязательное поле')
        .min(2, 'Минимальная длина: 2 символа')
        .max(100, 'Максимальная длина: 100 символов'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    console.log('submit')
  }

  const onError = () => {
    console.log('errors', errors)
  }
  return (
    <div className="bg-[url('../public/images/bg.jpg')] bg-cover relative">
      <div className='absolute left-0 top-0 bg-dark opacity-50 w-full h-full'></div>
      <div className='w-2/3 h-screen bg-dark -skew-x-12 flex items-start justify-center z-10'>
        <div className='py-8 px-9 w-full mt-[10%] flex flex-col items-center justify-center skew-x-12 rounded-sm'>
          <h2 className='text-3xl text-center text-[white] mb-10'>
            Авторизация
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className='w-1/2 flex-col flex items-center justify-center'
            action='POST'
          >
            <InputBrand
              name='name'
              placeholder='Логин'
              error={errors['name']?.message}
              registerData={register('name')}
            />
            <ButtonBrand className='mt-10'>Войти</ButtonBrand>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth

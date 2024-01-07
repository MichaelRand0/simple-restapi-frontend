
interface Props extends React.ComponentProps<'input'> {
  registerData: Object
  variant?: 'default'
  error?: string
}

const InputBrand = (props: Props) => {
  const {
    placeholder,
    name,
    registerData,
    error = '',
    variant = 'default',
  } = props
  const variants = {
    default:
      'text-brand border-b-brand placeholder-shown:border-b-[white] focus:border-b-brand focus:placeholder:text-brand',
    error:
      'text-[red] border-b-[red] placeholder-shown:border-b-[red] focus:border-b-[red] focus:placeholder:text-[red] placeholder:text-[red]',
  }
  return (
    <div className='flex flex-col'>
      <input
        className={`text-lg pr-2 py-2 transition border-b ${
          variants[error ? 'error' : variant]
        }`}
        type='text'
        placeholder={placeholder}
        name={name}
        {...registerData}
      />
      <span
        className={`text-[red] text-xs pl-1 pt-2 transition ${
          error ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {error}
      </span>
    </div>
  )
}

export default InputBrand

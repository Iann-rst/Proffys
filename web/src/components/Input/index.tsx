import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string;
  
}
/* Componente para a criação do input do formulário */
const Input:React.FC<InputProps> = ({label, name, ...rest}) =>{
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
}
export default Input;
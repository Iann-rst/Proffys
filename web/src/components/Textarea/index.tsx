import React, {TextareaHTMLAttributes} from 'react';

/* Arquivo de estilização*/
import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string;
  
}
/* Componente para a criação do Textarea do formulário */
const Textarea:React.FC<TextareaProps> = ({label, name, ...rest}) =>{
  return(
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </div>
  );
}
export default Textarea;
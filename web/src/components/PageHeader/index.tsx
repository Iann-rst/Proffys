import React from "react";
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

/* Arquivo de estilização*/
import './styles.css';

/* Propriedades do componente Header das páginas:
*** Study (TeacherList) e Give-Classes (TeacherForm) */
interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) =>{
  return (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={backIcon} alt="Voltar" />
      </Link>
      <img src={logoImg} alt="Proffy" />
    </div>

    <div className="header-content">
      
      {/*props para o titulo no Header da página */}
      <strong>{props.title}</strong>
      
      {/*props para a descrição no Header da página */}
      {props.description && <p>{props.description}</p>} 

      {/*Recebendo o formulário da TeacherList por props */}
      {props.children}
    </div>
  </header>
  );
}

export default PageHeader;
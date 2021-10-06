import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

/* Arquivo de estilização */
import './styles.css';

function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      {/* Componente PageHeader (Header da página) 
      *** title (props)
      */}
      <PageHeader title="Estes são os proffys disponíveis.">

        {/*Passando o formulário como props.children para o componente PageHeader*/}
        <form id="search-teachers">
          {/* Utilizando componente Input, para representar os inputs do formulário*/}
          <Input name="subject" label="Matéria"/>
          <Input name="week_day" label="Dia da semana"/>
          <Input type="time" name="time" label="Hora"/>
        </form>
      </PageHeader>
      
      {/* Listagem dos proffys */}
      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  )
}

export default TeacherList;
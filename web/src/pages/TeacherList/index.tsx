import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
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
          
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ciência', label: 'Ciência'},
              {value: 'Educação Física', label: 'Educação Física'},
              {value: 'Física', label: 'Física'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'História', label: 'História'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Português', label: 'Português'},
              {value: 'Química', label: 'Química'},
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
              {value: '3 ', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6', label: 'Sábado'},
            ]}
          />

          {/* Utilizando componente Input, para representar os inputs do formulário*/}
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
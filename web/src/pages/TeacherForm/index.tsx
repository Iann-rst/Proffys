import React from 'react';

/* Componentes */
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

/* Ícone de aviso */
import warningIcon from '../../assets/images/icons/warning.svg';

/* Arquivo de estilização */
import './styles.css';

function TeacherForm(){
  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          {/* Componente para os inputs */}
          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="WhatsApp"/>

          {/* Componente para a textarea */}
          <Textarea name="bio" label="Biografia"/> 
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          {/* Componente para o select */}
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

          {/* Componente para os inputs */}
          <Input name="cost" label="Custo da sua hora por aula"/>
       </fieldset> 
       
      <fieldset>
        <legend>
          Horários Disponíveis
          <button type="button">
          + Novo horário
        </button>
        </legend>

        <div className="schedule-item">
          {/* Componente para o select */}
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
          {/* Componente para os inputs */}
          <Input name="from" label="Das" type="time"/>
          <Input name="to" label="Até" type="time"/>
        </div>
      </fieldset>    

      <footer>
        <p>
          <img src={warningIcon} alt="Aviso importante" />
          Importante! <br/>
          Preencha todos os dados
        </p>
        <button type="button">Salvar cadastro</button>
      </footer>

      </main>

      
    </div>
  )
}

export default TeacherForm;
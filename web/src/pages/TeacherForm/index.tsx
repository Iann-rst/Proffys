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
          <Input name="cost" label="Custo da sua hora por aula"/>
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
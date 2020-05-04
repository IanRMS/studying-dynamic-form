import React from 'react';
import {Container, styles} from './styles';
import DynamicForm from 'react-native-dynamic-form';
import {StyleSheet} from 'react-native';
import theme from './theme';

function Home() {
  const form = [
    {
      key: 'header',
      type: 'header',
      subtype: 'h2',
      label: 'Dynamic Form',
      style: {
        fontSize: 18,
      },
    },
    {
      key: 'name',
      type: 'text',
      required: true,
      label: 'Nome Completo',
      placeholder: 'Insira seu nome',
      subtype: 'text', // one of text, tel, email and password
      maxlength: 30, // optional
      minLength: 5,
      disabled: false, // optional,
      validationFunc: (value) => {
        // do validation here and return bool status
      }, // optional
    },
    {
      key: 'email',
      icon: 'lock',
      type: 'text',
      required: true,
      label: 'E-mail',
      placeholder: 'Insira seu e-mail',
      subtype: 'email', // one of text, tel, email and password
      maxlength: 30, // optional
      disabled: false, // optional,
      validationFunc: (value) => {
        // do validation here and return bool status
      }, // optional
    },
    {
      key: 'phone',
      type: 'text',
      required: true,
      label: 'Nº telefone',
      placeholder: 'Insira o número com o ddd',
      subtype: 'tel',
      minLength: 10,
      maxlength: 11,
      disabled: false,
    },
    {
      key: 'empresa',
      type: 'select',
      label: 'Empresa atual',
      multiple: true,
      searchInputPlaceholder: 'Procurar empresa...',
      values: [
        {label: 'SMN Tecnologia da informação', value: 'smn', selected: false},
        {label: 'Eng Digital', value: 'eng', selected: false},
        {label: 'Luiza Labs', value: 'labs', selected: false},
        {label: 'Palacio das Ferramentas', value: 'gurgel', selected: false},
      ],
    },
    {
      key: 'job',
      type: 'radio-group',
      label: 'Função',
      other: true,
      values: [
        {label: 'Back-end', value: 'backend', selected: true},
        {label: 'Front-end', value: 'frontend', selected: false},
        {label: 'Analista de negócios', value: 'analista', selected: false},
        {label: 'Full-stack', value: 'full', selected: false},
      ],
    },
  ];
  return (
    <Container>
      <DynamicForm
        form={form}
        style={[StyleSheet.absoluteFill, styles.formStyle]}
        theme={theme}
        submitButton={{
          action: (responses) => {
            console.warn(responses);
          },
          label: 'Prosseguir',
          buttonStyle: {
            backgroundColor: '#00b0ff',
            borderRadius: 4,
            height: 40,
            flex: 1,
          },
          buttonTextStyle: {
            fontSize: 18,
          },
        }}
      />
    </Container>
  );
}
export default Home;

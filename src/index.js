import React from 'react'
import { StatusBar, Text } from 'react-native'
import { Authenticator } from 'aws-amplify-react-native'
import { AmplifyTheme, Localei18n } from './components'
// import awsconfig from '../aws-exports'
import Icon from 'react-native-vector-icons/FontAwesome5'
// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true
//   }
// })

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    }
  ]
}

const App = () => {
  return (
    <>
      {/* <Icon name={'comments'} size={30} color="#900" /> */}
      {/* <Text>Hello</Text> */}
      {/* <StatusBar barStyle="dark-content" /> */}
      <Localei18n />
      {/* <Authenticator usernameAttributes="email" signUpConfig={signUpConfig} theme={AmplifyTheme} /> */}
      <Authenticator usernameAttributes="email" signUpConfig={signUpConfig} theme={AmplifyTheme} />
    </>
  )
}

export default App

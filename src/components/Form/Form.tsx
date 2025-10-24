import { useState } from 'react'
import {
  FormWrapper,
  FormBlock,
  FormLabel,
  FormField,
  FormControl,
} from './Form.styled'

import PlusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('')

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (text) {
      props.createNewToDo(text)
      setText('')
    }
  }

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <FormControl icon={PlusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  )
}

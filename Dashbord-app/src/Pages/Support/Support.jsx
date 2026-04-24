import { Icon, HStack, Stack, Text } from '@chakra-ui/react'
import DashbordLayout from '../../Component/DashbordLayout'
import React from 'react'
import { MdEmail } from "react-icons/md";
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
} from "@chakra-ui/react"
const Support = () => {
  return (
    <DashbordLayout title="Support">
      <HStack w="full">
        <Stack w="80" >
         <Icon 
          as={MdEmail} 
          fontSize="32px"
          />
            <Text fontSize="32px" >Contact Us</Text>
          <Text >Have a question or just want to know 
            more? Feel free to reach out to us.</Text>        
        </Stack> 
         <Fieldset.Root size="lg" p="3" maxW="md" bg="white">
      <Stack>
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content >
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input name="name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input name="email" type="email" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Country</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="country">
              <For each={["United Kingdom", "Canada", "United States"]}>
                {(item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
      </HStack>
    </DashbordLayout>
  )
}

export default Support

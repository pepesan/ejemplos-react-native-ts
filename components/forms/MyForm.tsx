import {Text, TextInput, Button, SafeAreaView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

function MyForm(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <SafeAreaView>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="FirstName"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            //style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="LastName"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}

export default MyForm;

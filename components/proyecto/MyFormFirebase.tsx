import {Text, TextInput, Button, SafeAreaView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import database from '@react-native-firebase/database';
function MyFormFirebase({navigation}): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      age: '',
    },
  });
  function onSubmit(data: any) {
    console.log(data);
    const newReference = database().ref('/users').push();
    newReference.set(data).then(() => {
      console.log('Data set.');
      navigation.pop(1);
    });
  }

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
            placeholder="Name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            //style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="age"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="age"
      />
      {errors.age && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}

export default MyFormFirebase;

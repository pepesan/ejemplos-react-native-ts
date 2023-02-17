import {Text, TextInput, Button, SafeAreaView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import database from '@react-native-firebase/database';

function MyFormFirebase({route, navigation}): JSX.Element {
  const {item, key} = route.params;
  console.log(item);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: item.name,
      age: item.age,
    },
  });
  function onSubmit(data: any) {
    console.log(data);
    console.log(key);
    database()
      .ref('/users/' + key)
      .update(data)
      .then(() => {
        console.log('Data updated.');
      });
    navigation.pop(1);
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

export default async function ({data: {name}}) {
  if (name === 'abc'){
    return {first_name: 'John', last_name: 'Doe', id: '2'}
  } else {
    return {first_name: 'No', last_name: 'One', id: '3'}
  }
}

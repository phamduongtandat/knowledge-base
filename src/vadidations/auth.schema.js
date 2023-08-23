import { array, object, ref, string } from 'yup';

const signInSchema = object({
    username: string().max(100).required('required'),
    password: string().max(100).required('required')

});


export {

    signInSchema,

};
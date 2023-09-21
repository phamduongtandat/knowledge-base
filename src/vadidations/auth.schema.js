import { array, object, ref, string } from 'yup';

const signInSchema = object({
    username: string().max(100).required('required'),
    password: string().max(100).required('required')

});

const updatePasswordSchema = object({

    newPassword: string()
        .required('required')
        .min(6, 'Minimum 8 character'),
    newPasswordConfirm: string()
        .oneOf([ref('newPassword')], 'Not match')
        .required('required'),
});


export {

    signInSchema,
    updatePasswordSchema

};
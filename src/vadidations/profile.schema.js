import { array, object, ref, string, date } from 'yup';

const profileSchema = object().shape({
    email: string().email('Incorrect email type').max(100),
    phone: string().matches(
        /^\d{10}$/,
        'Required 10 number type',
    ),

});


export {

    profileSchema

};
import { array, object, ref, string, date } from 'yup';

const profileSchema = object().shape({
    email: string().email('Incorrect email type').max(100),
    phone: string().matches(
        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
        'Phone number must be number type and 10 characters ',
    ),
    birth: date(),
});


export {

    profileSchema

};
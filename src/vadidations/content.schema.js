import { array, object, ref, string } from 'yup';

const folderSchema = object({
    name: string().max(200).required('required'),

});


export {

    folderSchema
};
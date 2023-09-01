import { array, object, ref, string, mixed } from 'yup';

const folderSchema = object({
    name: string().max(200).required('required'),

});

const fileSchema = object({
    file: mixed()
        .test('required', 'No file', value => value && value.length)

});

export {

    folderSchema, fileSchema
};
// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:56:35 PM
    Last Modified: 02-24-2022 02:56:42 PM
    Last Updated By: Andrew Laychak

    Description: Arguments for the file upload resolver

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { ArgsType, Field } from 'type-graphql';
// #endregion

// #region File Upload Arguments
/**
 * Arguments for the File Upload resolver
 */
@ArgsType()
class FileUploadArgs {
  @Field(() => GraphQLUpload, {
    name: 'file',
    description: 'The file to be upload',
  })
  file!: FileUpload;
}
// #endregion

// #region Exports
export default FileUploadArgs;
// #endregion

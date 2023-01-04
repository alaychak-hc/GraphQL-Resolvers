// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:56:35 PM
    Last Modified: 01-04-2023 11:30:30 AM
    Last Updated By: Andrew Laychak

    Description: Arguments for the file upload resolver

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import type { FileUpload } from 'graphql-upload/processRequest.mjs';
import { ArgsType, Field } from 'type-graphql';
// #endregion

// #region File Upload Arguments
/**
 * Arguments for the File Upload resolver
 */
@ArgsType()
class FileUploadArgs {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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

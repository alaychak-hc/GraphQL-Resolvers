// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:56:35 PM
    Last Modified: 06-14-2022 03:29:40 PM
    Last Updated By: Xlantra1

    Description: Arguments for the file upload resolver

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { AntDesignFileUploadScalar } from '@alaychak-hc/graphql-scalars';
import { UploadedFileDetails } from '../types/All';
import { ArgsType, Field } from 'type-graphql';
// #endregion

// #region File Upload Arguments
/**
 * Arguments for the File Upload resolver
 */
@ArgsType()
class FileUploadArgs {
  @Field(() => AntDesignFileUploadScalar, {
    name: 'file',
    description: 'The file to be upload',
  })
  file!: UploadedFileDetails;
}

@ArgsType()
class FileUploadMultiArgs {
  @Field(() => [AntDesignFileUploadScalar], {
    name: 'files',
    description: 'The files to be upload',
  })
  files!: UploadedFileDetails[];
}
// #endregion

// #region Exports
export { FileUploadArgs, FileUploadMultiArgs };
// #endregion

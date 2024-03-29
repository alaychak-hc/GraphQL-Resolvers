// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:53:00 PM
    Last Modified: 06-28-2022 09:55:55 AM
    Last Updated By: Andrew Laychak

    Description: The return type of the file upload resolver

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { Field, ObjectType } from 'type-graphql';
// #endregion

// #region File Upload
@ObjectType({ description: 'Details of a file upload' })
class FileUpload {
  @Field(() => String, {
    description: 'The unique identifier of the file upload',
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    description: 'The name of the file upload',
    nullable: true,
  })
  name?: string;

  @Field(() => String, {
    description: 'The url of the file upload',
    nullable: true,
  })
  url?: string;
}
// #endregion

// #region Exports
export default FileUpload;
// #endregion

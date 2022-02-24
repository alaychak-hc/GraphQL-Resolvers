// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:53:00 PM
    Last Modified: 02-24-2022 02:53:02 PM
    Last Updated By: Andrew Laychak

    Description: The return type of the file upload resolver

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { Field } from 'type-graphql/dist/decorators/Field';
import { ObjectType } from 'type-graphql/dist/decorators/ObjectType';
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

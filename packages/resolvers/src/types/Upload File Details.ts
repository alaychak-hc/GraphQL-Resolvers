// #region Developer Information
/*
 ********************************************
    Author: Xlantra1
    Email: Xlantra1@gmail.com

    Created At: 06-14-2022 03:28:13 PM
    Last Modified: 06-14-2022 03:28:38 PM
    Last Updated By: Xlantra1

    Description: Fields for Upload File that can be queried. 
                 These typically correlate to the database columns, but not always.
                 On occassion there are fields that hold subfields of other types (e.g. GROUP => uses GROUP_ID to link to GROUP type)
    References:
      - Types => https://typegraphql.com/docs/types-and-fields.html
 ********************************************
*/
// #endregion

// #region Imports
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Directive } from 'type-graphql';
import { Field } from 'type-graphql/dist/decorators/Field';
import { ObjectType } from 'type-graphql/dist/decorators/ObjectType';
// #endregion

// #region Upload
@ObjectType({ description: 'Details of an upload' })
class UploadedFileDetails {
  @Field(() => String, {
    description: 'The unique ID of the file',
    nullable: true,
  })
  uid = '';

  @Directive('date')
  @Field(() => String, {
    description: 'The date that the file was last modified (in epoch time)',
    nullable: true,
  })
  lastModified?: string;

  @Field(() => String, {
    description:
      'The date that the file was last modified (in datetime format)',
    nullable: true,
  })
  lastModifiedDate?: string;

  @Field(() => String, {
    description: 'The name of the file',
  })
  name = '';

  @Field(() => Number, {
    description: 'The size of the file',
    nullable: true,
  })
  size?: number;

  @Field(() => String, {
    description: 'The mimetype of the file',
    nullable: true,
  })
  type?: string;

  @Field(() => Number, {
    description: 'The percent that has been processed (typically will be zero)',
    nullable: true,
  })
  percent?: number;

  @Field(() => GraphQLUpload, {
    description: 'The percent that has been processed (typically will be zero)',
    nullable: true,
  })
  originFileObj?: Promise<FileUpload>;
}
// #endregion

// #region Exports
export default UploadedFileDetails;
// #endregion

// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:53:23 PM
    Last Modified: 02-24-2022 02:53:56 PM
    Last Updated By: Andrew Laychak

    Description: Notification for the system

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { ObjectType, Field, Directive } from 'type-graphql';
import { v4 as uuidv4 } from 'uuid';
// #endregion

// #region Notification
@ObjectType()
class Notification {
  @Field(() => String, { nullable: true })
  NOTIFICATION_ID?: string = uuidv4();

  @Field(() => String, { nullable: true })
  MESSAGE?: string;

  @Directive('date')
  @Field(() => String, { nullable: true })
  CREATED_AT?: string = new Date().toISOString();
}
// #endregion

// #region Exports
export default Notification;
// #endregion

// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:56:10 PM
    Last Modified: 02-24-2022 02:56:12 PM
    Last Updated By: Andrew Laychak

    Description: 
        Notification - This class contains the arguments that the Notification resolver accepts

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { IsNotEmpty } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';
// #endregion

// #region Notification Arguments
/**
 * Arguments for the Notification resolver
 */
@ArgsType()
class NotificationArgs {
  @Field(() => String, {
    description: 'The topic that the notification uses',
    nullable: true,
  })
  @IsNotEmpty({
    message: 'You must supply a topic',
  })
  topic?: string;

  @Field(() => String, {
    description: 'The message of the notification',
    nullable: true,
  })
  @IsNotEmpty({
    message: 'You must supply a message',
  })
  message?: string;
}
// #endregion

// #region Exports
export default NotificationArgs;
// #endregion

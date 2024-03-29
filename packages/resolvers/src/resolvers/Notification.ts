// #region ESLint Rules
/* eslint-disable class-methods-use-this */
// #endregion

// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:54:13 PM
    Last Modified: 06-28-2022 09:55:30 AM
    Last Updated By: Andrew Laychak

    Description: Resolver that handles notifications

    References:
      - Subscriptions => https://typegraphql.com/docs/subscriptions.html
 ********************************************
*/
// #endregion

// #region Imports
import {
  Resolver,
  Args,
  Mutation,
  PubSub,
  PubSubEngine,
  Root,
  Subscription,
} from 'type-graphql';
import { NotificationArgs } from '@arguments/All.js';
import { Notification } from '@stypes/All.js';
// #endregion

// #region Notification Resolver
@Resolver(() => Notification)
export class NotificationResolver {
  @Subscription({
    topics: ({ args }) => (args as NotificationArgs).topic ?? '',
  })
  notificationSubscribe(
    @Args() { topic: _topic }: NotificationArgs,
    @Root() { NOTIFICATION_ID, MESSAGE, CREATED_AT }: Notification
  ): Notification {
    return {
      NOTIFICATION_ID,
      MESSAGE,
      CREATED_AT,
    };
  }

  // @Subscription({
  //   topics: 'FAVORITE_CITY',
  //   filter: ({ payload, args }: ResolverFilterData<User, UserArgs>) =>
  //     payload.FAVORITE_CITY === args.favoriteCity,
  // })
  // favoriteCitySubscribe(
  //   @Root() { USER_ID, NAME, FAVORITE_CITY, CREATED_AT }: User
  // ): User {
  //   return {
  //     USER_ID,
  //     NAME,
  //     FAVORITE_CITY,
  //     CREATED_AT,
  //   };
  // }

  @Mutation(() => Boolean)
  async addNotification(
    @PubSub() pubSub: PubSubEngine,
    @Args() { topic, message }: NotificationArgs
  ): Promise<boolean> {
    const nNotification: Notification = {
      MESSAGE: message,
    };

    let fTopic = 'NOTIFICATION';
    if (topic) {
      fTopic = topic;
    }

    await pubSub.publish(fTopic, nNotification);

    return true;
  }
}
// #endregion

// #region Exports
export default NotificationResolver;
// #endregion

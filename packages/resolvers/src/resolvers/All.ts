// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:17:36 PM
    Last Modified: 02-24-2022 02:48:01 PM
    Last Updated By: Andrew Laychak

    Description: Exports all the resolvers to make it easier to import from one file instead of multiple files.

    References:
      - None
 ********************************************
*/
// #endregion

// #region Module Information
// All.ts
/**
 * Contains all the various resolvers for the GraphQL schema
 *
 * @packageDocumentation
 * @module Schema Resolvers
 */
// #endregion

// #region Imports
import NotificationResolver from './Notification';
import FileUploadResolver from './File Upload';
// #endregion

// #region Exports
export { NotificationResolver, FileUploadResolver };
// #endregion

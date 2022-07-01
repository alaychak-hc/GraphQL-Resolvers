// #region ESLint Rules
/* eslint-disable class-methods-use-this */
// #endregion

// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:18:05 PM
    Last Modified: 06-28-2022 10:30:22 AM
    Last Updated By: Andrew Laychak

    Description: Resolver that handles retrieving Groups from the database

    References:
      - Resolvers => https://www.apollographql.com/docs/apollo-server/data/resolvers/
      - Upload => https://github.com/jaydenseric/graphql-upload
 ********************************************
*/
// #endregion

// #region Imports
import { Resolver, Args, Mutation } from 'type-graphql';
import { FileUploadArgs } from '@arguments/All.js';
import { ensureDirSync } from 'fs-extra';
import path from 'path';
import fs from 'fs';
import logManager from '@alaychak-hc/log-manager';
import { ApolloError } from 'apollo-server-express';
// #endregion

// #region File Upload Resolver
@Resolver()
export class FileUploadResolver {
  @Mutation(() => Boolean)
  async uploadFile(@Args() { file }: FileUploadArgs): Promise<boolean> {
    const fileResolved = await Promise.resolve(file);

    const saveDirectory = process.env.UPLOAD_SAVE_DIRECTORY
      ? process.env.UPLOAD_SAVE_DIRECTORY
      : path.join(process.cwd(), 'uploads');

    ensureDirSync(saveDirectory);

    const writableStream = fs.createWriteStream(
      `${saveDirectory}/${fileResolved.filename}`,
      {
        autoClose: true,
      }
    );

    const saveFile = new Promise((res, rej) => {
      fileResolved
        .createReadStream()
        .pipe(writableStream)
        .on('finish', () => res(true))
        .on('error', (e) => {
          rej(new Error(`ERROR UPLOADING FILE: ${e.message}`));
          logManager.error('ERROR UPLOADING FILE', e.message);
        });
    });

    try {
      await saveFile;
    } catch (e) {
      logManager.error(`ERROR SAVING FILE: ${(e as Error).message}`);

      throw new ApolloError(
        `ERROR SAVING FILE: ${(e as Error).message}`,
        '500'
      );
    }

    return true;
  }
}
// #endregion

// #region Exports
export default FileUploadResolver;
// #endregion

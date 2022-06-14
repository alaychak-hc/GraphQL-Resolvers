// #region ESLint Rules
/* eslint-disable class-methods-use-this */
// #endregion

// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 02-24-2022 02:18:05 PM
    Last Modified: 06-14-2022 03:32:40 PM
    Last Updated By: Xlantra1

    Description: Resolver that handles retrieving Groups from the database

    References:
      - Resolvers => https://www.apollographql.com/docs/apollo-server/data/resolvers/
      - Upload => https://github.com/jaydenseric/graphql-upload
 ********************************************
*/
// #endregion

// #region Imports
import { Args, Mutation } from 'type-graphql';
import { Resolver } from 'type-graphql/dist/decorators/Resolver';
import { FileUploadArgs, FileUploadMultiArgs } from '@arguments/All';
import { ensureDirSync, createWriteStream } from 'fs-extra';
import path from 'path';
import logManager from '@alaychak-hc/log-manager';
import { ApolloError } from 'apollo-server-express';
import fs from 'fs-extra';
// #endregion

// #region File Upload Resolver
@Resolver()
export class FileUploadResolver {
  @Mutation(() => Boolean)
  async uploadFile(@Args() { file }: FileUploadArgs): Promise<boolean> {
    // const fileResolved = await Promise.resolve(file);

    // const saveDirectory = process.env.UPLOAD_SAVE_DIRECTORY
    //   ? process.env.UPLOAD_SAVE_DIRECTORY
    //   : path.join(process.cwd(), 'uploads');

    // ensureDirSync(saveDirectory);
    // const writeStreamPath = `${saveDirectory}/${fileResolved.filename}`;

    // const saveFile = new Promise((resolve, reject) => {
    //   fileResolved
    //     .createReadStream()
    //     .on('error', (error) => {
    //       fs.unlinkSync(writeStreamPath);

    //       return reject(error);
    //     })
    //     .pipe(createWriteStream(writeStreamPath))
    //     .on('error', reject)
    //     .on('finish', resolve);
    // });

    // try {
    //   await saveFile;
    // } catch (e) {
    //   const files = fs.readdirSync(saveDirectory);
    //   if (files.length === 0) {
    //     fs.rmdirSync(saveDirectory);
    //   }

    //   logManager.error(`ERROR SAVING FILE: ${(e as Error).message}`);

    //   throw new ApolloError(
    //     `ERROR SAVING FILE: ${(e as Error).message}`,
    //     '500'
    //   );
    // }

    return true;
  }

  @Mutation(() => Boolean)
  async uploadFiles(@Args() { files }: FileUploadMultiArgs): Promise<boolean> {
    console.log('MULTI - FILES: ', files);

    return true;
  }
}
// #endregion

// #region Exports
export default FileUploadResolver;
// #endregion

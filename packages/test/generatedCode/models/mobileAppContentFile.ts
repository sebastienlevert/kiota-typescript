import {Entity} from './index';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppContentFile extends Entity, Partial<Parsable> {
    /** The Azure Storage URI. */
    azureStorageUri?: string;
    /** The time the Azure storage Uri expires. */
    azureStorageUriExpirationDateTime?: Date;
    /** The time the file was created. */
    createdDateTime?: Date;
    /** A value indicating whether the file is committed. */
    isCommitted?: boolean;
    /** The manifest information. */
    manifest?: string;
    /** the file name. */
    name?: string;
    /** The size of the file prior to encryption. */
    size?: number;
    /** The size of the file after encryption. */
    sizeEncrypted?: number;
    /** Contains properties for upload request states. */
    uploadState?: MobileAppContentFileUploadState;
}

import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLockerFile extends Entity, Partial<Parsable> {
    /** The friendly name */
    displayName?: string;
    /** File as a byte array */
    file?: string;
    /** SHA256 hash of the file */
    fileHash?: string;
    /** Version of the entity. */
    version?: string;
}

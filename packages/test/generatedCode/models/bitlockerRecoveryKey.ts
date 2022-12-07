import {Entity} from './index';
import {VolumeType} from './volumeType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKey extends Entity, Partial<Parsable> {
    /** The date and time when the key was originally backed up to Azure Active Directory. */
    createdDateTime?: Date;
    /** ID of the device the BitLocker key is originally backed up from. */
    deviceId?: string;
    /** The BitLocker recovery key. */
    key?: string;
    /** The volumeType property */
    volumeType?: VolumeType;
}

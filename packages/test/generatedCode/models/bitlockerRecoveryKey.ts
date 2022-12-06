import {Entity} from './index';
import {VolumeType} from './volumeType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKey extends Entity, Partial<Parsable> {
    /** The date and time when the key was originally backed up to Azure Active Directory. Not nullable. */
    createdDateTime?: Date;
    /** Identifier of the device the BitLocker key is originally backed up from. Supports $filter (eq). */
    deviceId?: string;
    /** The BitLocker recovery key. Returned only on $select. Not nullable. */
    key?: string;
    /** Indicates the type of volume the BitLocker key is associated with. The possible values are: 1 (for operatingSystemVolume), 2 (for fixedDataVolume), 3 (for removableDataVolume), and 4 (for unknownFutureValue). */
    volumeType?: VolumeType;
}

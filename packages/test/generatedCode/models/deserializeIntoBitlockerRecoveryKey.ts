import {deserializeIntoEntity} from './deserializeIntoEntity';
import {BitlockerRecoveryKey} from './index';
import {VolumeType} from './volumeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitlockerRecoveryKey(bitlockerRecoveryKey: BitlockerRecoveryKey | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bitlockerRecoveryKey),
        "createdDateTime": n => { bitlockerRecoveryKey.createdDateTime = n.getDateValue() as any ; },
        "deviceId": n => { bitlockerRecoveryKey.deviceId = n.getStringValue() as any ; },
        "key": n => { bitlockerRecoveryKey.key = n.getStringValue() as any ; },
        "volumeType": n => { bitlockerRecoveryKey.volumeType = n.getEnumValue<VolumeType>(VolumeType) as any ; },
    }
}

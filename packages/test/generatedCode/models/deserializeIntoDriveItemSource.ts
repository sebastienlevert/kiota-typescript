import {DriveItemSourceApplication} from './driveItemSourceApplication';
import {DriveItemSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemSource(driveItemSource: DriveItemSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "application": n => { driveItemSource.application = n.getEnumValue<DriveItemSourceApplication>(DriveItemSourceApplication) as any ; },
        "externalId": n => { driveItemSource.externalId = n.getStringValue() as any ; },
    }
}

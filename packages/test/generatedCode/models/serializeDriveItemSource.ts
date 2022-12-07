import {DriveItemSourceApplication} from './driveItemSourceApplication';
import {DriveItemSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemSource(writer: SerializationWriter, driveItemSource: DriveItemSource | undefined = {}) : void {
            writer.writeEnumValue<DriveItemSourceApplication>("application", driveItemSource.application);
            writer.writeStringValue("externalId", driveItemSource.externalId);
}

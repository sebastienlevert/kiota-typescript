import {DriveItemVersion} from './index';
import {serializeBaseItemVersion} from './serializeBaseItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemVersion(writer: SerializationWriter, driveItemVersion: DriveItemVersion | undefined = {}) : void {
        serializeBaseItemVersion(writer, driveItemVersion)
            writer.writeStringValue("content", driveItemVersion.content);
            writer.writeNumberValue("size", driveItemVersion.size);
}

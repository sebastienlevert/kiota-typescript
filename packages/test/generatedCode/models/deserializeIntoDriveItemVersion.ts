import {deserializeIntoBaseItemVersion} from './deserializeIntoBaseItemVersion';
import {DriveItemVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemVersion(driveItemVersion: DriveItemVersion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItemVersion(driveItemVersion),
        "content": n => { driveItemVersion.content = n.getStringValue() as any ; },
        "size": n => { driveItemVersion.size = n.getNumberValue() as any ; },
    }
}

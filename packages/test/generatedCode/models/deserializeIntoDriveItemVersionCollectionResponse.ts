import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDriveItemVersion} from './deserializeIntoDriveItemVersion';
import {DriveItemVersionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemVersionCollectionResponse(driveItemVersionCollectionResponse: DriveItemVersionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(driveItemVersionCollectionResponse),
        "value": n => { driveItemVersionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDriveItemVersion) as any ; },
    }
}

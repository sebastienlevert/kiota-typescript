import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDrive} from './deserializeIntoDrive';
import {DriveCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveCollectionResponse(driveCollectionResponse: DriveCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(driveCollectionResponse),
        "value": n => { driveCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDrive) as any ; },
    }
}

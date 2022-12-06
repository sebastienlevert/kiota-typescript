import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessPackageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCollectionResponse(accessPackageCollectionResponse: AccessPackageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageCollectionResponse),
        "value": n => { accessPackageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackage) as any ; },
    }
}

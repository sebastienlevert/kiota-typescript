import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedMobileApp} from './deserializeIntoManagedMobileApp';
import {ManagedMobileAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileAppCollectionResponse(managedMobileAppCollectionResponse: ManagedMobileAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedMobileAppCollectionResponse),
        "value": n => { managedMobileAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileApp) as any ; },
    }
}

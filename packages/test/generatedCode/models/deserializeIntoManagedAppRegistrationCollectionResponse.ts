import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {ManagedAppRegistrationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppRegistrationCollectionResponse(managedAppRegistrationCollectionResponse: ManagedAppRegistrationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppRegistrationCollectionResponse),
        "value": n => { managedAppRegistrationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppRegistration) as any ; },
    }
}

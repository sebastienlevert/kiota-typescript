import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosManagedAppRegistration} from './deserializeIntoIosManagedAppRegistration';
import {IosManagedAppRegistrationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppRegistrationCollectionResponse(iosManagedAppRegistrationCollectionResponse: IosManagedAppRegistrationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosManagedAppRegistrationCollectionResponse),
        "value": n => { iosManagedAppRegistrationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosManagedAppRegistration) as any ; },
    }
}

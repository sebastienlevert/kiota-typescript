import {deserializeIntoAndroidManagedAppRegistration} from './deserializeIntoAndroidManagedAppRegistration';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidManagedAppRegistrationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppRegistrationCollectionResponse(androidManagedAppRegistrationCollectionResponse: AndroidManagedAppRegistrationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidManagedAppRegistrationCollectionResponse),
        "value": n => { androidManagedAppRegistrationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidManagedAppRegistration) as any ; },
    }
}

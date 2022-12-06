import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSoftwareOathAuthenticationMethod} from './deserializeIntoSoftwareOathAuthenticationMethod';
import {SoftwareOathAuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSoftwareOathAuthenticationMethodCollectionResponse(softwareOathAuthenticationMethodCollectionResponse: SoftwareOathAuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(softwareOathAuthenticationMethodCollectionResponse),
        "value": n => { softwareOathAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSoftwareOathAuthenticationMethod) as any ; },
    }
}

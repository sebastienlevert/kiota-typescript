import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIpNamedLocation} from './deserializeIntoIpNamedLocation';
import {IpNamedLocationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpNamedLocationCollectionResponse(ipNamedLocationCollectionResponse: IpNamedLocationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ipNamedLocationCollectionResponse),
        "value": n => { ipNamedLocationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIpNamedLocation) as any ; },
    }
}

import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {IpRangeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpRangeCollectionResponse(ipRangeCollectionResponse: IpRangeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ipRangeCollectionResponse),
        "value": n => { ipRangeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIpRange) as any ; },
    }
}

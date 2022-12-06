import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosNetworkUsageRule} from './deserializeIntoIosNetworkUsageRule';
import {IosNetworkUsageRuleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosNetworkUsageRuleCollectionResponse(iosNetworkUsageRuleCollectionResponse: IosNetworkUsageRuleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosNetworkUsageRuleCollectionResponse),
        "value": n => { iosNetworkUsageRuleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosNetworkUsageRule) as any ; },
    }
}

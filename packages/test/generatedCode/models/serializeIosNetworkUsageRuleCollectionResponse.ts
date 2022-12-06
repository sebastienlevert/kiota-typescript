import {IosNetworkUsageRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosNetworkUsageRule} from './serializeIosNetworkUsageRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosNetworkUsageRuleCollectionResponse(writer: SerializationWriter, iosNetworkUsageRuleCollectionResponse: IosNetworkUsageRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosNetworkUsageRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosNetworkUsageRuleCollectionResponse.value as any, serializeIosNetworkUsageRule);
}

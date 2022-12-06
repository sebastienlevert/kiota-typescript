import {GroupLifecyclePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGroupLifecyclePolicy} from './serializeGroupLifecyclePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupLifecyclePolicyCollectionResponse(writer: SerializationWriter, groupLifecyclePolicyCollectionResponse: GroupLifecyclePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupLifecyclePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", groupLifecyclePolicyCollectionResponse.value as any, serializeGroupLifecyclePolicy);
}

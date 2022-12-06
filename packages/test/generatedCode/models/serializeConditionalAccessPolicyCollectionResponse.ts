import {ConditionalAccessPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConditionalAccessPolicy} from './serializeConditionalAccessPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPolicyCollectionResponse(writer: SerializationWriter, conditionalAccessPolicyCollectionResponse: ConditionalAccessPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conditionalAccessPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", conditionalAccessPolicyCollectionResponse.value as any, serializeConditionalAccessPolicy);
}

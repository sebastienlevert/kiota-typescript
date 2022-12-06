import {AppliedConditionalAccessPolicyCollectionResponse} from './index';
import {serializeAppliedConditionalAccessPolicy} from './serializeAppliedConditionalAccessPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppliedConditionalAccessPolicyCollectionResponse(writer: SerializationWriter, appliedConditionalAccessPolicyCollectionResponse: AppliedConditionalAccessPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appliedConditionalAccessPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appliedConditionalAccessPolicyCollectionResponse.value as any, serializeAppliedConditionalAccessPolicy);
}

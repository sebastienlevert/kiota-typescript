import {PolicyBaseCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePolicyBaseCollectionResponse(writer: SerializationWriter, policyBaseCollectionResponse: PolicyBaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, policyBaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", policyBaseCollectionResponse.value as any, serializePolicyBase);
}

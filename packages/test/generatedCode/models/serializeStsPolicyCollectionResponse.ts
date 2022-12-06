import {StsPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStsPolicyCollectionResponse(writer: SerializationWriter, stsPolicyCollectionResponse: StsPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, stsPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", stsPolicyCollectionResponse.value as any, serializeStsPolicy);
}

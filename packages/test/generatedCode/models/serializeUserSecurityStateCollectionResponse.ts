import {UserSecurityStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserSecurityState} from './serializeUserSecurityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSecurityStateCollectionResponse(writer: SerializationWriter, userSecurityStateCollectionResponse: UserSecurityStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userSecurityStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userSecurityStateCollectionResponse.value as any, serializeUserSecurityState);
}

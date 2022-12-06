import {HostSecurityStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeHostSecurityState} from './serializeHostSecurityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostSecurityStateCollectionResponse(writer: SerializationWriter, hostSecurityStateCollectionResponse: HostSecurityStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, hostSecurityStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", hostSecurityStateCollectionResponse.value as any, serializeHostSecurityState);
}

import {FileSecurityStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFileSecurityState} from './serializeFileSecurityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileSecurityStateCollectionResponse(writer: SerializationWriter, fileSecurityStateCollectionResponse: FileSecurityStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, fileSecurityStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", fileSecurityStateCollectionResponse.value as any, serializeFileSecurityState);
}

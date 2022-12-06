import {InvestigationSecurityStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInvestigationSecurityState} from './serializeInvestigationSecurityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvestigationSecurityStateCollectionResponse(writer: SerializationWriter, investigationSecurityStateCollectionResponse: InvestigationSecurityStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, investigationSecurityStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", investigationSecurityStateCollectionResponse.value as any, serializeInvestigationSecurityState);
}

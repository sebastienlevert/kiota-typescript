import {AuditPropertyCollectionResponse} from './index';
import {serializeAuditProperty} from './serializeAuditProperty';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditPropertyCollectionResponse(writer: SerializationWriter, auditPropertyCollectionResponse: AuditPropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, auditPropertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", auditPropertyCollectionResponse.value as any, serializeAuditProperty);
}

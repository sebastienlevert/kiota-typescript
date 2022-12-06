import {SecurityResourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSecurityResource} from './serializeSecurityResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityResourceCollectionResponse(writer: SerializationWriter, securityResourceCollectionResponse: SecurityResourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, securityResourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", securityResourceCollectionResponse.value as any, serializeSecurityResource);
}

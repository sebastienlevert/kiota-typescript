import {VerifiedDomainCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeVerifiedDomain} from './serializeVerifiedDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVerifiedDomainCollectionResponse(writer: SerializationWriter, verifiedDomainCollectionResponse: VerifiedDomainCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, verifiedDomainCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", verifiedDomainCollectionResponse.value as any, serializeVerifiedDomain);
}

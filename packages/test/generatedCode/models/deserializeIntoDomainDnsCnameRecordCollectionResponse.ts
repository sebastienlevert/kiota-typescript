import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDomainDnsCnameRecord} from './deserializeIntoDomainDnsCnameRecord';
import {DomainDnsCnameRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsCnameRecordCollectionResponse(domainDnsCnameRecordCollectionResponse: DomainDnsCnameRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsCnameRecordCollectionResponse),
        "value": n => { domainDnsCnameRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsCnameRecord) as any ; },
    }
}

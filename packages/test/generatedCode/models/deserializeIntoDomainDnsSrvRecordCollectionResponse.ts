import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDomainDnsSrvRecord} from './deserializeIntoDomainDnsSrvRecord';
import {DomainDnsSrvRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsSrvRecordCollectionResponse(domainDnsSrvRecordCollectionResponse: DomainDnsSrvRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsSrvRecordCollectionResponse),
        "value": n => { domainDnsSrvRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsSrvRecord) as any ; },
    }
}

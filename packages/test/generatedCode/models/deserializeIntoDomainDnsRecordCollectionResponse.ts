import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsRecordCollectionResponse(domainDnsRecordCollectionResponse: DomainDnsRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsRecordCollectionResponse),
        "value": n => { domainDnsRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsRecord) as any ; },
    }
}

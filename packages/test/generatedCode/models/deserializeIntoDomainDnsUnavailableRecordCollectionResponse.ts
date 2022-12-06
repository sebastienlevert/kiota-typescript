import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDomainDnsUnavailableRecord} from './deserializeIntoDomainDnsUnavailableRecord';
import {DomainDnsUnavailableRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsUnavailableRecordCollectionResponse(domainDnsUnavailableRecordCollectionResponse: DomainDnsUnavailableRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsUnavailableRecordCollectionResponse),
        "value": n => { domainDnsUnavailableRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsUnavailableRecord) as any ; },
    }
}

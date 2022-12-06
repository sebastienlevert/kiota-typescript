import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDomainDnsMxRecord} from './deserializeIntoDomainDnsMxRecord';
import {DomainDnsMxRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsMxRecordCollectionResponse(domainDnsMxRecordCollectionResponse: DomainDnsMxRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsMxRecordCollectionResponse),
        "value": n => { domainDnsMxRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsMxRecord) as any ; },
    }
}

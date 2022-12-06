import {deserializeIntoAgreement} from './deserializeIntoAgreement';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AgreementCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementCollectionResponse(agreementCollectionResponse: AgreementCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementCollectionResponse),
        "value": n => { agreementCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreement) as any ; },
    }
}

import {deserializeIntoAgreementAcceptance} from './deserializeIntoAgreementAcceptance';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AgreementAcceptanceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementAcceptanceCollectionResponse(agreementAcceptanceCollectionResponse: AgreementAcceptanceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementAcceptanceCollectionResponse),
        "value": n => { agreementAcceptanceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementAcceptance) as any ; },
    }
}

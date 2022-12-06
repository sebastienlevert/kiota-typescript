import {deserializeIntoAgreementFileVersion} from './deserializeIntoAgreementFileVersion';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AgreementFileVersionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileVersionCollectionResponse(agreementFileVersionCollectionResponse: AgreementFileVersionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementFileVersionCollectionResponse),
        "value": n => { agreementFileVersionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementFileVersion) as any ; },
    }
}

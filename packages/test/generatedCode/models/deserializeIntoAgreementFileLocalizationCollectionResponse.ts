import {deserializeIntoAgreementFileLocalization} from './deserializeIntoAgreementFileLocalization';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AgreementFileLocalizationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileLocalizationCollectionResponse(agreementFileLocalizationCollectionResponse: AgreementFileLocalizationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(agreementFileLocalizationCollectionResponse),
        "value": n => { agreementFileLocalizationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementFileLocalization) as any ; },
    }
}

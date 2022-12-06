import {deserializeIntoAgreement} from './deserializeIntoAgreement';
import {deserializeIntoAgreementAcceptance} from './deserializeIntoAgreementAcceptance';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TermsOfUseContainer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsOfUseContainer(termsOfUseContainer: TermsOfUseContainer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(termsOfUseContainer),
        "agreementAcceptances": n => { termsOfUseContainer.agreementAcceptances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementAcceptance) as any ; },
        "agreements": n => { termsOfUseContainer.agreements = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreement) as any ; },
    }
}

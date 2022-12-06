import {deserializeIntoAgreementFileProperties} from './deserializeIntoAgreementFileProperties';
import {deserializeIntoAgreementFileVersion} from './deserializeIntoAgreementFileVersion';
import {AgreementFileLocalization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileLocalization(agreementFileLocalization: AgreementFileLocalization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFileLocalization),
        "versions": n => { agreementFileLocalization.versions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementFileVersion) as any ; },
    }
}

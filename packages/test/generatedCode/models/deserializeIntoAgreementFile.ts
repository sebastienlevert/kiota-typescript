import {deserializeIntoAgreementFileLocalization} from './deserializeIntoAgreementFileLocalization';
import {deserializeIntoAgreementFileProperties} from './deserializeIntoAgreementFileProperties';
import {AgreementFile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFile(agreementFile: AgreementFile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFile),
        "localizations": n => { agreementFile.localizations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAgreementFileLocalization) as any ; },
    }
}

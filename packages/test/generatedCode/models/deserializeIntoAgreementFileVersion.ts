import {deserializeIntoAgreementFileProperties} from './deserializeIntoAgreementFileProperties';
import {AgreementFileVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileVersion(agreementFileVersion: AgreementFileVersion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFileVersion),
    }
}

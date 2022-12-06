import {AgreementFileLocalization} from './index';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {serializeAgreementFileVersion} from './serializeAgreementFileVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileLocalization(writer: SerializationWriter, agreementFileLocalization: AgreementFileLocalization | undefined = {}) : void {
        serializeAgreementFileProperties(writer, agreementFileLocalization)
            writer.writeCollectionOfObjectValuesFromMethod("versions", agreementFileLocalization.versions as any, serializeAgreementFileVersion);
}

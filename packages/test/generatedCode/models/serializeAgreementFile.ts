import {AgreementFile} from './index';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFile(writer: SerializationWriter, agreementFile: AgreementFile | undefined = {}) : void {
        serializeAgreementFileProperties(writer, agreementFile)
            writer.writeCollectionOfObjectValuesFromMethod("localizations", agreementFile.localizations as any, serializeAgreementFileLocalization);
}

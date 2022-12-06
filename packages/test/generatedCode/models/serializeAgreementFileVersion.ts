import {AgreementFileVersion} from './index';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileVersion(writer: SerializationWriter, agreementFileVersion: AgreementFileVersion | undefined = {}) : void {
        serializeAgreementFileProperties(writer, agreementFileVersion)
}

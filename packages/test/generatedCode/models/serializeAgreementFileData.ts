import {AgreementFileData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileData(writer: SerializationWriter, agreementFileData: AgreementFileData | undefined = {}) : void {
            writer.writeStringValue("data", agreementFileData.data);
            writer.writeStringValue("@odata.type", agreementFileData.odataType);
}

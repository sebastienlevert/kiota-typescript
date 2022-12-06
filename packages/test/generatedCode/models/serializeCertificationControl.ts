import {CertificationControl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificationControl(writer: SerializationWriter, certificationControl: CertificationControl | undefined = {}) : void {
            writer.writeStringValue("name", certificationControl.name);
            writer.writeStringValue("@odata.type", certificationControl.odataType);
            writer.writeStringValue("url", certificationControl.url);
}

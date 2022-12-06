import {WorkforceIntegrationEncryption} from './index';
import {WorkforceIntegrationEncryptionProtocol} from './workforceIntegrationEncryptionProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegrationEncryption(workforceIntegrationEncryption: WorkforceIntegrationEncryption | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { workforceIntegrationEncryption.odataType = n.getStringValue() as any ; },
        "protocol": n => { workforceIntegrationEncryption.protocol = n.getEnumValue<WorkforceIntegrationEncryptionProtocol>(WorkforceIntegrationEncryptionProtocol) as any ; },
        "secret": n => { workforceIntegrationEncryption.secret = n.getStringValue() as any ; },
    }
}

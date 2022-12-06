import {deserializeIntoAgreementFileData} from './deserializeIntoAgreementFileData';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AgreementFileProperties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileProperties(agreementFileProperties: AgreementFileProperties | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(agreementFileProperties),
        "createdDateTime": n => { agreementFileProperties.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { agreementFileProperties.displayName = n.getStringValue() as any ; },
        "fileData": n => { agreementFileProperties.fileData = n.getObject(deserializeIntoAgreementFileData) as any ; },
        "fileName": n => { agreementFileProperties.fileName = n.getStringValue() as any ; },
        "isDefault": n => { agreementFileProperties.isDefault = n.getBooleanValue() as any ; },
        "isMajorVersion": n => { agreementFileProperties.isMajorVersion = n.getBooleanValue() as any ; },
        "language": n => { agreementFileProperties.language = n.getStringValue() as any ; },
    }
}

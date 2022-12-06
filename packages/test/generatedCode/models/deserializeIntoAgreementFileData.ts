import {AgreementFileData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileData(agreementFileData: AgreementFileData | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "data": n => { agreementFileData.data = n.getStringValue() as any ; },
        "@odata.type": n => { agreementFileData.odataType = n.getStringValue() as any ; },
    }
}

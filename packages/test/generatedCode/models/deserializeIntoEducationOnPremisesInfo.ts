import {EducationOnPremisesInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOnPremisesInfo(educationOnPremisesInfo: EducationOnPremisesInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "immutableId": n => { educationOnPremisesInfo.immutableId = n.getStringValue() as any ; },
        "@odata.type": n => { educationOnPremisesInfo.odataType = n.getStringValue() as any ; },
    }
}

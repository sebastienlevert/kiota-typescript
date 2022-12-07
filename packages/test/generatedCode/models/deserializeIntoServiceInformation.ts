import {ServiceInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceInformation(serviceInformation: ServiceInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { serviceInformation.name = n.getStringValue() as any ; },
        "webUrl": n => { serviceInformation.webUrl = n.getStringValue() as any ; },
    }
}

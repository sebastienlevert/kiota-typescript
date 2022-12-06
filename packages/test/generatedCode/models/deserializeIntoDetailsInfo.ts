import {DetailsInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDetailsInfo(detailsInfo: DetailsInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { detailsInfo.odataType = n.getStringValue() as any ; },
    }
}

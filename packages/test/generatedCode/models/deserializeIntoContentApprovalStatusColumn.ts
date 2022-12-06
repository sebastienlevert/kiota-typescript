import {ContentApprovalStatusColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentApprovalStatusColumn(contentApprovalStatusColumn: ContentApprovalStatusColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { contentApprovalStatusColumn.odataType = n.getStringValue() as any ; },
    }
}

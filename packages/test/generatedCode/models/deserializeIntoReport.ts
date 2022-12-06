import {Report} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReport(report: Report | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { report.content = n.getStringValue() as any ; },
        "@odata.type": n => { report.odataType = n.getStringValue() as any ; },
    }
}

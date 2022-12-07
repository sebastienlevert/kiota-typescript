import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookApplication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookApplication(workbookApplication: WorkbookApplication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookApplication),
        "calculationMode": n => { workbookApplication.calculationMode = n.getStringValue() as any ; },
    }
}

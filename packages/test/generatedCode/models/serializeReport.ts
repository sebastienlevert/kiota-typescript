import {Report} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReport(writer: SerializationWriter, report: Report | undefined = {}) : void {
            writer.writeStringValue("content", report.content);
            writer.writeStringValue("@odata.type", report.odataType);
}

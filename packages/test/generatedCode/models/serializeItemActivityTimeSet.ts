import {ItemActivityTimeSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityTimeSet(writer: SerializationWriter, itemActivityTimeSet: ItemActivityTimeSet | undefined = {}) : void {
            writer.writeDateValue("lastRecordedDateTime", itemActivityTimeSet.lastRecordedDateTime);
            writer.writeDateValue("observedDateTime", itemActivityTimeSet.observedDateTime);
            writer.writeDateValue("recordedDateTime", itemActivityTimeSet.recordedDateTime);
}

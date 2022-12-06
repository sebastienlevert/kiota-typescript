import {TabUpdatedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTabUpdatedEventMessageDetail(writer: SerializationWriter, tabUpdatedEventMessageDetail: TabUpdatedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, tabUpdatedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", tabUpdatedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("tabId", tabUpdatedEventMessageDetail.tabId);
}

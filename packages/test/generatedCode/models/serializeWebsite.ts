import {Website} from './index';
import {WebsiteType} from './websiteType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebsite(writer: SerializationWriter, website: Website | undefined = {}) : void {
            writer.writeStringValue("address", website.address);
            writer.writeStringValue("displayName", website.displayName);
            writer.writeEnumValue<WebsiteType>("type", website.type);
}

import {ConditionalAccessUsers} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessUsers(writer: SerializationWriter, conditionalAccessUsers: ConditionalAccessUsers | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("excludeGroups", conditionalAccessUsers.excludeGroups);
            writer.writeCollectionOfPrimitiveValues<string>("excludeRoles", conditionalAccessUsers.excludeRoles);
            writer.writeCollectionOfPrimitiveValues<string>("excludeUsers", conditionalAccessUsers.excludeUsers);
            writer.writeCollectionOfPrimitiveValues<string>("includeGroups", conditionalAccessUsers.includeGroups);
            writer.writeCollectionOfPrimitiveValues<string>("includeRoles", conditionalAccessUsers.includeRoles);
            writer.writeCollectionOfPrimitiveValues<string>("includeUsers", conditionalAccessUsers.includeUsers);
            writer.writeStringValue("@odata.type", conditionalAccessUsers.odataType);
}

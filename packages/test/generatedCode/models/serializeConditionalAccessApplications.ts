import {ConditionalAccessApplications} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessApplications(writer: SerializationWriter, conditionalAccessApplications: ConditionalAccessApplications | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("excludeApplications", conditionalAccessApplications.excludeApplications);
            writer.writeCollectionOfPrimitiveValues<string>("includeApplications", conditionalAccessApplications.includeApplications);
            writer.writeCollectionOfPrimitiveValues<string>("includeAuthenticationContextClassReferences", conditionalAccessApplications.includeAuthenticationContextClassReferences);
            writer.writeCollectionOfPrimitiveValues<string>("includeUserActions", conditionalAccessApplications.includeUserActions);
            writer.writeStringValue("@odata.type", conditionalAccessApplications.odataType);
}

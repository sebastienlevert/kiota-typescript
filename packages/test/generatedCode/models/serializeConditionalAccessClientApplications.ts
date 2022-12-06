import {ConditionalAccessClientApplications} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessClientApplications(writer: SerializationWriter, conditionalAccessClientApplications: ConditionalAccessClientApplications | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("excludeServicePrincipals", conditionalAccessClientApplications.excludeServicePrincipals);
            writer.writeCollectionOfPrimitiveValues<string>("includeServicePrincipals", conditionalAccessClientApplications.includeServicePrincipals);
            writer.writeStringValue("@odata.type", conditionalAccessClientApplications.odataType);
}

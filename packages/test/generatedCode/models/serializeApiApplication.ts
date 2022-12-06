import {ApiApplication} from './index';
import {serializePermissionScope} from './serializePermissionScope';
import {serializePreAuthorizedApplication} from './serializePreAuthorizedApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApiApplication(writer: SerializationWriter, apiApplication: ApiApplication | undefined = {}) : void {
            writer.writeBooleanValue("acceptMappedClaims", apiApplication.acceptMappedClaims);
            writer.writeCollectionOfPrimitiveValues<string>("knownClientApplications", apiApplication.knownClientApplications);
            writer.writeCollectionOfObjectValuesFromMethod("oauth2PermissionScopes", apiApplication.oauth2PermissionScopes as any, serializePermissionScope);
            writer.writeStringValue("@odata.type", apiApplication.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("preAuthorizedApplications", apiApplication.preAuthorizedApplications as any, serializePreAuthorizedApplication);
            writer.writeNumberValue("requestedAccessTokenVersion", apiApplication.requestedAccessTokenVersion);
}
